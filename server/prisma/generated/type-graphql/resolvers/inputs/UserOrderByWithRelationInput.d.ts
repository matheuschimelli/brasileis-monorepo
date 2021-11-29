import { PostOrderByRelationAggregateInput } from "../inputs/PostOrderByRelationAggregateInput";
import { ProfileOrderByWithRelationInput } from "../inputs/ProfileOrderByWithRelationInput";
export declare class UserOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    username?: "asc" | "desc" | undefined;
    tokens?: "asc" | "desc" | undefined;
    admin?: "asc" | "desc" | undefined;
    googleId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    role?: "asc" | "desc" | undefined;
    profile?: ProfileOrderByWithRelationInput | undefined;
    posts?: PostOrderByRelationAggregateInput | undefined;
}
