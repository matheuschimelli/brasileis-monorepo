import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MembershipCreateManyInput } from "../../../inputs/MembershipCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMembershipArgs {
  @TypeGraphQL.Field(_type => [MembershipCreateManyInput], {
    nullable: false
  })
  data!: MembershipCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
