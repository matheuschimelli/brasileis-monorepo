import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumBlockTypeWithAggregatesFilter } from "../inputs/EnumBlockTypeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("LawBlockScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class LawBlockScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [LawBlockScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: LawBlockScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LawBlockScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: LawBlockScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LawBlockScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: LawBlockScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumBlockTypeWithAggregatesFilter, {
    nullable: true
  })
  type?: EnumBlockTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  lawBlockId?: StringNullableWithAggregatesFilter | undefined;
}
