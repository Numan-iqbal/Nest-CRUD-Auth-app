import { Body, Controller, Post } from '@nestjs/common';
import { decodeJwtToken, generateJwtToken } from 'src/utils/jwt.utils';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  login(@Body() authBody: LoginDto) {
    return this.authService.login(authBody);
  }

  @Post('/register')
  register(@Body() userInput: RegisterDto) {
    return this.authService.register(userInput);
  }
}
