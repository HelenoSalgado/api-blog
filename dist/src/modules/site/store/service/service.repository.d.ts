import { PrismaStoreService } from '../../../prisma/store/prisma.service';
import type { CreateServiceDto, UpdateServiceDto } from './service.dto';
export declare class ServiceRepository {
    private prisma;
    constructor(prisma: PrismaStoreService);
    create({ name, priceUnit, basicUnit, active, period, taxPercentage }: CreateServiceDto): import("@prisma-store/prisma/client").Prisma.Prisma__ServiceClient<{
        id: number;
        name: string;
        priceUnit: import("@prisma-store/prisma/client/runtime/library").Decimal;
        basicUnit: string;
        taxPercentage: import("@prisma-store/prisma/client/runtime/library").Decimal;
        active: boolean;
        period: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma-store/prisma/client/runtime/library").DefaultArgs>;
    findOne(id: number): import("@prisma-store/prisma/client").Prisma.Prisma__ServiceClient<{
        id: number;
        name: string;
        priceUnit: import("@prisma-store/prisma/client/runtime/library").Decimal;
        basicUnit: string;
        taxPercentage: import("@prisma-store/prisma/client/runtime/library").Decimal;
        active: boolean;
        period: number;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma-store/prisma/client/runtime/library").DefaultArgs>;
    findAll(accountId: number): import("@prisma-store/prisma/client").Prisma.PrismaPromise<{
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
    update(id: number, { name, priceUnit, active, taxPercentage, period, basicUnit }: UpdateServiceDto): import("@prisma-store/prisma/client").Prisma.Prisma__ServiceClient<{
        id: number;
        name: string;
        priceUnit: import("@prisma-store/prisma/client/runtime/library").Decimal;
        basicUnit: string;
        taxPercentage: import("@prisma-store/prisma/client/runtime/library").Decimal;
        active: boolean;
        period: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma-store/prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import("@prisma-store/prisma/client").Prisma.Prisma__ServiceClient<{
        id: number;
        name: string;
        priceUnit: import("@prisma-store/prisma/client/runtime/library").Decimal;
        basicUnit: string;
        taxPercentage: import("@prisma-store/prisma/client/runtime/library").Decimal;
        active: boolean;
        period: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma-store/prisma/client/runtime/library").DefaultArgs>;
}
