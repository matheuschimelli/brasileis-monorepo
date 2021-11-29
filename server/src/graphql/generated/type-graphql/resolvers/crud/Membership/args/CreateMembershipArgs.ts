import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MembershipCreateInput } from "../../../inputs/MembershipCreateInput";

@TypeGraphQL.ArgsType()
export class CreateMembershipArgs {
  @TypeGraphQL.Field(_type => MembershipCreateInput, {
    nullable: false
  })
  data!: MembershipCreateInput;
}
