import { PrismaBlogService } from '../../prisma/blog/prisma.service';
import { SetGroupDto } from './group.dto';
export declare class GroupRepository {
    private prisma;
    constructor(prisma: PrismaBlogService);
    findOne(id: number): import("@prisma-blog/prisma/client").Prisma.Prisma__UserGroupClient<{
        plan: {
            name: string;
            limitUsers: number;
        };
        limitUsers: number;
        groupType: {
            role: import("@prisma-blog/prisma/client").$Enums.Role;
        };
    }, null, import("@prisma-blog/prisma/client/runtime/library").DefaultArgs>;
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
    update(id: number, { groupTypeId }: SetGroupDto): import("@prisma-blog/prisma/client").Prisma.Prisma__UserGroupClient<{
        id: number;
        description: string;
        limitUsers: number;
        planId: number;
        userId: number;
        groupTypeId: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma-blog/prisma/client/runtime/library").DefaultArgs>;
}
