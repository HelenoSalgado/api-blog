import { CreatePostDto } from '../post/post.dto';
export declare class CreateCollectionDto {
    id: number;
    title: string;
    image: string;
    author: string;
    slug: string;
    posts: CreatePostDto[];
    published?: boolean;
}
declare const UpdateCollectionDto_base: import("@nestjs/common").Type<Partial<CreateCollectionDto>>;
export declare class UpdateCollectionDto extends UpdateCollectionDto_base {
}
export {};
