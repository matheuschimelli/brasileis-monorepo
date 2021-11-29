import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutMembershipsInput } from "../inputs/UserCreateWithoutMembershipsInput";
import { UserUpdateWithoutMembershipsInput } from "../inputs/UserUpdateWithoutMembershipsInput";

@TypeGraphQL.InputType("UserUpsertWithoutMembershipsInput", {
  isAbstract: true
})
export class UserUpsertWithoutMembershipsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutMembershipsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutMembershipsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutMembershipsInput, {
    nullable: false
  })
  create!: UserCreateWithoutMembershipsInput;
}
