import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutCustomerInput } from "../inputs/UserCreateWithoutCustomerInput";
import { UserUpdateWithoutCustomerInput } from "../inputs/UserUpdateWithoutCustomerInput";

@TypeGraphQL.InputType("UserUpsertWithoutCustomerInput", {
  isAbstract: true
})
export class UserUpsertWithoutCustomerInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutCustomerInput, {
    nullable: false
  })
  update!: UserUpdateWithoutCustomerInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutCustomerInput, {
    nullable: false
  })
  create!: UserCreateWithoutCustomerInput;
}
