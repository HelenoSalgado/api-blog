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
import { ClientController } from './modules/store/client/client.controller';
import { ClientService } from './modules/store/client/client.service';
import { ClientRepository } from './modules/store/client/client.repository';
import { AccountModule } from './modules/account/account.module';
import { AccountController } from './modules/account/account.controller';
import { AccountService } from './modules/account/account.service';
import { AccountRepository } from './modules/account/account.repository';
import { AdminUserModule } from './modules/account/admin/user/users.module';
import { AdminUserController } from './modules/account/admin/user/user.controller';
import { AdminUserService } from './modules/account/admin/user/user.service';
import { AdminUserRepository } from './modules/account/admin/user/user.repository';

@Module({
  imports: [
    PrismaModule,
    AccountModule,
    AdminUserModule,
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
    AccountController,
    AdminUserController,
    UserController, 
    ProfileController, 
    PostController,
    CategoryController,
    CollectionController,
    ClientController
  ],
  providers: [
    AccountService,
    AdminUserService,
    UserService, 
    ProfileService,
    PostService,
    CategoryService,
    CollectionService,
    ClientService,
    AccountRepository,
    AdminUserRepository,
    UserRepository, 
    ProfileRepository,
    PostRepository,
    CategoryRepository,
    CollectionRepository,
    ClientRepository
  ],
})
export class AppModule {}
