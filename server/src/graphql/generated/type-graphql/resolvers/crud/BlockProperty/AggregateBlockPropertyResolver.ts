import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateBlockPropertyArgs } from "./args/AggregateBlockPropertyArgs";
import { BlockProperty } from "../../../models/BlockProperty";
import { AggregateBlockProperty } from "../../outputs/AggregateBlockProperty";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BlockProperty)
export class AggregateBlockPropertyResolver {
  @TypeGraphQL.Query(_returns => AggregateBlockProperty, {
    nullable: false
  })
  async aggregateBlockProperty(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateBlockPropertyArgs): Promise<AggregateBlockProperty> {
    return getPrismaFromContext(ctx).blockProperty.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
