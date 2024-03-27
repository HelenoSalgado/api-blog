import { Module } from '@nestjs/common';
import { UserController } from './modules/user/user.controller';
import { UserModule } from './modules/user/users.module';
import { PostModule } from './modules/post/post.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { PostController } from './modules/post/post.controller';
import { UserService } from './modules/user/user.service';
import { PostService } from './modules/post/post.service';
import { UserRepository } from './modules/user/user.repository';
import { PostRepository } from './modules/post/post.repository';
import { ProfileModule } from './modules/profile/profile.module';
import { ProfileController } from './modules/profile/profile.controller';
import { ProfileService } from './modules/profile/profile.service';
import { ProfileRepository } from './modules/profile/profile.repository';
import { CacheModule } from '@nestjs/cache-manager';
import { CategoryModule } from './modules/category/category.module';
import { CategoryController } from './modules/category/category.controller';
import { CategoryService } from './modules/category/category.service';
import { CategoryRepository } from './modules/category/category.repository';
import { CollectionModule } from './modules/collection/collection.module';
import { CollectionController } from './modules/collection/collection.controller';
import { CollectionService } from './modules/collection/collection.service';
import { CollectionRepository } from './modules/collection/collection.repository';

@Module({
  imports: [
    PrismaModule,
    UserModule, 
    ProfileModule, 
    PostModule, 
    CategoryModule,
    CollectionModule,
    CacheModule.register({
      isGlobal: true
    })
  ],
  controllers: [
    UserController, 
    ProfileController, 
    PostController,
    CategoryController,
    CollectionController
  ],
  providers: [
    UserService, 
    ProfileService,
    PostService,
    CategoryService,
    CollectionService,
    UserRepository, 
    ProfileRepository,
    PostRepository,
    CategoryRepository,
    CollectionRepository
  ],
})
export class AppModule {}
