import { PrismaBlogService } from '../../prisma/blog/prisma.service';
export declare class PlanRepository {
    private prisma;
    constructor(prisma: PrismaBlogService);
    findOne(id: number): import("@prisma-blog/prisma/client").Prisma.Prisma__PlanClient<{
        software: {
            id: number;
            name: string;
            details: string;
            acessLink: string;
        };
        id: number;
        name: string;
        currentPrice: import("@prisma-blog/prisma/client/runtime/library").Decimal;
        active: boolean;
        account: {
            company: {
                id: number;
                name: string;
                logo: string;
                CNPJ: string;
                accountId: number;
            }[];
        }[];
    }, null, import("@prisma-blog/prisma/client/runtime/library").DefaultArgs>;
    findAll(): Promise<{
        software: {
            id: number;
            name: string;
            details: string;
            acessLink: string;
        };
        id: number;
        name: string;
        currentPrice: import("@prisma-blog/prisma/client/runtime/library").Decimal;
        active: boolean;
        account: {
            company: {
                id: number;
                name: string;
                logo: string;
                CNPJ: string;
                accountId: number;
            }[];
        }[];
    }[]>;
}
