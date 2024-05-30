import { PrismaBlogService } from '../../../prisma/blog/prisma.service';
import type { UpdateProfileDto } from './profile.tdo';
export declare class ProfileRepository {
    private prisma;
    constructor(prisma: PrismaBlogService);
    findOne(slug: string): import("@prisma-blog/prisma/client").Prisma.Prisma__ProfileClient<{
        posts: {
            slug: string;
        }[];
    } & {
        id: number;
        name: string;
        avatar: string;
        image: string;
        biograpy: string;
        slug: string;
        published: boolean;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma-blog/prisma/client/runtime/library").DefaultArgs>;
    update(slug: string, { name, avatar, image, biograpy, published, userId }: UpdateProfileDto): import("@prisma-blog/prisma/client").Prisma.Prisma__ProfileClient<{
        id: number;
        name: string;
        avatar: string;
        image: string;
        biograpy: string;
        slug: string;
        published: boolean;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma-blog/prisma/client/runtime/library").DefaultArgs>;
}
