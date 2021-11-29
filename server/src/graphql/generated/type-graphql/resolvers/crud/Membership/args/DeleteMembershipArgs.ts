import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MembershipWhereUniqueInput } from "../../../inputs/MembershipWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteMembershipArgs {
  @TypeGraphQL.Field(_type => MembershipWhereUniqueInput, {
    nullable: false
  })
  where!: MembershipWhereUniqueInput;
}
