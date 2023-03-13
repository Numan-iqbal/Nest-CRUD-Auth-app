import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BlogEntity } from '../../../entities/blog.entity';
import { CreateBlogDto } from '../dto/create-blog.dto';
import { UpdateBlogDto } from '../dto/update-blog.dto';

@Injectable()
export class BlogRepository extends Repository<BlogEntity> {
  async createBlog(createBlogDto: CreateBlogDto): Promise<BlogEntity> {
    const { title, content } = createBlogDto;
    const blog = new BlogEntity();
    blog.title = title;
    blog.content = content;
    return this.save(blog);
  }

  async updateBlog(
    id: number,
    updateBlogDto: UpdateBlogDto,
  ): Promise<BlogEntity> {
    const { title, content } = updateBlogDto;
    const blog = await this.findOne({ where: { id: id } });
    blog.title = title ?? blog.title;
    blog.content = content ?? blog.content;
    return this.save(blog);
  }
}
