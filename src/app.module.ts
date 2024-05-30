import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UserController } from './modules/site/user/user.controller';
import { UserModule } from './modules/site/user/users.module';
import { PostModule } from './modules/site/blog/post/post.module';
import { PrismaBlogModule } from './modules/prisma/blog/prisma.module';
import { PrismaStoreModule } from './modules/prisma/store/prisma.module';
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
import { AuthModule } from './modules/auth/auth.module';
import { AuthController } from './modules/auth/auth.controller';
import { AuthService } from './modules/auth/auth.service';
import { SetIdAccountMiddleware } from './middleware/set-account-id.middleware';
import { UploadController } from './modules/site/upload/upload.controller';
import excludRoutes from './exclude-routes-auth';
import { RouteInfo } from '@nestjs/common/interfaces';

@Module({
  imports: [
    PrismaBlogModule,
    PrismaStoreModule,
    PlanModule,
    AuthModule,
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
    AuthController,
    AccountController,
    GroupController,
    UserController, 
    ProductController,
    ProfileController, 
    PostController,
    CategoryController,
    CollectionController,
    UploadController,
    ClientController
  ],
  providers: [
    PlanService,
    AuthService,
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
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SetIdAccountMiddleware)
    .exclude(
    {
      path: 'plan', method: RequestMethod.GET
    },
    {
      path: 'account', method: RequestMethod.GET
    },
    {
      path: 'profiles', method: RequestMethod.GET
    },
    {
      path: 'profiles/:slug', method: RequestMethod.GET
    },
    {
      path: 'auth', method: RequestMethod.POST
    },
    {
      path: 'auth/verify', method: RequestMethod.GET
    },
    {
      path: 'account/:id', method: RequestMethod.GET
    },
    {
      path: 'account', method: RequestMethod.POST
    },
    {
      path: 'users', method: RequestMethod.POST
    },
    {
      path: 'posts', method: RequestMethod.GET
    },
    {
      path: 'posts/:slug', method: RequestMethod.GET
    },
    {
      path: 'categories', method: RequestMethod.GET
    },
    {
      path: 'categories/:slug', method: RequestMethod.GET
    },
    {
      path: 'upload', method: RequestMethod.POST
    })
    .forRoutes(
      {
        path: '*', method: RequestMethod.ALL
      }
    );
  }
}