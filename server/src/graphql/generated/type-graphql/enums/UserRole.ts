import * as TypeGraphQL from "type-graphql";

export enum UserRole {
  USER = "USER",
  MEMBER = "MEMBER",
  ADMIN = "ADMIN"
}
TypeGraphQL.registerEnumType(UserRole, {
  name: "UserRole",
  description: undefined,
});
