import { LawBlockOrderByWithRelationInput } from "../../../inputs/LawBlockOrderByWithRelationInput";
import { LawBlockWhereInput } from "../../../inputs/LawBlockWhereInput";
import { LawBlockWhereUniqueInput } from "../../../inputs/LawBlockWhereUniqueInput";
export declare class FindFirstLawBlockArgs {
    where?: LawBlockWhereInput | undefined;
    orderBy?: LawBlockOrderByWithRelationInput[] | undefined;
    cursor?: LawBlockWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "type" | "createdAt" | "updatedAt" | "lawBlockId"> | undefined;
}
