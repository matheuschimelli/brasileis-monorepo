import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MembershipUpdateWithoutUserInput } from "../inputs/MembershipUpdateWithoutUserInput";
import { MembershipWhereUniqueInput } from "../inputs/MembershipWhereUniqueInput";

@TypeGraphQL.InputType("MembershipUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class MembershipUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => MembershipWhereUniqueInput, {
    nullable: false
  })
  where!: MembershipWhereUniqueInput;

  @TypeGraphQL.Field(_type => MembershipUpdateWithoutUserInput, {
    nullable: false
  })
  data!: MembershipUpdateWithoutUserInput;
}
