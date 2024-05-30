import type { UpdateProfileDto } from './profile.tdo';
import { ProfileRepository } from './profile.repository';
export declare class ProfileService {
    private repository;
    constructor(repository: ProfileRepository);
    findOne(slug: string): Promise<{
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
