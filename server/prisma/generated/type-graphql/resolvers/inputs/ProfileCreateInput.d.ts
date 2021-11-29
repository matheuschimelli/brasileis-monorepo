import { UserCreateNestedOneWithoutProfileInput } from "../inputs/UserCreateNestedOneWithoutProfileInput";
export declare class ProfileCreateInput {
    id?: string | undefined;
    bio?: string | undefined;
    picture?: string | undefined;
    User: UserCreateNestedOneWithoutProfileInput;
}
