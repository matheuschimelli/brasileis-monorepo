import { GraphQLResolveInfo } from "graphql";
import { GroupByLawBlockArgs } from "./args/GroupByLawBlockArgs";
import { LawBlockGroupBy } from "../../outputs/LawBlockGroupBy";
export declare class GroupByLawBlockResolver {
    groupByLawBlock(ctx: any, info: GraphQLResolveInfo, args: GroupByLawBlockArgs): Promise<LawBlockGroupBy[]>;
}
