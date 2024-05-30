import type { CreatePostDto, UpdatePostDto } from './post.dto';
import { PrismaBlogService } from '../../../prisma/blog/prisma.service';
import { PaginatedResult } from 'prisma-pagination';
export declare class PostRepository {
    private prisma;
    constructor(prisma: PrismaBlogService);
    create({ title, description, image, content, slug, afterPost, beforePost, categories, published, profileId, accountId }: CreatePostDto): import("@prisma-blog/prisma/client").Prisma.Prisma__PostClient<{
        id: number;
        title: string;
        description: string;
        content: string;
        image: string;
        slug: string;
        published: boolean;
        afterPost: string;
        beforePost: string;
        collectionId: number;
        profileId: number;
        accountId: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma-blog/prisma/client/runtime/library").DefaultArgs>;
    findAll(page: number, perPage: number): Promise<PaginatedResult<CreatePostDto>>;
    findOne(slug: string): import("@prisma-blog/prisma/client").Prisma.Prisma__PostClient<{
        categories: {
            id: number;
            name: string;
        }[];
        profile: {
            name: string;
            slug: string;
            avatar: string;
        };
    } & {
        id: number;
        title: string;
        description: string;
        content: string;
        image: string;
        slug: string;
        published: boolean;
        afterPost: string;
        beforePost: string;
        collectionId: number;
        profileId: number;
        accountId: number;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma-blog/prisma/client/runtime/library").DefaultArgs>;
    update(id: number, { title, description, image, content, slug, afterPost, beforePost, published, categories }: UpdatePostDto): import("@prisma-blog/prisma/client").Prisma.Prisma__PostClient<{
        id: number;
        title: string;
        description: string;
        content: string;
        image: string;
        slug: string;
        published: boolean;
        afterPost: string;
        beforePost: string;
        collectionId: number;
        profileId: number;
        accountId: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma-blog/prisma/client/runtime/library").DefaultArgs>;
    published(ids: number[], published: boolean): import("@prisma-blog/prisma/client").Prisma.PrismaPromise<import("@prisma-blog/prisma/client").Prisma.BatchPayload>;
    remove(id: number): import("@prisma-blog/prisma/client").Prisma.Prisma__PostClient<{
        comments: {
            id: number;
            name: string;
            email: string;
            content: string;
            isApproved: boolean;
            postId: number;
        }[];
    } & {
        id: number;
        title: string;
        description: string;
        content: string;
        image: string;
        slug: string;
        published: boolean;
        afterPost: string;
        beforePost: string;
        collectionId: number;
        profileId: number;
        accountId: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma-blog/prisma/client/runtime/library").DefaultArgs>;
}
