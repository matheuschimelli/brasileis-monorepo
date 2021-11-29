import { BlockProperty } from "../../../models/BlockProperty";
import { LawBlock } from "../../../models/LawBlock";
export declare class BlockPropertyRelationsResolver {
    LawBlock(blockProperty: BlockProperty, ctx: any): Promise<LawBlock>;
}
