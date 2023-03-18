import { ApiProperty } from '@nestjs/swagger';

export class SwaggerResponseLoginSampleDto {
  @ApiProperty({
    example: 'john@example.com',
    description: 'The email of the user',
  })
  email: string;

  @ApiProperty({
    example: 'Password!',
    description: 'The password of the user',
  })
  password: string;
  @ApiProperty({
    example: ['user', 'admin'],
    default: 'user',
    description: 'The role of the user',
  })
  role: string[];

}
