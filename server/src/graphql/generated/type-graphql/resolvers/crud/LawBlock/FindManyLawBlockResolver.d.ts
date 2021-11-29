import { GraphQLResolveInfo } from "graphql";
import { FindManyLawBlockArgs } from "./args/FindManyLawBlockArgs";
import { LawBlock } from "../../../models/LawBlock";
export declare class FindManyLawBlockResolver {
    lawBlocks(ctx: any, info: GraphQLResolveInfo, args: FindManyLawBlockArgs): Promise<LawBlock[]>;
}
