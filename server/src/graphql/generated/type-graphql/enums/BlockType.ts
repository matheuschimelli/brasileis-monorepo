import * as TypeGraphQL from "type-graphql";

export enum BlockType {
  LAW = "LAW",
  JURISPRUDENCE = "JURISPRUDENCE",
  ARTICLE = "ARTICLE",
  PARAGRAPH = "PARAGRAPH",
  INCISE = "INCISE",
  ALINEA = "ALINEA",
  UNIQUE_PARAGRAPH = "UNIQUE_PARAGRAPH",
  INFO = "INFO",
  CODE = "CODE",
  CONSTITUTION = "CONSTITUTION"
}
TypeGraphQL.registerEnumType(BlockType, {
  name: "BlockType",
  description: undefined,
});
