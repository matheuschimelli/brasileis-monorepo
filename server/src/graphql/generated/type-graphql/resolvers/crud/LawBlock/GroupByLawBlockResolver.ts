import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByLawBlockArgs } from "./args/GroupByLawBlockArgs";
import { LawBlock } from "../../../models/LawBlock";
import { LawBlockGroupBy } from "../../outputs/LawBlockGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LawBlock)
export class GroupByLawBlockResolver {
  @TypeGraphQL.Query(_returns => [LawBlockGroupBy], {
    nullable: false
  })
  async groupByLawBlock(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByLawBlockArgs): Promise<LawBlockGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).lawBlock.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
