import { BlockProperty } from "../../../models/BlockProperty";
import { LawBlock } from "../../../models/LawBlock";
import { LawBlockContentArgs } from "./args/LawBlockContentArgs";
export declare class LawBlockRelationsResolver {
    content(lawBlock: LawBlock, ctx: any, args: LawBlockContentArgs): Promise<LawBlock[]>;
    properties(lawBlock: LawBlock, ctx: any): Promise<BlockProperty | null>;
    LawBlock(lawBlock: LawBlock, ctx: any): Promise<LawBlock | null>;
}
