import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserEntiy } from '../../entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogEntity } from 'src/entities/blog.entity';
import { EncryptionService } from './encrption.service';
import { UserRepository } from './dto/repository/user.repository';
import { RoleEntity } from 'src/entities/role.entity';
import { RoleRepository } from './dto/repository/role.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntiy, BlogEntity, RoleEntity])],
  providers: [
    AuthService,
    UserEntiy,
    RoleEntity,
    EncryptionService,
    UserRepository,
    RoleRepository,
  ],
  controllers: [AuthController],
  exports: [UserEntiy],
})
export class AuthModule {}
