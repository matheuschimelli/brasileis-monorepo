import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LawBlockWhereInput } from "../inputs/LawBlockWhereInput";

@TypeGraphQL.InputType("LawBlockRelationFilter", {
  isAbstract: true
})
export class LawBlockRelationFilter {
  @TypeGraphQL.Field(_type => LawBlockWhereInput, {
    nullable: true
  })
  is?: LawBlockWhereInput | undefined;

  @TypeGraphQL.Field(_type => LawBlockWhereInput, {
    nullable: true
  })
  isNot?: LawBlockWhereInput | undefined;
}
