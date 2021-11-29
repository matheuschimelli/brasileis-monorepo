import { UserCreateNestedOneWithoutPostsInput } from "../inputs/UserCreateNestedOneWithoutPostsInput";
export declare class PostCreateInput {
    title: string;
    createdAt?: Date | undefined;
    content?: string | undefined;
    published?: boolean | undefined;
    User: UserCreateNestedOneWithoutPostsInput;
}
