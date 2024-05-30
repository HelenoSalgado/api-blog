import { PrismaStoreService } from '../../../prisma/store/prisma.service';
import type { CreateProductDto, UpdateProductDto } from './product.dto';
export declare class ProductRepository {
    private prisma;
    constructor(prisma: PrismaStoreService);
    create({ name, priceUnit, basicUnit, limited, active, taxPercentage }: CreateProductDto): import("@prisma-store/prisma/client").Prisma.Prisma__ProductClient<{
        id: number;
        name: string;
        priceUnit: import("@prisma-store/prisma/client/runtime/library").Decimal;
        basicUnit: string;
        taxPercentage: import("@prisma-store/prisma/client/runtime/library").Decimal;
        limited: boolean;
        active: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma-store/prisma/client/runtime/library").DefaultArgs>;
    findOne(id: number): import("@prisma-store/prisma/client").Prisma.Prisma__ProductClient<{
        id: number;
        name: string;
        priceUnit: import("@prisma-store/prisma/client/runtime/library").Decimal;
        basicUnit: string;
        taxPercentage: import("@prisma-store/prisma/client/runtime/library").Decimal;
        limited: boolean;
        active: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma-store/prisma/client/runtime/library").DefaultArgs>;
    findAll(accountId: number): import("@prisma-store/prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        priceUnit: import("@prisma-store/prisma/client/runtime/library").Decimal;
        basicUnit: string;
        taxPercentage: import("@prisma-store/prisma/client/runtime/library").Decimal;
        limited: boolean;
        active: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    update(id: number, { name, priceUnit, basicUnit, limited, active, taxPercentage }: UpdateProductDto): import("@prisma-store/prisma/client").Prisma.Prisma__ProductClient<{
        id: number;
        name: string;
        priceUnit: import("@prisma-store/prisma/client/runtime/library").Decimal;
        basicUnit: string;
        taxPercentage: import("@prisma-store/prisma/client/runtime/library").Decimal;
        limited: boolean;
        active: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma-store/prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import("@prisma-store/prisma/client").Prisma.Prisma__ProductClient<{
        id: number;
        name: string;
        priceUnit: import("@prisma-store/prisma/client/runtime/library").Decimal;
        basicUnit: string;
        taxPercentage: import("@prisma-store/prisma/client/runtime/library").Decimal;
        limited: boolean;
        active: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma-store/prisma/client/runtime/library").DefaultArgs>;
}
