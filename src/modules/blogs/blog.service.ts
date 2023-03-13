import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntiy } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { BlogEntity } from '../../entities/blog.entity';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(BlogEntity)
    private readonly blogRepository: Repository<BlogEntity>,
  ) {}

  async getAll(): Promise<BlogEntity[]> {
    return this.blogRepository.find();
  }

  async getById(id: number): Promise<BlogEntity> {
    return this.blogRepository.findOne({ where: { id: id } });
  }

  async add(blog: BlogEntity, user: UserEntiy): Promise<BlogEntity> {
    return this.blogRepository.save({ ...blog, user });
  }

  async update(
    id: number,
    blog: BlogEntity,
    user: UserEntiy,
  ): Promise<BlogEntity> {
    const blogDoc = await this.blogRepository.findOne({
      where: { id: id },
      relations: {
        user: true,
      },
    });
    const isAuthorized = blogDoc.user.id === user.id;
    if (!isAuthorized)
      throw new HttpException(
        'User not authorized to update this blog',
        HttpStatus.UNAUTHORIZED,
      );
    await this.blogRepository.update(id, blog);
    return this.blogRepository.findOne({ where: { id: id } });
  }

  async deleteById(id: number): Promise<void> {
    await this.blogRepository.delete(id);
  }
}
