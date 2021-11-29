import { UserCreateManytokensInput } from "../inputs/UserCreateManytokensInput";
export declare class UserCreateManyInput {
    id?: string | undefined;
    name?: string | undefined;
    email: string;
    username?: string | undefined;
    admin?: boolean | undefined;
    googleId: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    role?: "USER" | "MEMBER" | "ADMIN" | undefined;
    tokens?: UserCreateManytokensInput | undefined;
}
