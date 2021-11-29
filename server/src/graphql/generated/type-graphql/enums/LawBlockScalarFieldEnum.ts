import * as TypeGraphQL from "type-graphql";

export enum LawBlockScalarFieldEnum {
  id = "id",
  type = "type",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  lawBlockId = "lawBlockId"
}
TypeGraphQL.registerEnumType(LawBlockScalarFieldEnum, {
  name: "LawBlockScalarFieldEnum",
  description: undefined,
});
