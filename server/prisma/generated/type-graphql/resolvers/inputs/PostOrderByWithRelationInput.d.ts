import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class PostOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    content?: "asc" | "desc" | undefined;
    published?: "asc" | "desc" | undefined;
    authorId?: "asc" | "desc" | undefined;
    User?: UserOrderByWithRelationInput | undefined;
}
