import { CreatePostDto } from '../post/post.dto';
export declare class CreateProfileDto {
    id: number;
    name: string;
    avatar?: string;
    biograpy?: string;
    image?: string;
    slug: string;
    published?: boolean;
    posts?: CreatePostDto[];
    userId: number;
}
declare const UpdateProfileDto_base: import("@nestjs/common").Type<Partial<Omit<CreateProfileDto, "slug">>>;
export declare class UpdateProfileDto extends UpdateProfileDto_base {
}
export {};
