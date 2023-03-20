import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogEntity } from './entities/blog.entity';
import { RoleEntity } from './entities/role.entity';
import { UserEntiy } from './entities/user.entity';
import { AuthModule } from './modules/auth/auth.module';
import { BlogModule } from './modules/blogs/blog.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: ['.env.Sample'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST || 'localhost',
      port: Number(process.env.POSTGRES_PORT) || 3000,
      username: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_PASSWORD || '1234',
      database: process.env.POSTGRES_DB || 'blogdb',
      entities: [UserEntiy, BlogEntity, RoleEntity],
      synchronize: Boolean(process.env.TYPEORM_SYNC) || true,
    }),
    BlogModule,
    AuthModule,
  ],
})
export class AppModule {}
