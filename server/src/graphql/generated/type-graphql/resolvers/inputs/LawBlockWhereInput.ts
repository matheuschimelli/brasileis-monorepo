import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlockPropertyRelationFilter } from "../inputs/BlockPropertyRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumBlockTypeFilter } from "../inputs/EnumBlockTypeFilter";
import { LawBlockListRelationFilter } from "../inputs/LawBlockListRelationFilter";
import { LawBlockRelationFilter } from "../inputs/LawBlockRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("LawBlockWhereInput", {
  isAbstract: true
})
export class LawBlockWhereInput {
  @TypeGraphQL.Field(_type => [LawBlockWhereInput], {
    nullable: true
  })
  AND?: LawBlockWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LawBlockWhereInput], {
    nullable: true
  })
  OR?: LawBlockWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LawBlockWhereInput], {
    nullable: true
  })
  NOT?: LawBlockWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumBlockTypeFilter, {
    nullable: true
  })
  type?: EnumBlockTypeFilter | undefined;

  @TypeGraphQL.Field(_type => LawBlockListRelationFilter, {
    nullable: true
  })
  content?: LawBlockListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BlockPropertyRelationFilter, {
    nullable: true
  })
  properties?: BlockPropertyRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => LawBlockRelationFilter, {
    nullable: true
  })
  LawBlock?: LawBlockRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  lawBlockId?: StringNullableFilter | undefined;
}
