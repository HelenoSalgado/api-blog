import { PrismaBlogService } from '../../prisma/blog/prisma.service';
export declare class SubscriptionRepository {
    private prisma;
    constructor(prisma: PrismaBlogService);
    create(): import("@prisma-blog/prisma/client").Prisma.Prisma__SubscriptionClient<{
        id: number;
        startDate: Date;
        endDate: Date;
        subscribe: boolean;
        planId: number;
        ofterId: number;
        ofterStartDate: Date;
        ofterEndDate: Date;
        dateSubscribed: Date;
        dateUnsubscribed: Date;
        validUntil: Date;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma-blog/prisma/client/runtime/library").DefaultArgs>;
}
