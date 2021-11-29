import { LawBlockCountOrderByAggregateInput } from "../inputs/LawBlockCountOrderByAggregateInput";
import { LawBlockMaxOrderByAggregateInput } from "../inputs/LawBlockMaxOrderByAggregateInput";
import { LawBlockMinOrderByAggregateInput } from "../inputs/LawBlockMinOrderByAggregateInput";
export declare class LawBlockOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    lawBlockId?: "asc" | "desc" | undefined;
    _count?: LawBlockCountOrderByAggregateInput | undefined;
    _max?: LawBlockMaxOrderByAggregateInput | undefined;
    _min?: LawBlockMinOrderByAggregateInput | undefined;
}
