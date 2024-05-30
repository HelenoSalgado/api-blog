"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const user_controller_1 = require("./modules/site/user/user.controller");
const users_module_1 = require("./modules/site/user/users.module");
const post_module_1 = require("./modules/site/blog/post/post.module");
const prisma_module_1 = require("./modules/prisma/blog/prisma.module");
const prisma_module_2 = require("./modules/prisma/store/prisma.module");
const post_controller_1 = require("./modules/site/blog/post/post.controller");
const user_service_1 = require("./modules/site/user/user.service");
const post_service_1 = require("./modules/site/blog/post/post.service");
const user_repository_1 = require("./modules/site/user/user.repository");
const post_repository_1 = require("./modules/site/blog/post/post.repository");
const profile_module_1 = require("./modules/site/blog/profile/profile.module");
const profile_controller_1 = require("./modules/site/blog/profile/profile.controller");
const profile_service_1 = require("./modules/site/blog/profile/profile.service");
const profile_repository_1 = require("./modules/site/blog/profile/profile.repository");
const cache_manager_1 = require("@nestjs/cache-manager");
const category_module_1 = require("./modules/site/blog/category/category.module");
const category_controller_1 = require("./modules/site/blog/category/category.controller");
const category_service_1 = require("./modules/site/blog/category/category.service");
const category_repository_1 = require("./modules/site/blog/category/category.repository");
const collection_module_1 = require("./modules/site/blog/collection/collection.module");
const collection_controller_1 = require("./modules/site/blog/collection/collection.controller");
const collection_service_1 = require("./modules/site/blog/collection/collection.service");
const collection_repository_1 = require("./modules/site/blog/collection/collection.repository");
const client_controller_1 = require("./modules/site/store/client/client.controller");
const client_service_1 = require("./modules/site/store/client/client.service");
const client_repository_1 = require("./modules/site/store/client/client.repository");
const account_module_1 = require("./modules/site/account/account.module");
const account_controller_1 = require("./modules/site/account/account.controller");
const account_service_1 = require("./modules/site/account/account.service");
const account_repository_1 = require("./modules/site/account/account.repository");
const group_module_1 = require("./modules/company/group/group.module");
const group_controller_1 = require("./modules/company/group/group.controller");
const group_service_1 = require("./modules/company/group/group.service");
const group_repository_1 = require("./modules/company/group/group.repository");
const plan_controller_1 = require("./modules/saas/plan/plan.controller");
const plan_module_1 = require("./modules/saas/plan/plan.module");
const plan_service_1 = require("./modules/saas/plan/plan.service");
const plan_repository_1 = require("./modules/saas/plan/plan.repository");
const product_module_1 = require("./modules/site/store/product/product.module");
const product_controller_1 = require("./modules/site/store/product/product.controller");
const product_service_1 = require("./modules/site/store/product/product.service");
const product_repository_1 = require("./modules/site/store/product/product.repository");
const auth_module_1 = require("./modules/auth/auth.module");
const auth_controller_1 = require("./modules/auth/auth.controller");
const auth_service_1 = require("./modules/auth/auth.service");
const set_account_id_middleware_1 = require("./middleware/set-account-id.middleware");
const upload_controller_1 = require("./modules/site/upload/upload.controller");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(set_account_id_middleware_1.SetIdAccountMiddleware)
            .exclude({
            path: 'plan', method: common_1.RequestMethod.GET
        }, {
            path: 'account', method: common_1.RequestMethod.GET
        }, {
            path: 'profiles', method: common_1.RequestMethod.GET
        }, {
            path: 'profiles/:slug', method: common_1.RequestMethod.GET
        }, {
            path: 'auth', method: common_1.RequestMethod.POST
        }, {
            path: 'auth/verify', method: common_1.RequestMethod.GET
        }, {
            path: 'account/:id', method: common_1.RequestMethod.GET
        }, {
            path: 'account', method: common_1.RequestMethod.POST
        }, {
            path: 'users', method: common_1.RequestMethod.POST
        }, {
            path: 'posts', method: common_1.RequestMethod.GET
        }, {
            path: 'posts/:slug', method: common_1.RequestMethod.GET
        }, {
            path: 'categories', method: common_1.RequestMethod.GET
        }, {
            path: 'categories/:slug', method: common_1.RequestMethod.GET
        }, {
            path: 'upload', method: common_1.RequestMethod.POST
        })
            .forRoutes({
            path: '*', method: common_1.RequestMethod.ALL
        });
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            prisma_module_1.PrismaBlogModule,
            prisma_module_2.PrismaStoreModule,
            plan_module_1.PlanModule,
            auth_module_1.AuthModule,
            account_module_1.AccountModule,
            group_module_1.GroupModule,
            users_module_1.UserModule,
            product_module_1.ProductModule,
            profile_module_1.ProfileModule,
            post_module_1.PostModule,
            category_module_1.CategoryModule,
            collection_module_1.CollectionModule,
            cache_manager_1.CacheModule.register({
                isGlobal: true
            })
        ],
        controllers: [
            plan_controller_1.PlanController,
            auth_controller_1.AuthController,
            account_controller_1.AccountController,
            group_controller_1.GroupController,
            user_controller_1.UserController,
            product_controller_1.ProductController,
            profile_controller_1.ProfileController,
            post_controller_1.PostController,
            category_controller_1.CategoryController,
            collection_controller_1.CollectionController,
            upload_controller_1.UploadController,
            client_controller_1.ClientController
        ],
        providers: [
            plan_service_1.PlanService,
            auth_service_1.AuthService,
            account_service_1.AccountService,
            group_service_1.GroupService,
            user_service_1.UserService,
            product_service_1.ProductService,
            profile_service_1.ProfileService,
            post_service_1.PostService,
            category_service_1.CategoryService,
            collection_service_1.CollectionService,
            client_service_1.ClientService,
            plan_repository_1.PlanRepository,
            account_repository_1.AccountRepository,
            group_repository_1.GroupRepository,
            user_repository_1.UserRepository,
            product_repository_1.ProductRepository,
            profile_repository_1.ProfileRepository,
            post_repository_1.PostRepository,
            category_repository_1.CategoryRepository,
            collection_repository_1.CollectionRepository,
            client_repository_1.ClientRepository
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map