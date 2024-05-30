export declare class CreateCategoryDto {
    id: number;
    accountId: number;
    name: string;
    description?: string;
    image?: string;
    published: boolean;
    posts: [
        {
            id: number;
        }
    ];
}
declare const UpdateCategoryDto_base: import("@nestjs/common").Type<Partial<CreateCategoryDto>>;
export declare class UpdateCategoryDto extends UpdateCategoryDto_base {
}
export {};
