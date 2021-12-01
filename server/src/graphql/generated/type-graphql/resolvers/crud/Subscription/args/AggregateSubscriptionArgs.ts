import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubscriptionOrderByWithRelationInput } from "../../../inputs/SubscriptionOrderByWithRelationInput";
import { SubscriptionWhereInput } from "../../../inputs/SubscriptionWhereInput";
import { SubscriptionWhereUniqueInput } from "../../../inputs/SubscriptionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSubscriptionArgs {
  @TypeGraphQL.Field(_type => SubscriptionWhereInput, {
    nullable: true
  })
  where?: SubscriptionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SubscriptionOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SubscriptionWhereUniqueInput, {
    nullable: true
  })
  cursor?: SubscriptionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
