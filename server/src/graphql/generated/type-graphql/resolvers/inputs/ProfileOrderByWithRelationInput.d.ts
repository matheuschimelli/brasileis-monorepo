import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class ProfileOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    bio?: "asc" | "desc" | undefined;
    picture?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    User?: UserOrderByWithRelationInput | undefined;
}
