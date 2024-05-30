import type { CreateServiceDto, UpdateServiceDto } from './service.dto';
import { ServiceRepository } from './service.repository';
export declare class ServiceService {
    private repository;
    constructor(repository: ServiceRepository);
    create(createService: CreateServiceDto): Promise<void>;
    findOne(id: number): Promise<{
        id: number;
        name: string;
        priceUnit: import("@prisma-store/prisma/client/runtime/library").Decimal;
        basicUnit: string;
        taxPercentage: import("@prisma-store/prisma/client/runtime/library").Decimal;
        active: boolean;
        period: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(accountId: number): Promise<{
        id: number;
        name: string;
        priceUnit: import("@prisma-store/prisma/client/runtime/library").Decimal;
        basicUnit: string;
        taxPercentage: import("@prisma-store/prisma/client/runtime/library").Decimal;
        active: boolean;
        period: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    update(id: number, updateService: UpdateServiceDto): Promise<{
        id: number;
        name: string;
        priceUnit: import("@prisma-store/prisma/client/runtime/library").Decimal;
        basicUnit: string;
        taxPercentage: import("@prisma-store/prisma/client/runtime/library").Decimal;
        active: boolean;
        period: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
        priceUnit: import("@prisma-store/prisma/client/runtime/library").Decimal;
        basicUnit: string;
        taxPercentage: import("@prisma-store/prisma/client/runtime/library").Decimal;
        active: boolean;
        period: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
