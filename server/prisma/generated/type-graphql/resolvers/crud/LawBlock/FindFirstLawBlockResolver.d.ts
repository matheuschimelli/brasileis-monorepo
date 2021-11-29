import { GraphQLResolveInfo } from "graphql";
import { FindFirstLawBlockArgs } from "./args/FindFirstLawBlockArgs";
import { LawBlock } from "../../../models/LawBlock";
export declare class FindFirstLawBlockResolver {
    findFirstLawBlock(ctx: any, info: GraphQLResolveInfo, args: FindFirstLawBlockArgs): Promise<LawBlock | null>;
}
