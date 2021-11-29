import { BlockPropertyAvgOrderByAggregateInput } from "../inputs/BlockPropertyAvgOrderByAggregateInput";
import { BlockPropertyCountOrderByAggregateInput } from "../inputs/BlockPropertyCountOrderByAggregateInput";
import { BlockPropertyMaxOrderByAggregateInput } from "../inputs/BlockPropertyMaxOrderByAggregateInput";
import { BlockPropertyMinOrderByAggregateInput } from "../inputs/BlockPropertyMinOrderByAggregateInput";
import { BlockPropertySumOrderByAggregateInput } from "../inputs/BlockPropertySumOrderByAggregateInput";
export declare class BlockPropertyOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    value?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    number?: "asc" | "desc" | undefined;
    identifier?: "asc" | "desc" | undefined;
    comment?: "asc" | "desc" | undefined;
    year?: "asc" | "desc" | undefined;
    author?: "asc" | "desc" | undefined;
    membersOnly?: "asc" | "desc" | undefined;
    searchString?: "asc" | "desc" | undefined;
    lawBlockId?: "asc" | "desc" | undefined;
    _count?: BlockPropertyCountOrderByAggregateInput | undefined;
    _avg?: BlockPropertyAvgOrderByAggregateInput | undefined;
    _max?: BlockPropertyMaxOrderByAggregateInput | undefined;
    _min?: BlockPropertyMinOrderByAggregateInput | undefined;
    _sum?: BlockPropertySumOrderByAggregateInput | undefined;
}
