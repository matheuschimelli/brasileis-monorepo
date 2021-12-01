import * as TypeGraphQL from "type-graphql";
import { Customer } from "../../../models/Customer";
import { Post } from "../../../models/Post";
import { Profile } from "../../../models/Profile";
import { Subscription } from "../../../models/Subscription";
import { User } from "../../../models/User";
import { UserPostsArgs } from "./args/UserPostsArgs";
import { UserSubscriptionsArgs } from "./args/UserSubscriptionsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Profile, {
    nullable: true
  })
  async profile(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any): Promise<Profile | null> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).profile({});
  }

  @TypeGraphQL.FieldResolver(_type => [Post], {
    nullable: false
  })
  async posts(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserPostsArgs): Promise<Post[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).posts(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Subscription], {
    nullable: false
  })
  async subscriptions(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserSubscriptionsArgs): Promise<Subscription[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).subscriptions(args);
  }

  @TypeGraphQL.FieldResolver(_type => Customer, {
    nullable: true
  })
  async Customer(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any): Promise<Customer | null> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).Customer({});
  }
}
