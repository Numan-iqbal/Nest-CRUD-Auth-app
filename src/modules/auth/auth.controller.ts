import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiProperty,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { SwaggerLoginDto } from './swaggerAuthLogin.property';
import { SwaggerRegisterDto } from './swaggerAuthRegister.property';
import { SwaggerResponseLoginSampleDto } from './swaggerLoginSample.dto';
import SwaggerResponseRegisterDto from './swaggerRegisterSample.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiCreatedResponse({
    description: 'The blog post has been successfully created.',
    type: [SwaggerLoginDto],
  })
  @ApiOperation({ summary: 'Register a new user' })
  @Post('/login')
  @ApiResponse({
    status: 201,
  })
  @ApiOkResponse({
    description: 'User Login System',
  })
  @ApiBody({ type: SwaggerResponseLoginSampleDto })
  login(@Body() authBody: LoginDto) {
    return this.authService.login(authBody);
  }


  
  @ApiOperation({ summary: 'Login as an existing user' })
  @Post('/register')
  @ApiBody({
    description: 'Sample data for better Understanding',
    type: [SwaggerRegisterDto],
  })
  @ApiCreatedResponse({
    description: 'The blog post has been successfully created.',
    type: [SwaggerResponseRegisterDto],
  })
  @ApiUnauthorizedResponse({
    description: 'user in UnAuthurize',
  })
  @ApiBearerAuth()
  register(@Body() userInput: RegisterDto) {
    return this.authService.register(userInput);
  }
}
