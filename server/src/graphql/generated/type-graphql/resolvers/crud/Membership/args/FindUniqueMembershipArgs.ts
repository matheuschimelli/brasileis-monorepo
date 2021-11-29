import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MembershipWhereUniqueInput } from "../../../inputs/MembershipWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMembershipArgs {
  @TypeGraphQL.Field(_type => MembershipWhereUniqueInput, {
    nullable: false
  })
  where!: MembershipWhereUniqueInput;
}
