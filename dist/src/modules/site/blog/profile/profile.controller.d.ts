import { ProfileService } from './profile.service';
import { UpdateProfileDto } from './profile.tdo';
export declare class ProfileController {
    private readonly profileService;
    constructor(profileService: ProfileService);
    get(slug: string): Promise<{
        posts: {
            slug: string;
        }[];
    } & {
        id: number;
        name: string;
        avatar: string;
        image: string;
        biograpy: string;
        slug: string;
        published: boolean;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(slug: string, updateProfile: UpdateProfileDto): Promise<{
        id: number;
        name: string;
        avatar: string;
        image: string;
        biograpy: string;
        slug: string;
        published: boolean;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
