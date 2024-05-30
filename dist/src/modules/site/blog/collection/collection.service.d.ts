import { CollectionRepository } from './collection.repository';
import { Cache } from 'cache-manager';
import { CreateCollectionDto, UpdateCollectionDto } from './collection.dto';
export declare class CollectionService {
    private repository;
    private cacheManager;
    constructor(repository: CollectionRepository, cacheManager: Cache);
    create(createCollection: CreateCollectionDto): Promise<{
        id: number;
        title: string;
        image: string;
        author: string;
        slug: string;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<unknown>;
    findOne(slug: string): Promise<{
        posts: {
            id: number;
            title: string;
            description: string;
            content: string;
            image: string;
            slug: string;
            published: boolean;
            afterPost: string;
            beforePost: string;
            collectionId: number;
            profileId: number;
            accountId: number;
            createdAt: Date;
            updatedAt: Date;
        }[];
    } & {
        id: number;
        title: string;
        image: string;
        author: string;
        slug: string;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: number, updateCollection: UpdateCollectionDto): Promise<{
        id: number;
        title: string;
        image: string;
        author: string;
        slug: string;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        title: string;
        description: string;
        content: string;
        image: string;
        slug: string;
        published: boolean;
        afterPost: string;
        beforePost: string;
        collectionId: number;
        profileId: number;
        accountId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
