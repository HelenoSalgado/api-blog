"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const post_repository_1 = require("./post.repository");
const cache_manager_1 = require("@nestjs/cache-manager");
let PostService = class PostService {
    constructor(repository, cacheManager) {
        this.repository = repository;
        this.cacheManager = cacheManager;
    }
    async create(createPost) {
        const existPost = await this.repository.findOne(createPost.title);
        if (existPost)
            throw new common_1.ConflictException('Artigo já existe: crie artigo com um título diferente');
        this.cacheManager.del('getPostsAll');
        return await this.repository.create(createPost);
    }
    async findAll(page, perPage) {
        const posts = await this.repository.findAll(page, perPage);
        return posts;
    }
    async findOne(slug) {
        const post = await this.repository.findOne(slug);
        if (!post)
            throw new common_1.NotFoundException('Nenhum post encontrado');
        return post;
    }
    async update(id, updatePost) {
        this.cacheManager.del('getPostsAll');
        const filterIdsCategories = updatePost.categories.map(({ id }) => {
            return {
                id
            };
        });
        updatePost.categories = filterIdsCategories;
        return await this.repository.update(Number(id), updatePost);
    }
    async published(ids, published) {
        await this.cacheManager.del('getPostsAll');
        return await this.repository.published(ids, published);
    }
    async remove(id) {
        this.cacheManager.del('getPostsAll');
        return await this.repository.remove(Number(id));
    }
};
PostService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [post_repository_1.PostRepository, Object])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map