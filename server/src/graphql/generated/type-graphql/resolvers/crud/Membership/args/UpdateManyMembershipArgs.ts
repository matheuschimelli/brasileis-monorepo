import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MembershipUpdateManyMutationInput } from "../../../inputs/MembershipUpdateManyMutationInput";
import { MembershipWhereInput } from "../../../inputs/MembershipWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMembershipArgs {
  @TypeGraphQL.Field(_type => MembershipUpdateManyMutationInput, {
    nullable: false
  })
  data!: MembershipUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MembershipWhereInput, {
    nullable: true
  })
  where?: MembershipWhereInput | undefined;
}
