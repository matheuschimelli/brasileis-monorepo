import { LawBlockOrderByWithAggregationInput } from "../../../inputs/LawBlockOrderByWithAggregationInput";
import { LawBlockScalarWhereWithAggregatesInput } from "../../../inputs/LawBlockScalarWhereWithAggregatesInput";
import { LawBlockWhereInput } from "../../../inputs/LawBlockWhereInput";
export declare class GroupByLawBlockArgs {
    where?: LawBlockWhereInput | undefined;
    orderBy?: LawBlockOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "type" | "createdAt" | "updatedAt" | "lawBlockId">;
    having?: LawBlockScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
