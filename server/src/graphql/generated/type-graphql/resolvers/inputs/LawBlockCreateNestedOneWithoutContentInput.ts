import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LawBlockCreateOrConnectWithoutContentInput } from "../inputs/LawBlockCreateOrConnectWithoutContentInput";
import { LawBlockCreateWithoutContentInput } from "../inputs/LawBlockCreateWithoutContentInput";
import { LawBlockWhereUniqueInput } from "../inputs/LawBlockWhereUniqueInput";

@TypeGraphQL.InputType("LawBlockCreateNestedOneWithoutContentInput", {
  isAbstract: true
})
export class LawBlockCreateNestedOneWithoutContentInput {
  @TypeGraphQL.Field(_type => LawBlockCreateWithoutContentInput, {
    nullable: true
  })
  create?: LawBlockCreateWithoutContentInput | undefined;

  @TypeGraphQL.Field(_type => LawBlockCreateOrConnectWithoutContentInput, {
    nullable: true
  })
  connectOrCreate?: LawBlockCreateOrConnectWithoutContentInput | undefined;

  @TypeGraphQL.Field(_type => LawBlockWhereUniqueInput, {
    nullable: true
  })
  connect?: LawBlockWhereUniqueInput | undefined;
}
