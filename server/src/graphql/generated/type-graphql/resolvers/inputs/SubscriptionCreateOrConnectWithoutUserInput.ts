import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionCreateWithoutUserInput } from "../inputs/SubscriptionCreateWithoutUserInput";
import { SubscriptionWhereUniqueInput } from "../inputs/SubscriptionWhereUniqueInput";

@TypeGraphQL.InputType("SubscriptionCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class SubscriptionCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => SubscriptionWhereUniqueInput, {
    nullable: false
  })
  where!: SubscriptionWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubscriptionCreateWithoutUserInput, {
    nullable: false
  })
  create!: SubscriptionCreateWithoutUserInput;
}
