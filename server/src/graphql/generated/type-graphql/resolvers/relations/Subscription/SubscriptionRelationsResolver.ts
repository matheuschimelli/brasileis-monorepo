import * as TypeGraphQL from "type-graphql";
import { Subscription } from "../../../models/Subscription";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Subscription)
export class SubscriptionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() subscription: Subscription, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).subscription.findUnique({
      where: {
        id: subscription.id,
      },
    }).user({});
  }
}
