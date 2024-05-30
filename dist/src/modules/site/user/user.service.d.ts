import type { CreateUserDto, UpdateUserDto } from './user.dto';
import { UserRepository } from './user.repository';
export declare class UserService {
    private repository;
    constructor(repository: UserRepository);
    create(createUser: CreateUserDto): Promise<{
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
    }>;
    findAll(): Promise<{
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
    findOne(id: number): Promise<{
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
    }>;
    update(id: number, updateUser: UpdateUserDto): Promise<{
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
    }>;
    remove(id: number): Promise<{
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
    }>;
}
