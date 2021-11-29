import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  id = "id",
  name = "name",
  email = "email",
  username = "username",
  tokens = "tokens",
  admin = "admin",
  googleId = "googleId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  role = "role"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
