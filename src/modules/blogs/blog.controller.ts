import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseGuards,
  Req,
  Patch,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogEntity } from '../../entities/blog.entity';
import { Admin, AuthGuard } from 'src/common/guards/auth.guard';
import { RequestWithUser } from 'src/common/types/request.type';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  async getAll(): Promise<BlogEntity[]> {
    return this.blogService.getAll();
  }

  @Get(':id')
  async getBlogById(@Param('id') id: number): Promise<BlogEntity> {
    return this.blogService.getById(id);
  }

  @UseGuards(AuthGuard)
  @Post()
  async add(
    @Body() blog: BlogEntity,
    @Req() req: RequestWithUser,
  ): Promise<BlogEntity> {
    return this.blogService.add(blog, req.user);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  async updateById(
    @Param('id') id: number,
    @Body() blog: BlogEntity,
    @Req() req: RequestWithUser,
  ): Promise<BlogEntity> {
    return this.blogService.update(id, blog, req.user);
  }

  // Only Admin can delete a blog
  @UseGuards(Admin)
  @Delete(':id')
  async deleteById(@Param('id') id: number): Promise<void> {
    return this.blogService.deleteById(id);
  }
}
