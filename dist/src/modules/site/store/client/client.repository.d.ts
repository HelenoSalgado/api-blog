import { PrismaStoreService } from '../../../prisma/store/prisma.service';
import type { CreateClientDto, UpdateClientDto } from './client.dto';
export declare class ClientRepository {
    private prisma;
    constructor(prisma: PrismaStoreService);
    create({ firstName, lastName, VAT_ID, email, whatsApp, company, accountId }: CreateClientDto): import("@prisma-store/prisma/client").Prisma.Prisma__ClientClient<{
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        whatsApp: string;
        company: string;
        VAT_ID: string;
        accountId: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma-store/prisma/client/runtime/library").DefaultArgs>;
    verifyClient(email: string, accountId: number): Promise<{
        id: number;
    }>;
    findOne(id: number, accountId: number): import("@prisma-store/prisma/client").Prisma.Prisma__ClientClient<{
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        company: string;
        whatsApp: string;
        Shipment: {
            address: {
                id: number;
                zipCode: number;
                city: string;
                zone: string;
                street: string;
                number: number;
                district: string;
                clientId: number;
                stateId: number;
                createdAt: Date;
                updatedAt: Date;
            };
            shipmentStatus: {
                id: number;
                shipmentId: number;
                time: Date;
                notes: string;
                statusCatalogId: number;
                createdAt: Date;
                updatedAt: Date;
            }[];
            paymentDetails: {
                id: number;
                shipmentId: number;
                paymentDataId: number;
                description: string;
                createdAt: Date;
                updatedAt: Date;
            }[];
            producSale: {
                id: number;
                quantitySold: import("@prisma-store/prisma/client/runtime/library").Decimal;
                priceUnit: import("@prisma-store/prisma/client/runtime/library").Decimal;
                price: import("@prisma-store/prisma/client/runtime/library").Decimal;
                taxAmount: import("@prisma-store/prisma/client/runtime/library").Decimal;
                limited: boolean;
                active: boolean;
                saleId: number;
                productId: number;
                createdAt: Date;
                updatedAt: Date;
            };
        }[];
    }, null, import("@prisma-store/prisma/client/runtime/library").DefaultArgs>;
    findAll(accountId: number): import("@prisma-store/prisma/client").Prisma.PrismaPromise<{
        id: number;
        firstName: string;
        email: string;
        whatsApp: string;
    }[]>;
    update(id: number, { firstName, lastName, company }: UpdateClientDto): import("@prisma-store/prisma/client").Prisma.Prisma__ClientClient<{
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        whatsApp: string;
        company: string;
        VAT_ID: string;
        accountId: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma-store/prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import("@prisma-store/prisma/client").Prisma.Prisma__ClientClient<{
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        whatsApp: string;
        company: string;
        VAT_ID: string;
        accountId: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma-store/prisma/client/runtime/library").DefaultArgs>;
}
