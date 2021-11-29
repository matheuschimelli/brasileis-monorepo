import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MembershipCreateManyUserInput } from "../inputs/MembershipCreateManyUserInput";

@TypeGraphQL.InputType("MembershipCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class MembershipCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [MembershipCreateManyUserInput], {
    nullable: false
  })
  data!: MembershipCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
