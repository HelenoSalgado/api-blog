export declare class CreateClientDto {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    whatsApp?: string;
    company: string;
    VAT_ID: string;
    accountId: number;
}
declare const UpdateClientDto_base: import("@nestjs/common").Type<Partial<Omit<CreateClientDto, "email">>>;
export declare class UpdateClientDto extends UpdateClientDto_base {
}
export {};
