import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Membership } from "../models/Membership";
import { Post } from "../models/Post";
import { Profile } from "../models/Profile";
import { UserRole } from "../enums/UserRole";
import { UserCount } from "../resolvers/outputs/UserCount";

@TypeGraphQL.ObjectType("User", {
  isAbstract: true
})
export class User {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  username?: string | null;

  @TypeGraphQL.Field(_type => [String], {
    nullable: false
  })
  tokens!: string[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  admin!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  googleId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => UserRole, {
    nullable: false
  })
  role!: "USER" | "MEMBER" | "ADMIN";

  profile?: Profile | null;

  posts?: Post[];

  memberships?: Membership[];

  @TypeGraphQL.Field(_type => UserCount, {
    nullable: false
  })
  _count!: UserCount;
}
