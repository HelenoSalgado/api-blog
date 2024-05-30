import { OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma-blog/prisma/client';
export declare class PrismaBlogService extends PrismaClient implements OnModuleInit {
    onModuleInit(): Promise<void>;
}
