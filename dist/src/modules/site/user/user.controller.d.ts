import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './user.dto';
export declare class UserController {
    private readonly usersService;
    constructor(usersService: UserService);
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
        message: string;
        statusCode: number;
    }>;
    remove(id: number): Promise<{
        message: string;
        statusCode: number;
    }>;
}
