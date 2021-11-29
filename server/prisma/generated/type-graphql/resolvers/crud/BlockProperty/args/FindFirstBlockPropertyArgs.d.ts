import { BlockPropertyOrderByWithRelationInput } from "../../../inputs/BlockPropertyOrderByWithRelationInput";
import { BlockPropertyWhereInput } from "../../../inputs/BlockPropertyWhereInput";
import { BlockPropertyWhereUniqueInput } from "../../../inputs/BlockPropertyWhereUniqueInput";
export declare class FindFirstBlockPropertyArgs {
    where?: BlockPropertyWhereInput | undefined;
    orderBy?: BlockPropertyOrderByWithRelationInput[] | undefined;
    cursor?: BlockPropertyWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "value" | "title" | "number" | "identifier" | "comment" | "year" | "author" | "membersOnly" | "searchString" | "lawBlockId"> | undefined;
}
