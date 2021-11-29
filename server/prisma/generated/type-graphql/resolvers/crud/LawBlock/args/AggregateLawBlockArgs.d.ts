import { LawBlockOrderByWithRelationInput } from "../../../inputs/LawBlockOrderByWithRelationInput";
import { LawBlockWhereInput } from "../../../inputs/LawBlockWhereInput";
import { LawBlockWhereUniqueInput } from "../../../inputs/LawBlockWhereUniqueInput";
export declare class AggregateLawBlockArgs {
    where?: LawBlockWhereInput | undefined;
    orderBy?: LawBlockOrderByWithRelationInput[] | undefined;
    cursor?: LawBlockWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
