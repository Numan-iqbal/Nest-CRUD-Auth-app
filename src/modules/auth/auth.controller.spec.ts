import { Test } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

describe('AuthController', () => {
  let authController: AuthController;
  let authService: AuthService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService],
    }).compile();

    authController = moduleRef.get<AuthController>(AuthController);
    authService = moduleRef.get<AuthService>(AuthService);
  });

  describe('login', () => {
    it('should return an access token on successful login', async () => {
      // Arrange
      const loginDto: LoginDto = {
        email: 'test@example.com',
        password: 'password',
      };
      const accessToken = 'access_token';
    //   jest.spyOn(authService, 'login').mockResolvedValueOnce(accessToken);

      // Act
      const response = await authController.login(loginDto);

      // Assert
      expect(response).toBe(accessToken);
    });
  });

  describe('register', () => {
    it('should return a new user on successful registration', async () => {
      // Arrange
      const registerDto: RegisterDto = {
        email: 'test@example.com',
        password: 'password',
        roles: ['user'],
      };
      const newUser = {
        id: '1',
        email: registerDto.email,
        roles: registerDto.roles,
        password: 'hashed_password',
        createdAt: new Date(),
        updatedAt: new Date(),
        blogs: [],
      };
    //   jest.spyOn(authService, 'register').mockResolvedValueOnce(newUser);

      // Act
      const response = await authController.register(registerDto);

      // Assert
      expect(response).toEqual(newUser);
    });
  });
});