import { PrismaBlogService } from '../../prisma/blog/prisma.service';
import type { CreateAccountDto, UpdateAccountDto } from './account.dto';
export declare class AccountRepository {
    private prisma;
    constructor(prisma: PrismaBlogService);
    create({ company, email, user, planId }: CreateAccountDto): import("@prisma-blog/prisma/client").Prisma.Prisma__AccountClient<{
        id: number;
        plan: {
            name: string;
            limitUsers: number;
            active: boolean;
        };
        email: string;
        confirmed: boolean;
    }, never, import("@prisma-blog/prisma/client/runtime/library").DefaultArgs>;
    findAll(): import("@prisma-blog/prisma/client").Prisma.PrismaPromise<{
        id: number;
        plan: {
            name: string;
            limitUsers: number;
            active: boolean;
            userGroup: {
                limitUsers: number;
                groupType: {
                    role: import("@prisma-blog/prisma/client").$Enums.Role;
                };
                user: {
                    id: number;
                    role: import("@prisma-blog/prisma/client").$Enums.Role;
                    firstName: string;
                    email: string;
                };
            }[];
        };
        email: string;
        confirmed: boolean;
        company: {
            id: number;
            name: string;
            logo: string;
            CNPJ: string;
            accountId: number;
        }[];
    }[]>;
    findEmail(email: string): Promise<{
        email: string;
    }>;
    findUserEmail(email: string): Promise<{
        email: string;
    }>;
    findOne(id: number): import("@prisma-blog/prisma/client").Prisma.Prisma__AccountClient<{
        id: number;
        plan: {
            name: string;
            limitUsers: number;
            active: boolean;
            userGroup: {
                limitUsers: number;
                groupType: {
                    role: import("@prisma-blog/prisma/client").$Enums.Role;
                };
            }[];
        };
        email: string;
        confirmed: boolean;
        company: {
            id: number;
            name: string;
            logo: string;
            CNPJ: string;
            accountId: number;
        }[];
        users: {
            id: number;
            role: import("@prisma-blog/prisma/client").$Enums.Role;
            firstName: string;
            email: string;
        }[];
    }, null, import("@prisma-blog/prisma/client/runtime/library").DefaultArgs>;
    update(id: number, { planId }: UpdateAccountDto): import("@prisma-blog/prisma/client").Prisma.Prisma__AccountClient<{
        plan: {
            name: string;
            limitUsers: number;
            active: boolean;
            userGroup: {
                limitUsers: number;
                groupType: {
                    role: import("@prisma-blog/prisma/client").$Enums.Role;
                };
            }[];
        };
        users: {
            id: number;
            role: import("@prisma-blog/prisma/client").$Enums.Role;
            firstName: string;
            email: string;
        }[];
    }, never, import("@prisma-blog/prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import("@prisma-blog/prisma/client").Prisma.Prisma__AccountClient<{
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
        company: {
            id: number;
            name: string;
            logo: string;
            CNPJ: string;
            accountId: number;
        }[];
        sendNewlatter: {
            id: number;
            name: string;
            email: string;
            accountId: number;
            createdAt: Date;
            updatedAt: Date;
        }[];
        users: ({
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
        })[];
    } & {
        id: number;
        email: string;
        confirmationCode: string;
        confirmed: boolean;
        blocked: boolean;
        planId: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma-blog/prisma/client/runtime/library").DefaultArgs>;
}
