import { ApiProperty } from '@nestjs/swagger';

// Register DTO
export class SwaggerRegisterDto {
  id: number;
  @ApiProperty({
    example: 'johndoe@example.com',
    description: 'The email address of the user',
  })
  email: string;

  @ApiProperty({
    example: 'password123',
    description: 'The password of the user',
  })
  password: string;
  @ApiProperty({
    example: '["regular, admin"]',
    description: 'The roles of the user',
  })
  role: string[];
}
