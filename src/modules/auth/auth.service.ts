import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntiy } from '../../entities/user.entity';
import { EncryptionService } from './encrption.service';
import { generateJwtToken } from '../../utils/jwt.utils';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { UserRepository } from './dto/repository/user.repository';
import { RoleEntity } from '../../entities/role.entity';
import { RoleRepository } from './dto/repository/role.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntiy)
    private readonly userRepository: UserRepository,
    @InjectRepository(RoleEntity)
    private readonly roleRepository: RoleRepository,
    private readonly encrytionService: EncryptionService,
  ) {}
  async login(authBody: LoginDto) {
    const { email, password } = authBody;
    const user = await this.userRepository.findOne({
      where: { email },
      relations: { roles: true },
    });
    if (!user)
      throw new HttpException(
        'User Authentication Failed',
        HttpStatus.UNAUTHORIZED,
      );

    const doesPasswordMatch = await this.encrytionService.comparePassword(
      password,
      user.passowrd,
    );
    if (!doesPasswordMatch)
      throw new HttpException('Inncorrect Password', HttpStatus.FORBIDDEN);
    return {
      status: 200,
      success: true,
      token: generateJwtToken({ ...user }),
    };
  }


  
  async register(userInput: RegisterDto) {
    const { email, password, roles } = userInput;
    const passwordHash = await this.encrytionService.hashPassword(password);
    const userRoles = await this.roleRepository
      .createQueryBuilder('role_entity')
      .where('role_entity.name IN (:...names)', { names: roles })
      .getMany();
    const user = new UserEntiy();
    user.email = email;
    user.passowrd = passwordHash;
    user.roles = userRoles;
    return this.userRepository.save(user);
  }
}
