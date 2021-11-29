import { BlockPropertyCreateInput } from "../../../inputs/BlockPropertyCreateInput";
import { BlockPropertyUpdateInput } from "../../../inputs/BlockPropertyUpdateInput";
import { BlockPropertyWhereUniqueInput } from "../../../inputs/BlockPropertyWhereUniqueInput";
export declare class UpsertBlockPropertyArgs {
    where: BlockPropertyWhereUniqueInput;
    create: BlockPropertyCreateInput;
    update: BlockPropertyUpdateInput;
}
