import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutMembershipsInput } from "../inputs/UserCreateOrConnectWithoutMembershipsInput";
import { UserCreateWithoutMembershipsInput } from "../inputs/UserCreateWithoutMembershipsInput";
import { UserUpdateWithoutMembershipsInput } from "../inputs/UserUpdateWithoutMembershipsInput";
import { UserUpsertWithoutMembershipsInput } from "../inputs/UserUpsertWithoutMembershipsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutMembershipsInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutMembershipsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutMembershipsInput, {
    nullable: true
  })
  create?: UserCreateWithoutMembershipsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutMembershipsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutMembershipsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutMembershipsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutMembershipsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutMembershipsInput | undefined;
}
