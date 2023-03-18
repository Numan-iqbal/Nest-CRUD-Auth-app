import {
  Controller,
  Get,
  Post,
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
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import {
  ApiBody,
  ApiHeader,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { BlogPost } from './swaggerBlog.property';
import { SwaggerLoginSampleDto } from './dto/SwaggerCreateBlogResponse.dlo';

@ApiTags('Blog')
@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @ApiOperation({ summary: 'Get all blog posts' })
  @ApiOkResponse({
    description: 'Returns an array of blog posts.',
    type: [BlogPost],
  })
  @Get()
  async getAll(): Promise<BlogEntity[]> {
    return this.blogService.getAll();
  }

  @ApiOperation({ summary: 'Get a specific blog post' })
  @ApiOkResponse({
    description: 'Returns a single blog post.',
    type: [BlogPost],
  })
  @Get(':id')
  async getBlogById(@Param('id') id: number): Promise<BlogEntity> {
    return this.blogService.getById(id);
  }

  @ApiOperation({ summary: 'Create a new blog post' })
  @ApiBody({
    description: 'Blog post data',
    type: SwaggerLoginSampleDto,
  })
  @ApiOkResponse({
    description: 'Returns an array of blog posts.',
    type: [BlogPost],
  })
  @UseGuards(AuthGuard)
  @Post()
  async add(
    @Body() blog: CreateBlogDto,
    @Req() req: RequestWithUser,
  ): Promise<BlogEntity> {
    return this.blogService.add(blog, req.user);
  }

  @UseGuards(AuthGuard)
  @ApiHeader({
    name: 'Authorization',
    description: 'Bearer token',
  })
  @ApiOperation({ summary: 'Update the existing blog posts' })
  @ApiOkResponse({
    description: 'Returns a single blog post.',
    type: [BlogPost],
  })
  @Patch(':id')
  async updateById(
    @Param('id') id: number,
    @Body() blog: UpdateBlogDto,
    @Req() req: RequestWithUser,
  ): Promise<BlogEntity> {
    return this.blogService.update(id, blog, req.user);
  }

  // Only Admin can delete a blog
  @UseGuards(Admin)
  @ApiOperation({ summary: 'Delete a specific blog post' })
  @ApiOkResponse({
    description: 'The blog post has been successfully deleted.',
  })
  @Delete(':id')
  async deleteById(@Param('id') id: number): Promise<void> {
    return this.blogService.deleteById(id);
  }
}
