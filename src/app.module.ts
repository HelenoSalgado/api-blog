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
import { GroupModule } from './modules/group/group.module';
import { GroupController } from './modules/group/group.controller';
import { GroupService } from './modules/group/group.service';
import { GroupRepository } from './modules/group/group.repository';
import { PlanController } from './modules/plan/plan.controller';
import { PlanModule } from './modules/plan/plan.module';
import { PlanService } from './modules/plan/plan.service';
import { PlanRepository } from './modules/plan/plan.repository';
import { ProductModule } from './modules/store/product/product.module';
import { ProductController } from './modules/store/product/product.controller';
import { ProductService } from './modules/store/product/product.service';
import { ProductRepository } from './modules/store/product/product.repository';

@Module({
  imports: [
    PrismaModule,
    PlanModule,
    AccountModule,
    GroupModule,
    UserModule,
    ProductModule, 
    ProfileModule, 
    PostModule, 
    CategoryModule,
    CollectionModule,
    CacheModule.register({
      isGlobal: true
    })
  ],
  controllers: [
    PlanController,
    AccountController,
    GroupController,
    UserController, 
    ProductController,
    ProfileController, 
    PostController,
    CategoryController,
    CollectionController,
    ClientController
  ],
  providers: [
    PlanService,
    AccountService,
    GroupService,
    UserService,
    ProductService,
    ProfileService,
    PostService,
    CategoryService,
    CollectionService,
    ClientService,
    PlanRepository,
    AccountRepository,
    GroupRepository,
    UserRepository, 
    ProductRepository,
    ProfileRepository,
    PostRepository,
    CategoryRepository,
    CollectionRepository,
    ClientRepository
  ],
})
export class AppModule {}
