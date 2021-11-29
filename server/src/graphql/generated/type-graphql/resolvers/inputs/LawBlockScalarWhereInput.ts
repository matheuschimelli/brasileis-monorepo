import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumBlockTypeFilter } from "../inputs/EnumBlockTypeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("LawBlockScalarWhereInput", {
  isAbstract: true
})
export class LawBlockScalarWhereInput {
  @TypeGraphQL.Field(_type => [LawBlockScalarWhereInput], {
    nullable: true
  })
  AND?: LawBlockScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LawBlockScalarWhereInput], {
    nullable: true
  })
  OR?: LawBlockScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LawBlockScalarWhereInput], {
    nullable: true
  })
  NOT?: LawBlockScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumBlockTypeFilter, {
    nullable: true
  })
  type?: EnumBlockTypeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  lawBlockId?: StringNullableFilter | undefined;
}
