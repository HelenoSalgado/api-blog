import { CategoryRepository } from './category.repository';
import { Cache } from 'cache-manager';
import type { CreateCategoryDto, UpdateCategoryDto } from './category.dto';
export declare class CategoryService {
    private repository;
    private cacheManager;
    constructor(repository: CategoryRepository, cacheManager: Cache);
    create(createCategory: CreateCategoryDto): Promise<{
        id: number;
        name: string;
        description: string;
        image: string;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
        accountId: number;
    }>;
    findAll(page: number, perPage: number): Promise<import("../../../../general.dto/paginated-dto").PaginatedDto<CreateCategoryDto>>;
    findOne(name: string): Promise<{
        posts: {
            id: number;
            description: string;
            title: string;
            image: string;
            slug: string;
        }[];
    } & {
        id: number;
        name: string;
        description: string;
        image: string;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
        accountId: number;
    }>;
    update(id: number, updateCategory: UpdateCategoryDto): Promise<{
        id: number;
        name: string;
        description: string;
        image: string;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
        accountId: number;
    }>;
    published(ids: number[], published: boolean): Promise<import("@prisma-blog/prisma/client").Prisma.BatchPayload>;
    remove(ids: number[]): Promise<import("@prisma-blog/prisma/client").Prisma.BatchPayload>;
}
