import type { CreateProductDto, UpdateProductDto } from './product.dto';
import { ProductRepository } from './product.repository';
export declare class ProductService {
    private repository;
    constructor(repository: ProductRepository);
    create(createProduct: CreateProductDto): Promise<void>;
    findOne(id: number): Promise<{
        id: number;
        name: string;
        priceUnit: import("@prisma-store/prisma/client/runtime/library").Decimal;
        basicUnit: string;
        taxPercentage: import("@prisma-store/prisma/client/runtime/library").Decimal;
        limited: boolean;
        active: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(accountId: number): Promise<{
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
    update(id: number, updateProduct: UpdateProductDto): Promise<{
        id: number;
        name: string;
        priceUnit: import("@prisma-store/prisma/client/runtime/library").Decimal;
        basicUnit: string;
        taxPercentage: import("@prisma-store/prisma/client/runtime/library").Decimal;
        limited: boolean;
        active: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
        priceUnit: import("@prisma-store/prisma/client/runtime/library").Decimal;
        basicUnit: string;
        taxPercentage: import("@prisma-store/prisma/client/runtime/library").Decimal;
        limited: boolean;
        active: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
