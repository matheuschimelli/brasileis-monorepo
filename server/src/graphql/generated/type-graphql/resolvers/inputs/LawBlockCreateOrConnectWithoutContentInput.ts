import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LawBlockCreateWithoutContentInput } from "../inputs/LawBlockCreateWithoutContentInput";
import { LawBlockWhereUniqueInput } from "../inputs/LawBlockWhereUniqueInput";

@TypeGraphQL.InputType("LawBlockCreateOrConnectWithoutContentInput", {
  isAbstract: true
})
export class LawBlockCreateOrConnectWithoutContentInput {
  @TypeGraphQL.Field(_type => LawBlockWhereUniqueInput, {
    nullable: false
  })
  where!: LawBlockWhereUniqueInput;

  @TypeGraphQL.Field(_type => LawBlockCreateWithoutContentInput, {
    nullable: false
  })
  create!: LawBlockCreateWithoutContentInput;
}
