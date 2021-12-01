import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionCreateManyUserInputEnvelope } from "../inputs/SubscriptionCreateManyUserInputEnvelope";
import { SubscriptionCreateOrConnectWithoutUserInput } from "../inputs/SubscriptionCreateOrConnectWithoutUserInput";
import { SubscriptionCreateWithoutUserInput } from "../inputs/SubscriptionCreateWithoutUserInput";
import { SubscriptionWhereUniqueInput } from "../inputs/SubscriptionWhereUniqueInput";

@TypeGraphQL.InputType("SubscriptionCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class SubscriptionCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [SubscriptionCreateWithoutUserInput], {
    nullable: true
  })
  create?: SubscriptionCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => SubscriptionCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: SubscriptionCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionWhereUniqueInput], {
    nullable: true
  })
  connect?: SubscriptionWhereUniqueInput[] | undefined;
}
