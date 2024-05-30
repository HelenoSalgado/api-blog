import { CollectionService } from './collection.service';
import { CreateCollectionDto, UpdateCollectionDto } from './collection.dto';
export declare class CollectionController {
    private readonly collectionService;
    constructor(collectionService: CollectionService);
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
        message: string;
        statusCode: number;
    }>;
    remove(id: number): Promise<{
        message: string;
        statusCode: number;
    }>;
}
