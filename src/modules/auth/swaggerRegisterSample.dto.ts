import { ApiProperty } from '@nestjs/swagger';

class SwaggerResponseRegisterDto {
  @ApiProperty({
    example: 'john@example.com',
    description: 'The email of the user',
  })
  email: string;

  @ApiProperty({
    example: 'P@ajskbdosiefbwsubxosuksjdbciye!',
    description: 'The password of the user',
  })
  password: string;

  @ApiProperty({
    example: ['user', 'admin'],
    default: 'user',
    description: 'The role of the user',
  })
  role: string[];
  @ApiProperty({
    example: 20,
    description: 'The ID of the user',
  })
  id: number;

  @ApiProperty({
    example: '2023-03-16T11:14:06.805Z',
    description: 'The timestamp when the user was created',
  })
  createdAt: string;

  @ApiProperty({
    example: '2023-03-16T11:14:06.805Z',
    description: 'The timestamp when the user was last updated',
  })
  updatedAt: string;
}

export default SwaggerResponseRegisterDto;
