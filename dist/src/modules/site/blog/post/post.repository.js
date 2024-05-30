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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/blog/prisma.service");
const paginator_1 = require("../../../prisma/paginator");
let PostRepository = class PostRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create({ title, description, image, content, slug, afterPost, beforePost, categories, published, profileId, accountId }) {
        return this.prisma.post.create({
            data: {
                title,
                description,
                image,
                content,
                slug,
                afterPost,
                beforePost,
                published,
                profile: {
                    connect: { id: profileId }
                },
                account: {
                    connect: { id: accountId }
                },
            }
        });
    }
    async findAll(page, perPage) {
        const paginate = (0, paginator_1.paginator)({ perPage });
        return paginate(this.prisma.post, {
            where: {},
            orderBy: {
                id: 'desc'
            },
        }, {
            page,
        });
    }
    findOne(slug) {
        return this.prisma.post.findUnique({
            where: { slug },
            include: {
                categories: {
                    select: {
                        id: true,
                        name: true
                    }
                },
                profile: {
                    select: {
                        name: true,
                        avatar: true,
                        slug: true
                    }
                }
            },
        });
    }
    update(id, { title, description, image, content, slug, afterPost, beforePost, published, categories }) {
        return this.prisma.post.update({
            where: { id },
            data: {
                title,
                description,
                image,
                content,
                slug,
                afterPost,
                beforePost,
                published,
                categories: {
                    set: [],
                    connect: categories
                }
            }
        });
    }
    published(ids, published) {
        return this.prisma.post.updateMany({
            where: {
                id: {
                    in: ids
                }
            },
            data: {
                published
            }
        });
    }
    remove(id) {
        return this.prisma.post.delete({
            where: { id },
            include: {
                comments: true
            }
        });
    }
};
PostRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaBlogService])
], PostRepository);
exports.PostRepository = PostRepository;
//# sourceMappingURL=post.repository.js.map