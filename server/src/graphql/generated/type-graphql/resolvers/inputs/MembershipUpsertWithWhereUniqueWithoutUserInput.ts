import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MembershipCreateWithoutUserInput } from "../inputs/MembershipCreateWithoutUserInput";
import { MembershipUpdateWithoutUserInput } from "../inputs/MembershipUpdateWithoutUserInput";
import { MembershipWhereUniqueInput } from "../inputs/MembershipWhereUniqueInput";

@TypeGraphQL.InputType("MembershipUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class MembershipUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => MembershipWhereUniqueInput, {
    nullable: false
  })
  where!: MembershipWhereUniqueInput;

  @TypeGraphQL.Field(_type => MembershipUpdateWithoutUserInput, {
    nullable: false
  })
  update!: MembershipUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => MembershipCreateWithoutUserInput, {
    nullable: false
  })
  create!: MembershipCreateWithoutUserInput;
}
