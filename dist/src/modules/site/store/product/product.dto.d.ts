export declare class CreateProductDto {
    id: number;
    name: string;
    priceUnit: string;
    basicUnit: string;
    taxPercentage: string;
    limited: boolean;
    active: boolean;
    productSale: [];
    stock: string;
}
declare const UpdateProductDto_base: import("@nestjs/common").Type<Partial<CreateProductDto>>;
export declare class UpdateProductDto extends UpdateProductDto_base {
}
export {};
