import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutMembershipsInput } from "../inputs/UserCreateWithoutMembershipsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutMembershipsInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutMembershipsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutMembershipsInput, {
    nullable: false
  })
  create!: UserCreateWithoutMembershipsInput;
}
