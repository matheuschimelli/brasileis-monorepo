import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByBlockPropertyArgs } from "./args/GroupByBlockPropertyArgs";
import { BlockProperty } from "../../../models/BlockProperty";
import { BlockPropertyGroupBy } from "../../outputs/BlockPropertyGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BlockProperty)
export class GroupByBlockPropertyResolver {
  @TypeGraphQL.Query(_returns => [BlockPropertyGroupBy], {
    nullable: false
  })
  async groupByBlockProperty(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByBlockPropertyArgs): Promise<BlockPropertyGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).blockProperty.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
