import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MembershipCreateWithoutUserInput } from "../inputs/MembershipCreateWithoutUserInput";
import { MembershipWhereUniqueInput } from "../inputs/MembershipWhereUniqueInput";

@TypeGraphQL.InputType("MembershipCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class MembershipCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => MembershipWhereUniqueInput, {
    nullable: false
  })
  where!: MembershipWhereUniqueInput;

  @TypeGraphQL.Field(_type => MembershipCreateWithoutUserInput, {
    nullable: false
  })
  create!: MembershipCreateWithoutUserInput;
}
