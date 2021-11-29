import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LawBlockCreateManyLawBlockInputEnvelope } from "../inputs/LawBlockCreateManyLawBlockInputEnvelope";
import { LawBlockCreateOrConnectWithoutLawBlockInput } from "../inputs/LawBlockCreateOrConnectWithoutLawBlockInput";
import { LawBlockCreateWithoutLawBlockInput } from "../inputs/LawBlockCreateWithoutLawBlockInput";
import { LawBlockWhereUniqueInput } from "../inputs/LawBlockWhereUniqueInput";

@TypeGraphQL.InputType("LawBlockCreateNestedManyWithoutLawBlockInput", {
  isAbstract: true
})
export class LawBlockCreateNestedManyWithoutLawBlockInput {
  @TypeGraphQL.Field(_type => [LawBlockCreateWithoutLawBlockInput], {
    nullable: true
  })
  create?: LawBlockCreateWithoutLawBlockInput[] | undefined;

  @TypeGraphQL.Field(_type => [LawBlockCreateOrConnectWithoutLawBlockInput], {
    nullable: true
  })
  connectOrCreate?: LawBlockCreateOrConnectWithoutLawBlockInput[] | undefined;

  @TypeGraphQL.Field(_type => LawBlockCreateManyLawBlockInputEnvelope, {
    nullable: true
  })
  createMany?: LawBlockCreateManyLawBlockInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LawBlockWhereUniqueInput], {
    nullable: true
  })
  connect?: LawBlockWhereUniqueInput[] | undefined;
}
