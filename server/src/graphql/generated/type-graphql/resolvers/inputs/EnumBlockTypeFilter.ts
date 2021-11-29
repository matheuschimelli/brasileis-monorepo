import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumBlockTypeFilter } from "../inputs/NestedEnumBlockTypeFilter";
import { BlockType } from "../../enums/BlockType";

@TypeGraphQL.InputType("EnumBlockTypeFilter", {
  isAbstract: true
})
export class EnumBlockTypeFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumBlockTypeFilter, {
    nullable: true
  })
  not?: NestedEnumBlockTypeFilter | undefined;
}
