import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlockPropertyWhereInput } from "../inputs/BlockPropertyWhereInput";

@TypeGraphQL.InputType("BlockPropertyRelationFilter", {
  isAbstract: true
})
export class BlockPropertyRelationFilter {
  @TypeGraphQL.Field(_type => BlockPropertyWhereInput, {
    nullable: true
  })
  is?: BlockPropertyWhereInput | undefined;

  @TypeGraphQL.Field(_type => BlockPropertyWhereInput, {
    nullable: true
  })
  isNot?: BlockPropertyWhereInput | undefined;
}
