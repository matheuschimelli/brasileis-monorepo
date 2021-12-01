import * as TypeGraphQL from "type-graphql";

export enum UserRole {
  USER = "USER",
  PRO = "PRO",
  MEMBER = "MEMBER",
  ADMIN = "ADMIN"
}
TypeGraphQL.registerEnumType(UserRole, {
  name: "UserRole",
  description: undefined,
});
