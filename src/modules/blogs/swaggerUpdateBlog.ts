import { ApiProperty } from '@nestjs/swagger';

export class swaggerUpdateBlogPost {
  @ApiProperty({
    example: 4,
    description: 'Need Update blog post',
  })
  id: number;

  @ApiProperty({
    example: 'Blog',
    description: 'Need Update title of the blog post',
  })
  title: string;

  @ApiProperty({
    example: 'Content',
    description: 'Need Update content of the blog post',
  })
  content: string;

  @ApiProperty({
    example: '2021-02-11T19:07:33.607Z',
    description: 'Need Update Date and Time',
  })
  createdAt: Date;

  @ApiProperty({
    example: '2021-02-11T19:07:37.607Z',
    description: 'Need Update Date and Time last updated',
  })
  updatedAt: Date;
}
