import type { SetGroupDto } from './group.dto';
import { GroupRepository } from './group.repository';
export declare class GroupService {
    private repository;
    constructor(repository: GroupRepository);
    findAll(): Promise<{
        plan: {
            name: string;
            limitUsers: number;
        };
        limitUsers: number;
        groupType: {
            role: import("@prisma-blog/prisma/client").$Enums.Role;
        };
    }[]>;
    findOne(id: number): Promise<{
        plan: {
            name: string;
            limitUsers: number;
        };
        limitUsers: number;
        groupType: {
            role: import("@prisma-blog/prisma/client").$Enums.Role;
        };
    }>;
    update(id: number, setInGroup: SetGroupDto): Promise<{
        id: number;
        description: string;
        limitUsers: number;
        planId: number;
        userId: number;
        groupTypeId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
