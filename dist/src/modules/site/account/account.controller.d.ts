import { AccountService } from './account.service';
import { CreateAccountDto, UpdateAccountDto } from './account.dto';
export declare class AccountController {
    private readonly accountService;
    constructor(accountService: AccountService);
    create(createAccount: CreateAccountDto): Promise<{
        id: number;
        plan: {
            name: string;
            limitUsers: number;
            active: boolean;
        };
        email: string;
        confirmed: boolean;
    }>;
    findAll(): Promise<{
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
    findOne(id: number): Promise<{
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
    }>;
    update(id: number, updateAccount: UpdateAccountDto): Promise<{
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
    }>;
    remove(id: number): Promise<void>;
}
