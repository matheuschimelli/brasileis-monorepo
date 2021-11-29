import { GraphQLResolveInfo } from "graphql";
import { FindUniqueLawBlockArgs } from "./args/FindUniqueLawBlockArgs";
import { LawBlock } from "../../../models/LawBlock";
export declare class FindUniqueLawBlockResolver {
    lawBlock(ctx: any, info: GraphQLResolveInfo, args: FindUniqueLawBlockArgs): Promise<LawBlock | null>;
}
