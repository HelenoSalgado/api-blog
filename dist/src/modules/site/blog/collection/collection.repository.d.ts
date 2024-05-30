import { PrismaBlogService } from '../../../prisma/blog/prisma.service';
import type { CreateCollectionDto, UpdateCollectionDto } from './collection.dto';
export declare class CollectionRepository {
    private prisma;
    constructor(prisma: PrismaBlogService);
    create({ title, image, author, slug, posts, published }: CreateCollectionDto): import("@prisma-blog/prisma/client").Prisma.Prisma__CollectionClient<{
        id: number;
        title: string;
        image: string;
        author: string;
        slug: string;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma-blog/prisma/client/runtime/library").DefaultArgs>;
    findAll(): import("@prisma-blog/prisma/client").Prisma.PrismaPromise<{
        id: number;
        title: string;
        image: string;
        slug: string;
        published: boolean;
        author: string;
    }[]>;
    findOne(slug: string): import("@prisma-blog/prisma/client").Prisma.Prisma__CollectionClient<{
        posts: {
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
        }[];
    } & {
        id: number;
        title: string;
        image: string;
        author: string;
        slug: string;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma-blog/prisma/client/runtime/library").DefaultArgs>;
    update(id: number, { title, image, author, slug, posts, published }: UpdateCollectionDto): import("@prisma-blog/prisma/client").Prisma.Prisma__CollectionClient<{
        id: number;
        title: string;
        image: string;
        author: string;
        slug: string;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma-blog/prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import("@prisma-blog/prisma/client").Prisma.Prisma__PostClient<{
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
