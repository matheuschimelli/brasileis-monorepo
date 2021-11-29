import * as TypeGraphQL from "type-graphql";
import { Membership } from "../../../models/Membership";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Membership)
export class MembershipRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() membership: Membership, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).membership.findUnique({
      where: {
        id: membership.id,
      },
    }).user({});
  }
}
