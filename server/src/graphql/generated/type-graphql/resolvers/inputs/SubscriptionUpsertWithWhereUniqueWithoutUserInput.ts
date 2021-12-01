import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionCreateWithoutUserInput } from "../inputs/SubscriptionCreateWithoutUserInput";
import { SubscriptionUpdateWithoutUserInput } from "../inputs/SubscriptionUpdateWithoutUserInput";
import { SubscriptionWhereUniqueInput } from "../inputs/SubscriptionWhereUniqueInput";

@TypeGraphQL.InputType("SubscriptionUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class SubscriptionUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => SubscriptionWhereUniqueInput, {
    nullable: false
  })
  where!: SubscriptionWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubscriptionUpdateWithoutUserInput, {
    nullable: false
  })
  update!: SubscriptionUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => SubscriptionCreateWithoutUserInput, {
    nullable: false
  })
  create!: SubscriptionCreateWithoutUserInput;
}
