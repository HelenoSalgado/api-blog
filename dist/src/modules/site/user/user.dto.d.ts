import { CreateProfileDto } from '../blog/profile/profile.tdo';
export declare class CreateUserDto {
    id: number;
    accountId: number;
    firstName?: string;
    lastName?: string;
    username: string;
    email: string;
    provider?: string;
    password: string;
    jobTitle?: string;
    profile?: CreateProfileDto;
    resetPasswordToken?: string;
    confirmationToken?: string;
    confirmed: boolean;
    blocked: boolean;
}
declare const UpdateUserDto_base: import("@nestjs/common").Type<Partial<Omit<CreateUserDto, "email">>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
}
export {};
