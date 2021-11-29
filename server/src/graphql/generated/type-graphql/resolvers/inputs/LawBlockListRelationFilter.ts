import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LawBlockWhereInput } from "../inputs/LawBlockWhereInput";

@TypeGraphQL.InputType("LawBlockListRelationFilter", {
  isAbstract: true
})
export class LawBlockListRelationFilter {
  @TypeGraphQL.Field(_type => LawBlockWhereInput, {
    nullable: true
  })
  every?: LawBlockWhereInput | undefined;

  @TypeGraphQL.Field(_type => LawBlockWhereInput, {
    nullable: true
  })
  some?: LawBlockWhereInput | undefined;

  @TypeGraphQL.Field(_type => LawBlockWhereInput, {
    nullable: true
  })
  none?: LawBlockWhereInput | undefined;
}
