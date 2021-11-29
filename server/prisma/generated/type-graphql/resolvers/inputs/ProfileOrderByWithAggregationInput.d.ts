import { ProfileCountOrderByAggregateInput } from "../inputs/ProfileCountOrderByAggregateInput";
import { ProfileMaxOrderByAggregateInput } from "../inputs/ProfileMaxOrderByAggregateInput";
import { ProfileMinOrderByAggregateInput } from "../inputs/ProfileMinOrderByAggregateInput";
export declare class ProfileOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    bio?: "asc" | "desc" | undefined;
    picture?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    _count?: ProfileCountOrderByAggregateInput | undefined;
    _max?: ProfileMaxOrderByAggregateInput | undefined;
    _min?: ProfileMinOrderByAggregateInput | undefined;
}
