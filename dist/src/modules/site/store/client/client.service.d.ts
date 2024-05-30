import type { CreateClientDto, UpdateClientDto } from './client.dto';
import { ClientRepository } from './client.repository';
export declare class ClientService {
    private repository;
    constructor(repository: ClientRepository);
    create(createClient: CreateClientDto): Promise<{
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
    }>;
    findOne(id: number, accountId: number): Promise<{
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
    }>;
    findAll(accountId: number): Promise<{
        id: number;
        firstName: string;
        email: string;
        whatsApp: string;
    }[]>;
    update(id: number, updateClient: UpdateClientDto): Promise<{
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
    }>;
    remove(id: number): Promise<{
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
    }>;
}
