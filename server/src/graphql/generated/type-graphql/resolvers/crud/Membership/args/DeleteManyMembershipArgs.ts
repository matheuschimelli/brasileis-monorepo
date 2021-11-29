import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MembershipWhereInput } from "../../../inputs/MembershipWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMembershipArgs {
  @TypeGraphQL.Field(_type => MembershipWhereInput, {
    nullable: true
  })
  where?: MembershipWhereInput | undefined;
}
