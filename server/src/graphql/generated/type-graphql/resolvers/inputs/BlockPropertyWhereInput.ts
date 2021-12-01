import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { LawBlockRelationFilter } from "../inputs/LawBlockRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("BlockPropertyWhereInput", {
  isAbstract: true
})
export class BlockPropertyWhereInput {
  @TypeGraphQL.Field(_type => [BlockPropertyWhereInput], {
    nullable: true
  })
  AND?: BlockPropertyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlockPropertyWhereInput], {
    nullable: true
  })
  OR?: BlockPropertyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlockPropertyWhereInput], {
    nullable: true
  })
  NOT?: BlockPropertyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  value?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  title?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  number?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  identifier?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  comment?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  year?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  author?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  subsOnly?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  searchString?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  lawBlockId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => LawBlockRelationFilter, {
    nullable: true
  })
  LawBlock?: LawBlockRelationFilter | undefined;
}
