import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCustomerInput } from "../inputs/UserCreateOrConnectWithoutCustomerInput";
import { UserCreateWithoutCustomerInput } from "../inputs/UserCreateWithoutCustomerInput";
import { UserUpdateWithoutCustomerInput } from "../inputs/UserUpdateWithoutCustomerInput";
import { UserUpsertWithoutCustomerInput } from "../inputs/UserUpsertWithoutCustomerInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutCustomerInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutCustomerInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCustomerInput, {
    nullable: true
  })
  create?: UserCreateWithoutCustomerInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCustomerInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCustomerInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutCustomerInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutCustomerInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutCustomerInput, {
    nullable: true
  })
  update?: UserUpdateWithoutCustomerInput | undefined;
}
