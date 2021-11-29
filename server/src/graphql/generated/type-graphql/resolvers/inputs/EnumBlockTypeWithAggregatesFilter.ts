import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumBlockTypeFilter } from "../inputs/NestedEnumBlockTypeFilter";
import { NestedEnumBlockTypeWithAggregatesFilter } from "../inputs/NestedEnumBlockTypeWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { BlockType } from "../../enums/BlockType";

@TypeGraphQL.InputType("EnumBlockTypeWithAggregatesFilter", {
  isAbstract: true
})
export class EnumBlockTypeWithAggregatesFilter {
  @TypeGraphQL.Field(_type => BlockType, {
    nullable: true
  })
  equals?: "LAW" | "JURISPRUDENCE" | "ARTICLE" | "PARAGRAPH" | "INCISE" | "ALINEA" | "UNIQUE_PARAGRAPH" | "INFO" | "CODE" | "CONSTITUTION" | undefined;

  @TypeGraphQL.Field(_type => [BlockType], {
    nullable: true
  })
  in?: Array<"LAW" | "JURISPRUDENCE" | "ARTICLE" | "PARAGRAPH" | "INCISE" | "ALINEA" | "UNIQUE_PARAGRAPH" | "INFO" | "CODE" | "CONSTITUTION"> | undefined;

  @TypeGraphQL.Field(_type => [BlockType], {
    nullable: true
  })
  notIn?: Array<"LAW" | "JURISPRUDENCE" | "ARTICLE" | "PARAGRAPH" | "INCISE" | "ALINEA" | "UNIQUE_PARAGRAPH" | "INFO" | "CODE" | "CONSTITUTION"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumBlockTypeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumBlockTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumBlockTypeFilter, {
    nullable: true
  })
  _min?: NestedEnumBlockTypeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumBlockTypeFilter, {
    nullable: true
  })
  _max?: NestedEnumBlockTypeFilter | undefined;
}
