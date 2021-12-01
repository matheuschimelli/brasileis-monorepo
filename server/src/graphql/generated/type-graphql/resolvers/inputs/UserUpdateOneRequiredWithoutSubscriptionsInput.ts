import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutSubscriptionsInput } from "../inputs/UserCreateOrConnectWithoutSubscriptionsInput";
import { UserCreateWithoutSubscriptionsInput } from "../inputs/UserCreateWithoutSubscriptionsInput";
import { UserUpdateWithoutSubscriptionsInput } from "../inputs/UserUpdateWithoutSubscriptionsInput";
import { UserUpsertWithoutSubscriptionsInput } from "../inputs/UserUpsertWithoutSubscriptionsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutSubscriptionsInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutSubscriptionsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutSubscriptionsInput, {
    nullable: true
  })
  create?: UserCreateWithoutSubscriptionsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSubscriptionsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutSubscriptionsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutSubscriptionsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutSubscriptionsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutSubscriptionsInput | undefined;
}
