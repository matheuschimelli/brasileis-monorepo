import { GraphQLResolveInfo } from "graphql";
import { AggregateLawBlockArgs } from "./args/AggregateLawBlockArgs";
import { AggregateLawBlock } from "../../outputs/AggregateLawBlock";
export declare class AggregateLawBlockResolver {
    aggregateLawBlock(ctx: any, info: GraphQLResolveInfo, args: AggregateLawBlockArgs): Promise<AggregateLawBlock>;
}
