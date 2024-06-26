import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { PrismaBlogModule } from '../../../prisma/blog/prisma.module';
import { PostRepository } from './post.repository';

@Module({
  controllers: [PostController],
  providers: [PostService, PostRepository],
  imports: [PrismaBlogModule],
})
export class PostModule {}
