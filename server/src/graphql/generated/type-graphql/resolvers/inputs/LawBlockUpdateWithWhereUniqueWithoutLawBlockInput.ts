import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LawBlockUpdateWithoutLawBlockInput } from "../inputs/LawBlockUpdateWithoutLawBlockInput";
import { LawBlockWhereUniqueInput } from "../inputs/LawBlockWhereUniqueInput";

@TypeGraphQL.InputType("LawBlockUpdateWithWhereUniqueWithoutLawBlockInput", {
  isAbstract: true
})
export class LawBlockUpdateWithWhereUniqueWithoutLawBlockInput {
  @TypeGraphQL.Field(_type => LawBlockWhereUniqueInput, {
    nullable: false
  })
  where!: LawBlockWhereUniqueInput;

  @TypeGraphQL.Field(_type => LawBlockUpdateWithoutLawBlockInput, {
    nullable: false
  })
  data!: LawBlockUpdateWithoutLawBlockInput;
}
