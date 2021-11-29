import { BlockPropertyOrderByWithRelationInput } from "../../../inputs/BlockPropertyOrderByWithRelationInput";
import { BlockPropertyWhereInput } from "../../../inputs/BlockPropertyWhereInput";
import { BlockPropertyWhereUniqueInput } from "../../../inputs/BlockPropertyWhereUniqueInput";
export declare class AggregateBlockPropertyArgs {
    where?: BlockPropertyWhereInput | undefined;
    orderBy?: BlockPropertyOrderByWithRelationInput[] | undefined;
    cursor?: BlockPropertyWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
