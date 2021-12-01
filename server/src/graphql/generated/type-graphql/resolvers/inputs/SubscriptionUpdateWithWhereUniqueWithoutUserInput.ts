import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionUpdateWithoutUserInput } from "../inputs/SubscriptionUpdateWithoutUserInput";
import { SubscriptionWhereUniqueInput } from "../inputs/SubscriptionWhereUniqueInput";

@TypeGraphQL.InputType("SubscriptionUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class SubscriptionUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => SubscriptionWhereUniqueInput, {
    nullable: false
  })
  where!: SubscriptionWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubscriptionUpdateWithoutUserInput, {
    nullable: false
  })
  data!: SubscriptionUpdateWithoutUserInput;
}
