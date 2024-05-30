import { SubscriptionRepository } from './subscription.repository';
export declare class SubscriptionService {
    private repository;
    constructor(repository: SubscriptionRepository);
    findOne(id: number): Promise<{
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
    }>;
}
