import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlockType } from "../../enums/BlockType";

@TypeGraphQL.InputType("EnumBlockTypeFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumBlockTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => BlockType, {
    nullable: true
  })
  set?: "LAW" | "JURISPRUDENCE" | "ARTICLE" | "PARAGRAPH" | "INCISE" | "ALINEA" | "UNIQUE_PARAGRAPH" | "INFO" | "CODE" | "CONSTITUTION" | undefined;
}
