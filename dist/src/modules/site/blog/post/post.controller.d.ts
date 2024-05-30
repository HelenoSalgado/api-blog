import { PostService } from './post.service';
import { CreatePostDto, UpdatePostDto } from './post.dto';
import { PaginatedDto } from '../../../../general.dto/paginated-dto';
export declare class PostController {
    private readonly postsService;
    constructor(postsService: PostService);
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
    findAll(page?: number, perPage?: number): Promise<PaginatedDto<CreatePostDto>>;
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
    update(id: number, updatePost: UpdatePostDto): Promise<void>;
    published(ids: number, published: boolean): Promise<void>;
    remove(id: number): Promise<void>;
}
