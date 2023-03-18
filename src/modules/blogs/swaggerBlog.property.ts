import { ApiProperty } from '@nestjs/swagger';

export class BlogPost {
  @ApiProperty({
    example: 7,
    description: 'The unique identifier for the blog post',
  })
  id: number;

  @ApiProperty({
    example: 'My Blog',
    description: 'The title of the blog post',
  })
  title: string;

  @ApiProperty({
    example: 'Life is Story',
    description: 'The content of the blog post',
  })
  content: string;

  @ApiProperty({
    example: '2023-03-11T19:07:35.117Z',
    description: 'The date and time that the blog post was created',
  })
  createdAt: Date;

  @ApiProperty({
    example: '2023-03-11T19:07:35.117Z',
    description: 'The date and time that the blog post was last updated',
  })
  updatedAt: Date;
}
