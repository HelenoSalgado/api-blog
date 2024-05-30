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
exports.CollectionRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/blog/prisma.service");
let CollectionRepository = class CollectionRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create({ title, image, author, slug, posts, published }) {
        return this.prisma.collection.create({
            data: {
                title,
                image,
                author,
                slug,
                posts: {
                    connect: {
                        id: Number(posts.map(post => post.id).toString())
                    }
                },
                published
            }
        });
    }
    findAll() {
        return this.prisma.collection.findMany({
            select: {
                id: true,
                title: true,
                image: true,
                author: true,
                slug: true,
                published: true,
            },
        });
    }
    findOne(slug) {
        return this.prisma.collection.findUnique({
            where: { slug },
            include: {
                posts: true
            },
        });
    }
    update(id, { title, image, author, slug, posts, published }) {
        return this.prisma.collection.update({
            where: { id },
            data: {
                title,
                image,
                author,
                slug,
                posts: {
                    connect: {
                        id: Number(posts.map(post => post.id).toString())
                    }
                },
                published
            },
        });
    }
    remove(id) {
        return this.prisma.post.delete({ where: { id } });
    }
};
CollectionRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaBlogService])
], CollectionRepository);
exports.CollectionRepository = CollectionRepository;
//# sourceMappingURL=collection.repository.js.map