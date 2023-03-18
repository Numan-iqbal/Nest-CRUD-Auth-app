import { ApiProperty } from '@nestjs/swagger';

export class SwaggerLoginSampleDto {
  @ApiProperty({
    example: 'My Blog',
    description: 'The email of the user',
  })
  title: string;

  @ApiProperty({
    example: 'Life is Story',
    description: 'The content of the User',
  })
  content: string;
}
