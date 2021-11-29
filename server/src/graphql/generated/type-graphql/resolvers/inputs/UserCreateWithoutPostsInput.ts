import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MembershipCreateNestedManyWithoutUserInput } from "../inputs/MembershipCreateNestedManyWithoutUserInput";
import { ProfileCreateNestedOneWithoutUserInput } from "../inputs/ProfileCreateNestedOneWithoutUserInput";
import { UserCreatetokensInput } from "../inputs/UserCreatetokensInput";
import { UserRole } from "../../enums/UserRole";

@TypeGraphQL.InputType("UserCreateWithoutPostsInput", {
  isAbstract: true
})
export class UserCreateWithoutPostsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  username?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  admin?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  googleId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserRole, {
    nullable: true
  })
  role?: "USER" | "MEMBER" | "ADMIN" | undefined;

  @TypeGraphQL.Field(_type => UserCreatetokensInput, {
    nullable: true
  })
  tokens?: UserCreatetokensInput | undefined;

  @TypeGraphQL.Field(_type => ProfileCreateNestedOneWithoutUserInput, {
    nullable: true
  })
  profile?: ProfileCreateNestedOneWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => MembershipCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  memberships?: MembershipCreateNestedManyWithoutUserInput | undefined;
}
