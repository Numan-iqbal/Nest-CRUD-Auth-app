import { ApiProperty } from '@nestjs/swagger';

export class GetBlogDto {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly title: string;

  @ApiProperty()
  readonly content: string;
}
