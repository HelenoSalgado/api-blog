import { PrismaBlogService } from '../../prisma/blog/prisma.service';
import type { CreateUserDto, UpdateUserDto } from './user.dto';
export declare class UserRepository {
    private prisma;
    constructor(prisma: PrismaBlogService);
    create({ accountId, firstName, lastName, username, email, password, jobTitle }: CreateUserDto): import("@prisma-blog/prisma/client").Prisma.Prisma__UserClient<{
        id: number;
        userGroup: {
            limitUsers: number;
            groupType: {
                role: import("@prisma-blog/prisma/client").$Enums.Role;
            };
        }[];
        role: import("@prisma-blog/prisma/client").$Enums.Role;
        firstName: string;
        username: string;
        email: string;
        jobTitle: string;
    }, never, import("@prisma-blog/prisma/client/runtime/library").DefaultArgs>;
    findAll(): import("@prisma-blog/prisma/client").Prisma.PrismaPromise<{
        id: number;
        userGroup: {
            limitUsers: number;
            groupType: {
                role: import("@prisma-blog/prisma/client").$Enums.Role;
            };
        }[];
        role: import("@prisma-blog/prisma/client").$Enums.Role;
        firstName: string;
        email: string;
        jobTitle: string;
        profile: {
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
        };
        confirmed: boolean;
    }[]>;
    findUserAuth(email: string): Promise<{
        id: number;
        role: import("@prisma-blog/prisma/client").$Enums.Role;
        accountId: number;
        firstName: string;
        email: string;
        password: string;
        profile: {
            id: number;
            slug: string;
        };
    }>;
    findOne(id: number): import("@prisma-blog/prisma/client").Prisma.Prisma__UserClient<{
        id: number;
        userGroup: {
            limitUsers: number;
            groupType: {
                role: import("@prisma-blog/prisma/client").$Enums.Role;
            };
        }[];
        role: import("@prisma-blog/prisma/client").$Enums.Role;
        firstName: string;
        email: string;
        jobTitle: string;
        confirmed: boolean;
    }, null, import("@prisma-blog/prisma/client/runtime/library").DefaultArgs>;
    update(id: number, { firstName, lastName, jobTitle, confirmed }: UpdateUserDto): import("@prisma-blog/prisma/client").Prisma.Prisma__UserClient<{
        id: number;
        firstName: string;
        lastName: string;
        username: string;
        email: string;
        provider: string;
        password: string;
        resetPasswordToken: string;
        confirmationCode: string;
        confirmed: boolean;
        blocked: boolean;
        jobTitle: string;
        role: import("@prisma-blog/prisma/client").$Enums.Role;
        accountId: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma-blog/prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import("@prisma-blog/prisma/client").Prisma.Prisma__UserClient<{
        profile: {
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
        };
    } & {
        id: number;
        firstName: string;
        lastName: string;
        username: string;
        email: string;
        provider: string;
        password: string;
        resetPasswordToken: string;
        confirmationCode: string;
        confirmed: boolean;
        blocked: boolean;
        jobTitle: string;
        role: import("@prisma-blog/prisma/client").$Enums.Role;
        accountId: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma-blog/prisma/client/runtime/library").DefaultArgs>;
}
