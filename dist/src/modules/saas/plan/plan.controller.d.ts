import { PlanService } from './plan.service';
export declare class PlanController {
    private readonly planService;
    constructor(planService: PlanService);
    findOne(id: number): Promise<{
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
    }>;
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
