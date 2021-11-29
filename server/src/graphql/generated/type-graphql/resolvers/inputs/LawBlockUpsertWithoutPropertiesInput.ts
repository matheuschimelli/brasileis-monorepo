import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LawBlockCreateWithoutPropertiesInput } from "../inputs/LawBlockCreateWithoutPropertiesInput";
import { LawBlockUpdateWithoutPropertiesInput } from "../inputs/LawBlockUpdateWithoutPropertiesInput";

@TypeGraphQL.InputType("LawBlockUpsertWithoutPropertiesInput", {
  isAbstract: true
})
export class LawBlockUpsertWithoutPropertiesInput {
  @TypeGraphQL.Field(_type => LawBlockUpdateWithoutPropertiesInput, {
    nullable: false
  })
  update!: LawBlockUpdateWithoutPropertiesInput;

  @TypeGraphQL.Field(_type => LawBlockCreateWithoutPropertiesInput, {
    nullable: false
  })
  create!: LawBlockCreateWithoutPropertiesInput;
}
