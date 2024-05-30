import { OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma-store/prisma/client';
export declare class PrismaStoreService extends PrismaClient implements OnModuleInit {
    onModuleInit(): Promise<void>;
}
