import { GroupService } from './group.service';
import { SetGroupDto } from './group.dto';
export declare class GroupController {
    private readonly inGroupService;
    constructor(inGroupService: GroupService);
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
