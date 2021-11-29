import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MembershipCreateInput } from "../../../inputs/MembershipCreateInput";
import { MembershipUpdateInput } from "../../../inputs/MembershipUpdateInput";
import { MembershipWhereUniqueInput } from "../../../inputs/MembershipWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertMembershipArgs {
  @TypeGraphQL.Field(_type => MembershipWhereUniqueInput, {
    nullable: false
  })
  where!: MembershipWhereUniqueInput;

  @TypeGraphQL.Field(_type => MembershipCreateInput, {
    nullable: false
  })
  create!: MembershipCreateInput;

  @TypeGraphQL.Field(_type => MembershipUpdateInput, {
    nullable: false
  })
  update!: MembershipUpdateInput;
}
