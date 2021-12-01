import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutCustomerInput } from "../inputs/UserCreateNestedOneWithoutCustomerInput";

@TypeGraphQL.InputType("CustomerCreateInput", {
  isAbstract: true
})
export class CustomerCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  stripeId!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCustomerInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutCustomerInput;
}
