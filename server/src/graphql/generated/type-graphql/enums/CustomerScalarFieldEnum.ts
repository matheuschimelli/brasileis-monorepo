import * as TypeGraphQL from "type-graphql";

export enum CustomerScalarFieldEnum {
  id = "id",
  stripeId = "stripeId",
  userId = "userId"
}
TypeGraphQL.registerEnumType(CustomerScalarFieldEnum, {
  name: "CustomerScalarFieldEnum",
  description: undefined,
});
