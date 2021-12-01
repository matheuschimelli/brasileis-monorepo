import * as TypeGraphQL from "type-graphql";

export enum BlockPropertyScalarFieldEnum {
  id = "id",
  value = "value",
  title = "title",
  number = "number",
  identifier = "identifier",
  comment = "comment",
  year = "year",
  author = "author",
  subsOnly = "subsOnly",
  searchString = "searchString",
  lawBlockId = "lawBlockId"
}
TypeGraphQL.registerEnumType(BlockPropertyScalarFieldEnum, {
  name: "BlockPropertyScalarFieldEnum",
  description: undefined,
});
