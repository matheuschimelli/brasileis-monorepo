import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LawBlockCreateWithoutLawBlockInput } from "../inputs/LawBlockCreateWithoutLawBlockInput";
import { LawBlockUpdateWithoutLawBlockInput } from "../inputs/LawBlockUpdateWithoutLawBlockInput";
import { LawBlockWhereUniqueInput } from "../inputs/LawBlockWhereUniqueInput";

@TypeGraphQL.InputType("LawBlockUpsertWithWhereUniqueWithoutLawBlockInput", {
  isAbstract: true
})
export class LawBlockUpsertWithWhereUniqueWithoutLawBlockInput {
  @TypeGraphQL.Field(_type => LawBlockWhereUniqueInput, {
    nullable: false
  })
  where!: LawBlockWhereUniqueInput;

  @TypeGraphQL.Field(_type => LawBlockUpdateWithoutLawBlockInput, {
    nullable: false
  })
  update!: LawBlockUpdateWithoutLawBlockInput;

  @TypeGraphQL.Field(_type => LawBlockCreateWithoutLawBlockInput, {
    nullable: false
  })
  create!: LawBlockCreateWithoutLawBlockInput;
}
