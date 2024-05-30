import { CreateUserDto } from '../user/user.dto';
import type { Company, Role } from '@prisma/client/generator-build';
export declare class CreateAccountDto {
    id: number;
    email: string;
    confirmed: boolean;
    blocked: boolean;
    company: Company;
    CNPJ: string;
    user: CreateUserDto;
    planId: number;
}
declare const UpdateAccountDto_base: import("@nestjs/common").Type<Partial<Omit<CreateAccountDto, "email">>>;
export declare class UpdateAccountDto extends UpdateAccountDto_base {
    userId: number;
    userGroupId: number;
    role: Role;
}
export {};
