import { PlanRepository } from './plan.repository';
export declare class PlanService {
    private repository;
    constructor(repository: PlanRepository);
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
}
