import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyBlockPropertyArgs } from "./args/FindManyBlockPropertyArgs";
import { BlockProperty } from "../../../models/BlockProperty";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BlockProperty)
export class FindManyBlockPropertyResolver {
  @TypeGraphQL.Query(_returns => [BlockProperty], {
    nullable: false
  })
  async blockProperties(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyBlockPropertyArgs): Promise<BlockProperty[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).blockProperty.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
