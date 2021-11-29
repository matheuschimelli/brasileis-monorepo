import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MembershipCreateManyUserInputEnvelope } from "../inputs/MembershipCreateManyUserInputEnvelope";
import { MembershipCreateOrConnectWithoutUserInput } from "../inputs/MembershipCreateOrConnectWithoutUserInput";
import { MembershipCreateWithoutUserInput } from "../inputs/MembershipCreateWithoutUserInput";
import { MembershipScalarWhereInput } from "../inputs/MembershipScalarWhereInput";
import { MembershipUpdateManyWithWhereWithoutUserInput } from "../inputs/MembershipUpdateManyWithWhereWithoutUserInput";
import { MembershipUpdateWithWhereUniqueWithoutUserInput } from "../inputs/MembershipUpdateWithWhereUniqueWithoutUserInput";
import { MembershipUpsertWithWhereUniqueWithoutUserInput } from "../inputs/MembershipUpsertWithWhereUniqueWithoutUserInput";
import { MembershipWhereUniqueInput } from "../inputs/MembershipWhereUniqueInput";

@TypeGraphQL.InputType("MembershipUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class MembershipUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [MembershipCreateWithoutUserInput], {
    nullable: true
  })
  create?: MembershipCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MembershipCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: MembershipCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MembershipUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: MembershipUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => MembershipCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: MembershipCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MembershipWhereUniqueInput], {
    nullable: true
  })
  set?: MembershipWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MembershipWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MembershipWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MembershipWhereUniqueInput], {
    nullable: true
  })
  delete?: MembershipWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MembershipWhereUniqueInput], {
    nullable: true
  })
  connect?: MembershipWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MembershipUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: MembershipUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MembershipUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: MembershipUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MembershipScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MembershipScalarWhereInput[] | undefined;
}
