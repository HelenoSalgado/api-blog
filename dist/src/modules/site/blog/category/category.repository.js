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
exports.CategoryRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/blog/prisma.service");
const paginator_1 = require("../../../prisma/paginator");
let CategoryRepository = class CategoryRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create({ id, name, posts, image, published, description, accountId }) {
        return await this.prisma.category.create({
            data: {
                name,
                description,
                image,
                published,
                account: {
                    connect: { id: accountId }
                },
                posts: {
                    connect: posts
                }
            }
        });
    }
    findAll(page, perPage) {
        const paginate = (0, paginator_1.paginator)({ perPage });
        return paginate(this.prisma.category, {
            where: {},
            orderBy: {
                id: 'desc'
            },
            select: {
                id: true,
                name: true,
                _count: {
                    select: {
                        posts: true
                    }
                },
                published: true,
            },
        }, {
            page
        });
    }
    findOne(name) {
        return this.prisma.category.findUnique({
            where: { name },
            include: {
                posts: {
                    select: {
                        id: true,
                        title: true,
                        description: true,
                        image: true,
                        slug: true
                    }
                }
            }
        });
    }
    async update(id, { name, description, image, posts, published }) {
        return await this.prisma.category.update({
            where: { id },
            data: {
                name,
                description,
                image,
                published,
                posts: {
                    set: [],
                    connect: posts
                }
            }
        });
    }
    async published(ids, published) {
        return await this.prisma.category.updateMany({
            where: {
                id: {
                    in: ids,
                }
            },
            data: {
                published
            }
        });
    }
    async remove(ids) {
        return await this.prisma.category.deleteMany({
            where: {
                id: {
                    in: ids,
                }
            }
        });
    }
};
CategoryRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaBlogService])
], CategoryRepository);
exports.CategoryRepository = CategoryRepository;
//# sourceMappingURL=category.repository.js.map