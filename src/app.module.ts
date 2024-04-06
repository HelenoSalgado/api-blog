import { Module } from '@nestjs/common';
import { UserController } from './modules/site/user/user.controller';
import { UserModule } from './modules/site/user/users.module';
import { PostModule } from './modules/site/blog/post/post.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { PostController } from './modules/site/blog/post/post.controller';
import { UserService } from './modules/site/user/user.service';
import { PostService } from './modules/site/blog/post/post.service';
import { UserRepository } from './modules/site/user/user.repository';
import { PostRepository } from './modules/site/blog/post/post.repository';
import { ProfileModule } from './modules/site/blog/profile/profile.module';
import { ProfileController } from './modules/site/blog/profile/profile.controller';
import { ProfileService } from './modules/site/blog/profile/profile.service';
import { ProfileRepository } from './modules/site/blog/profile/profile.repository';
import { CacheModule } from '@nestjs/cache-manager';
import { CategoryModule } from './modules/site/blog/category/category.module';
import { CategoryController } from './modules/site/blog/category/category.controller';
import { CategoryService } from './modules/site/blog/category/category.service';
import { CategoryRepository } from './modules/site/blog/category/category.repository';
import { CollectionModule } from './modules/site/blog/collection/collection.module';
import { CollectionController } from './modules/site/blog/collection/collection.controller';
import { CollectionService } from './modules/site/blog/collection/collection.service';
import { CollectionRepository } from './modules/site/blog/collection/collection.repository';
import { ClientController } from './modules/site/store/client/client.controller';
import { ClientService } from './modules/site/store/client/client.service';
import { ClientRepository } from './modules/site/store/client/client.repository';
import { AccountModule } from './modules/site/account/account.module';
import { AccountController } from './modules/site/account/account.controller';
import { AccountService } from './modules/site/account/account.service';
import { AccountRepository } from './modules/site/account/account.repository';
import { GroupModule } from './modules/company/group/group.module';
import { GroupController } from './modules/company/group/group.controller';
import { GroupService } from './modules/company/group/group.service';
import { GroupRepository } from './modules/company/group/group.repository';
import { PlanController } from './modules/saas/plan/plan.controller';
import { PlanModule } from './modules/saas/plan/plan.module';
import { PlanService } from './modules/saas/plan/plan.service';
import { PlanRepository } from './modules/saas/plan/plan.repository';
import { ProductModule } from './modules/site/store/product/product.module';
import { ProductController } from './modules/site/store/product/product.controller';
import { ProductService } from './modules/site/store/product/product.service';
import { ProductRepository } from './modules/site/store/product/product.repository';

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