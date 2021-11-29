import { BlockPropertyOrderByWithRelationInput } from "../inputs/BlockPropertyOrderByWithRelationInput";
import { LawBlockOrderByRelationAggregateInput } from "../inputs/LawBlockOrderByRelationAggregateInput";
export declare class LawBlockOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    content?: LawBlockOrderByRelationAggregateInput | undefined;
    properties?: BlockPropertyOrderByWithRelationInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    LawBlock?: LawBlockOrderByWithRelationInput | undefined;
    lawBlockId?: "asc" | "desc" | undefined;
}
