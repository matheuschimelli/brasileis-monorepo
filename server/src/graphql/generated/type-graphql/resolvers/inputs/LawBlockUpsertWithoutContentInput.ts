import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LawBlockCreateWithoutContentInput } from "../inputs/LawBlockCreateWithoutContentInput";
import { LawBlockUpdateWithoutContentInput } from "../inputs/LawBlockUpdateWithoutContentInput";

@TypeGraphQL.InputType("LawBlockUpsertWithoutContentInput", {
  isAbstract: true
})
export class LawBlockUpsertWithoutContentInput {
  @TypeGraphQL.Field(_type => LawBlockUpdateWithoutContentInput, {
    nullable: false
  })
  update!: LawBlockUpdateWithoutContentInput;

  @TypeGraphQL.Field(_type => LawBlockCreateWithoutContentInput, {
    nullable: false
  })
  create!: LawBlockCreateWithoutContentInput;
}
