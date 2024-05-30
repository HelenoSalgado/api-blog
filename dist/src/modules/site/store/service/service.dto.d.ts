export declare class CreateServiceDto {
    id: number;
    name: string;
    priceUnit: string;
    basicUnit: string;
    taxPercentage: string;
    active: boolean;
    period: number;
    serviceSale: [];
}
declare const UpdateServiceDto_base: import("@nestjs/common").Type<Partial<CreateServiceDto>>;
export declare class UpdateServiceDto extends UpdateServiceDto_base {
}
export {};
