import { ProductService } from './product.service';
import { CreateProductDto, UpdateProductDto } from './product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(createproduct: CreateProductDto): Promise<void>;
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
    update(id: number, updateproduct: UpdateProductDto): Promise<{
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
