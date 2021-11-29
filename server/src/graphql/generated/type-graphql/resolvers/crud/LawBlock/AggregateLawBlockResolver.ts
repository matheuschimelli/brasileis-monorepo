import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateLawBlockArgs } from "./args/AggregateLawBlockArgs";
import { LawBlock } from "../../../models/LawBlock";
import { AggregateLawBlock } from "../../outputs/AggregateLawBlock";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LawBlock)
export class AggregateLawBlockResolver {
  @TypeGraphQL.Query(_returns => AggregateLawBlock, {
    nullable: false
  })
  async aggregateLawBlock(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLawBlockArgs): Promise<AggregateLawBlock> {
    return getPrismaFromContext(ctx).lawBlock.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
