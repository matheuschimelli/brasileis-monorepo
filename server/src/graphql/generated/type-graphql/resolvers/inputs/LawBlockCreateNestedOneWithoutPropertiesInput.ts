import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LawBlockCreateOrConnectWithoutPropertiesInput } from "../inputs/LawBlockCreateOrConnectWithoutPropertiesInput";
import { LawBlockCreateWithoutPropertiesInput } from "../inputs/LawBlockCreateWithoutPropertiesInput";
import { LawBlockWhereUniqueInput } from "../inputs/LawBlockWhereUniqueInput";

@TypeGraphQL.InputType("LawBlockCreateNestedOneWithoutPropertiesInput", {
  isAbstract: true
})
export class LawBlockCreateNestedOneWithoutPropertiesInput {
  @TypeGraphQL.Field(_type => LawBlockCreateWithoutPropertiesInput, {
    nullable: true
  })
  create?: LawBlockCreateWithoutPropertiesInput | undefined;

  @TypeGraphQL.Field(_type => LawBlockCreateOrConnectWithoutPropertiesInput, {
    nullable: true
  })
  connectOrCreate?: LawBlockCreateOrConnectWithoutPropertiesInput | undefined;

  @TypeGraphQL.Field(_type => LawBlockWhereUniqueInput, {
    nullable: true
  })
  connect?: LawBlockWhereUniqueInput | undefined;
}
