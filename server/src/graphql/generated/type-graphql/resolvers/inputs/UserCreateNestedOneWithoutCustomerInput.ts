import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCustomerInput } from "../inputs/UserCreateOrConnectWithoutCustomerInput";
import { UserCreateWithoutCustomerInput } from "../inputs/UserCreateWithoutCustomerInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutCustomerInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutCustomerInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCustomerInput, {
    nullable: true
  })
  create?: UserCreateWithoutCustomerInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCustomerInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCustomerInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
