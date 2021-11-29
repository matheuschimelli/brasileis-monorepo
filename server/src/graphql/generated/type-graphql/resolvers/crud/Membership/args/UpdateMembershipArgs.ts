import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MembershipUpdateInput } from "../../../inputs/MembershipUpdateInput";
import { MembershipWhereUniqueInput } from "../../../inputs/MembershipWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateMembershipArgs {
  @TypeGraphQL.Field(_type => MembershipUpdateInput, {
    nullable: false
  })
  data!: MembershipUpdateInput;

  @TypeGraphQL.Field(_type => MembershipWhereUniqueInput, {
    nullable: false
  })
  where!: MembershipWhereUniqueInput;
}
