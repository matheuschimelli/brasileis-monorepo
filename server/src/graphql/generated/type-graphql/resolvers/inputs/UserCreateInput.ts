import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateNestedOneWithoutUserInput } from "../inputs/CustomerCreateNestedOneWithoutUserInput";
import { PostCreateNestedManyWithoutUserInput } from "../inputs/PostCreateNestedManyWithoutUserInput";
import { ProfileCreateNestedOneWithoutUserInput } from "../inputs/ProfileCreateNestedOneWithoutUserInput";
import { SubscriptionCreateNestedManyWithoutUserInput } from "../inputs/SubscriptionCreateNestedManyWithoutUserInput";
import { UserCreatetokensInput } from "../inputs/UserCreatetokensInput";
import { UserRole } from "../../enums/UserRole";

@TypeGraphQL.InputType("UserCreateInput", {
  isAbstract: true
})
export class UserCreateInput {
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

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isPro?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserRole, {
    nullable: true
  })
  role?: "USER" | "PRO" | "MEMBER" | "ADMIN" | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreatetokensInput, {
    nullable: true
  })
  tokens?: UserCreatetokensInput | undefined;

  @TypeGraphQL.Field(_type => ProfileCreateNestedOneWithoutUserInput, {
    nullable: true
  })
  profile?: ProfileCreateNestedOneWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  posts?: PostCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => SubscriptionCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  subscriptions?: SubscriptionCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateNestedOneWithoutUserInput, {
    nullable: true
  })
  Customer?: CustomerCreateNestedOneWithoutUserInput | undefined;
}