import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutSubscriptionsInput } from "../inputs/UserCreateWithoutSubscriptionsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutSubscriptionsInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutSubscriptionsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutSubscriptionsInput, {
    nullable: false
  })
  create!: UserCreateWithoutSubscriptionsInput;
}
