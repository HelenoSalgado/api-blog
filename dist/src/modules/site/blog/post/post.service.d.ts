import { PostRepository } from './post.repository';
import { Cache } from 'cache-manager';
import type { CreatePostDto, UpdatePostDto } from './post.dto';
export declare class PostService {
    private repository;
    private cacheManager;
    constructor(repository: PostRepository, cacheManager: Cache);
    create(createPost: CreatePostDto): Promise<{
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
    findAll(page: number, perPage: number): Promise<import("prisma-pagination").PaginatedResult<CreatePostDto>>;
    findOne(slug: string): Promise<{
        categories: {
            id: number;
            name: string;
        }[];
        profile: {
            name: string;
            slug: string;
            avatar: string;
        };
    } & {
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
    update(id: number, updatePost: UpdatePostDto): Promise<{
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
    published(ids: number[], published: boolean): Promise<import("@prisma-blog/prisma/client").Prisma.BatchPayload>;
    remove(id: number): Promise<{
        comments: {
            id: number;
            name: string;
            email: string;
            content: string;
            isApproved: boolean;
            postId: number;
        }[];
    } & {
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
