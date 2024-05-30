import { PrismaBlogService } from '../../../prisma/blog/prisma.service';
import type { CreateCategoryDto, UpdateCategoryDto } from './category.dto';
import { PaginatedDto } from 'src/general.dto/paginated-dto';
export declare class CategoryRepository {
    private prisma;
    constructor(prisma: PrismaBlogService);
    create({ id, name, posts, image, published, description, accountId }: CreateCategoryDto): Promise<{
        id: number;
        name: string;
        description: string;
        image: string;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
        accountId: number;
    }>;
    findAll(page: number, perPage: number): Promise<PaginatedDto<CreateCategoryDto>>;
    findOne(name: string): import("@prisma-blog/prisma/client").Prisma.Prisma__CategoryClient<{
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
    }, null, import("@prisma-blog/prisma/client/runtime/library").DefaultArgs>;
    update(id: number, { name, description, image, posts, published }: UpdateCategoryDto): Promise<{
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
