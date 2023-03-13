import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { BlogEntity } from '../../entities/blog.entity';
import { ConfigModule } from '@nestjs/config';
import { UserEntiy } from '../../entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forFeature([UserEntiy, BlogEntity]),
  ],
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogModule {}
