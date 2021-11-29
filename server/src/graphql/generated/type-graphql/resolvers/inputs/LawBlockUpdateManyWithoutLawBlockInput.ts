import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LawBlockCreateManyLawBlockInputEnvelope } from "../inputs/LawBlockCreateManyLawBlockInputEnvelope";
import { LawBlockCreateOrConnectWithoutLawBlockInput } from "../inputs/LawBlockCreateOrConnectWithoutLawBlockInput";
import { LawBlockCreateWithoutLawBlockInput } from "../inputs/LawBlockCreateWithoutLawBlockInput";
import { LawBlockScalarWhereInput } from "../inputs/LawBlockScalarWhereInput";
import { LawBlockUpdateManyWithWhereWithoutLawBlockInput } from "../inputs/LawBlockUpdateManyWithWhereWithoutLawBlockInput";
import { LawBlockUpdateWithWhereUniqueWithoutLawBlockInput } from "../inputs/LawBlockUpdateWithWhereUniqueWithoutLawBlockInput";
import { LawBlockUpsertWithWhereUniqueWithoutLawBlockInput } from "../inputs/LawBlockUpsertWithWhereUniqueWithoutLawBlockInput";
import { LawBlockWhereUniqueInput } from "../inputs/LawBlockWhereUniqueInput";

@TypeGraphQL.InputType("LawBlockUpdateManyWithoutLawBlockInput", {
  isAbstract: true
})
export class LawBlockUpdateManyWithoutLawBlockInput {
  @TypeGraphQL.Field(_type => [LawBlockCreateWithoutLawBlockInput], {
    nullable: true
  })
  create?: LawBlockCreateWithoutLawBlockInput[] | undefined;

  @TypeGraphQL.Field(_type => [LawBlockCreateOrConnectWithoutLawBlockInput], {
    nullable: true
  })
  connectOrCreate?: LawBlockCreateOrConnectWithoutLawBlockInput[] | undefined;

  @TypeGraphQL.Field(_type => [LawBlockUpsertWithWhereUniqueWithoutLawBlockInput], {
    nullable: true
  })
  upsert?: LawBlockUpsertWithWhereUniqueWithoutLawBlockInput[] | undefined;

  @TypeGraphQL.Field(_type => LawBlockCreateManyLawBlockInputEnvelope, {
    nullable: true
  })
  createMany?: LawBlockCreateManyLawBlockInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LawBlockWhereUniqueInput], {
    nullable: true
  })
  set?: LawBlockWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LawBlockWhereUniqueInput], {
    nullable: true
  })
  disconnect?: LawBlockWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LawBlockWhereUniqueInput], {
    nullable: true
  })
  delete?: LawBlockWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LawBlockWhereUniqueInput], {
    nullable: true
  })
  connect?: LawBlockWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LawBlockUpdateWithWhereUniqueWithoutLawBlockInput], {
    nullable: true
  })
  update?: LawBlockUpdateWithWhereUniqueWithoutLawBlockInput[] | undefined;

  @TypeGraphQL.Field(_type => [LawBlockUpdateManyWithWhereWithoutLawBlockInput], {
    nullable: true
  })
  updateMany?: LawBlockUpdateManyWithWhereWithoutLawBlockInput[] | undefined;

  @TypeGraphQL.Field(_type => [LawBlockScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LawBlockScalarWhereInput[] | undefined;
}
