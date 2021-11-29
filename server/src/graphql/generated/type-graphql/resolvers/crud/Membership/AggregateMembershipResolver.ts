import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateMembershipArgs } from "./args/AggregateMembershipArgs";
import { Membership } from "../../../models/Membership";
import { AggregateMembership } from "../../outputs/AggregateMembership";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Membership)
export class AggregateMembershipResolver {
  @TypeGraphQL.Query(_returns => AggregateMembership, {
    nullable: false
  })
  async aggregateMembership(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMembershipArgs): Promise<AggregateMembership> {
    return getPrismaFromContext(ctx).membership.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
