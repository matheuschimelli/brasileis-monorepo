import { ProfileCreateNestedOneWithoutUserInput } from "../inputs/ProfileCreateNestedOneWithoutUserInput";
import { UserCreatetokensInput } from "../inputs/UserCreatetokensInput";
export declare class UserCreateWithoutPostsInput {
    id?: string | undefined;
    name?: string | undefined;
    email: string;
    username?: string | undefined;
    admin?: boolean | undefined;
    googleId: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    role?: "USER" | "MEMBER" | "ADMIN" | undefined;
    tokens?: UserCreatetokensInput | undefined;
    profile?: ProfileCreateNestedOneWithoutUserInput | undefined;
}
