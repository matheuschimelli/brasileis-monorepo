import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MembershipScalarWhereInput } from "../inputs/MembershipScalarWhereInput";
import { MembershipUpdateManyMutationInput } from "../inputs/MembershipUpdateManyMutationInput";

@TypeGraphQL.InputType("MembershipUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class MembershipUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => MembershipScalarWhereInput, {
    nullable: false
  })
  where!: MembershipScalarWhereInput;

  @TypeGraphQL.Field(_type => MembershipUpdateManyMutationInput, {
    nullable: false
  })
  data!: MembershipUpdateManyMutationInput;
}
