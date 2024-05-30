export declare class CreatePostDto {
    id: number;
    title: string;
    description?: string;
    content: string;
    image: string;
    slug: string;
    afterPost?: string;
    beforePost?: string;
    categories: {
        id: number;
    }[];
    published?: boolean;
    profileId: number;
    accountId: number;
}
declare const UpdatePostDto_base: import("@nestjs/common").Type<Partial<CreatePostDto>>;
export declare class UpdatePostDto extends UpdatePostDto_base {
}
export {};
