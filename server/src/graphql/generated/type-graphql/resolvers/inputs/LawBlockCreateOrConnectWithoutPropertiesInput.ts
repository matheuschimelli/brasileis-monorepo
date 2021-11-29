import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LawBlockCreateWithoutPropertiesInput } from "../inputs/LawBlockCreateWithoutPropertiesInput";
import { LawBlockWhereUniqueInput } from "../inputs/LawBlockWhereUniqueInput";

@TypeGraphQL.InputType("LawBlockCreateOrConnectWithoutPropertiesInput", {
  isAbstract: true
})
export class LawBlockCreateOrConnectWithoutPropertiesInput {
  @TypeGraphQL.Field(_type => LawBlockWhereUniqueInput, {
    nullable: false
  })
  where!: LawBlockWhereUniqueInput;

  @TypeGraphQL.Field(_type => LawBlockCreateWithoutPropertiesInput, {
    nullable: false
  })
  create!: LawBlockCreateWithoutPropertiesInput;
}
