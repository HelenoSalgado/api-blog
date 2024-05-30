import { ServiceService } from './service.service';
import { CreateServiceDto, UpdateServiceDto } from './service.dto';
export declare class ServiceController {
    private readonly serviceService;
    constructor(serviceService: ServiceService);
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
    update(id: number, updateservice: UpdateServiceDto): Promise<{
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
