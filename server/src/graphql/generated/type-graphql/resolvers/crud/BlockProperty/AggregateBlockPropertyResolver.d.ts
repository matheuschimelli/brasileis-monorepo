import { GraphQLResolveInfo } from "graphql";
import { AggregateBlockPropertyArgs } from "./args/AggregateBlockPropertyArgs";
import { AggregateBlockProperty } from "../../outputs/AggregateBlockProperty";
export declare class AggregateBlockPropertyResolver {
    aggregateBlockProperty(ctx: any, info: GraphQLResolveInfo, args: AggregateBlockPropertyArgs): Promise<AggregateBlockProperty>;
}
