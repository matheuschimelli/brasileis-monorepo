import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutSubscriptionsInput } from "../inputs/UserCreateWithoutSubscriptionsInput";
import { UserUpdateWithoutSubscriptionsInput } from "../inputs/UserUpdateWithoutSubscriptionsInput";

@TypeGraphQL.InputType("UserUpsertWithoutSubscriptionsInput", {
  isAbstract: true
})
export class UserUpsertWithoutSubscriptionsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutSubscriptionsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutSubscriptionsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutSubscriptionsInput, {
    nullable: false
  })
  create!: UserCreateWithoutSubscriptionsInput;
}
