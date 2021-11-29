import { GraphQLResolveInfo } from "graphql";
import { GroupByBlockPropertyArgs } from "./args/GroupByBlockPropertyArgs";
import { BlockPropertyGroupBy } from "../../outputs/BlockPropertyGroupBy";
export declare class GroupByBlockPropertyResolver {
    groupByBlockProperty(ctx: any, info: GraphQLResolveInfo, args: GroupByBlockPropertyArgs): Promise<BlockPropertyGroupBy[]>;
}
