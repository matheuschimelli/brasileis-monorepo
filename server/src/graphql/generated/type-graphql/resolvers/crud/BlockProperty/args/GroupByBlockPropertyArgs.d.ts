import { BlockPropertyOrderByWithAggregationInput } from "../../../inputs/BlockPropertyOrderByWithAggregationInput";
import { BlockPropertyScalarWhereWithAggregatesInput } from "../../../inputs/BlockPropertyScalarWhereWithAggregatesInput";
import { BlockPropertyWhereInput } from "../../../inputs/BlockPropertyWhereInput";
export declare class GroupByBlockPropertyArgs {
    where?: BlockPropertyWhereInput | undefined;
    orderBy?: BlockPropertyOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "value" | "title" | "number" | "identifier" | "comment" | "year" | "author" | "membersOnly" | "searchString" | "lawBlockId">;
    having?: BlockPropertyScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
