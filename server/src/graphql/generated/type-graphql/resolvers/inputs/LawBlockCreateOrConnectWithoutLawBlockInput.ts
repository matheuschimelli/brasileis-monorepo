import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LawBlockCreateWithoutLawBlockInput } from "../inputs/LawBlockCreateWithoutLawBlockInput";
import { LawBlockWhereUniqueInput } from "../inputs/LawBlockWhereUniqueInput";

@TypeGraphQL.InputType("LawBlockCreateOrConnectWithoutLawBlockInput", {
  isAbstract: true
})
export class LawBlockCreateOrConnectWithoutLawBlockInput {
  @TypeGraphQL.Field(_type => LawBlockWhereUniqueInput, {
    nullable: false
  })
  where!: LawBlockWhereUniqueInput;

  @TypeGraphQL.Field(_type => LawBlockCreateWithoutLawBlockInput, {
    nullable: false
  })
  create!: LawBlockCreateWithoutLawBlockInput;
}
