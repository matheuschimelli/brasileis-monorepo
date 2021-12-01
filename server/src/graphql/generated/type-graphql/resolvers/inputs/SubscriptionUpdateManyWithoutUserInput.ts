import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionCreateManyUserInputEnvelope } from "../inputs/SubscriptionCreateManyUserInputEnvelope";
import { SubscriptionCreateOrConnectWithoutUserInput } from "../inputs/SubscriptionCreateOrConnectWithoutUserInput";
import { SubscriptionCreateWithoutUserInput } from "../inputs/SubscriptionCreateWithoutUserInput";
import { SubscriptionScalarWhereInput } from "../inputs/SubscriptionScalarWhereInput";
import { SubscriptionUpdateManyWithWhereWithoutUserInput } from "../inputs/SubscriptionUpdateManyWithWhereWithoutUserInput";
import { SubscriptionUpdateWithWhereUniqueWithoutUserInput } from "../inputs/SubscriptionUpdateWithWhereUniqueWithoutUserInput";
import { SubscriptionUpsertWithWhereUniqueWithoutUserInput } from "../inputs/SubscriptionUpsertWithWhereUniqueWithoutUserInput";
import { SubscriptionWhereUniqueInput } from "../inputs/SubscriptionWhereUniqueInput";

@TypeGraphQL.InputType("SubscriptionUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class SubscriptionUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [SubscriptionCreateWithoutUserInput], {
    nullable: true
  })
  create?: SubscriptionCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: SubscriptionUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => SubscriptionCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: SubscriptionCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionWhereUniqueInput], {
    nullable: true
  })
  set?: SubscriptionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SubscriptionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionWhereUniqueInput], {
    nullable: true
  })
  delete?: SubscriptionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionWhereUniqueInput], {
    nullable: true
  })
  connect?: SubscriptionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: SubscriptionUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: SubscriptionUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SubscriptionScalarWhereInput[] | undefined;
}
