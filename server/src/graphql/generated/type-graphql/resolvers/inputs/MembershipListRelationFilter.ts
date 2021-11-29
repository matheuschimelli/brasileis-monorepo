import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MembershipWhereInput } from "../inputs/MembershipWhereInput";

@TypeGraphQL.InputType("MembershipListRelationFilter", {
  isAbstract: true
})
export class MembershipListRelationFilter {
  @TypeGraphQL.Field(_type => MembershipWhereInput, {
    nullable: true
  })
  every?: MembershipWhereInput | undefined;

  @TypeGraphQL.Field(_type => MembershipWhereInput, {
    nullable: true
  })
  some?: MembershipWhereInput | undefined;

  @TypeGraphQL.Field(_type => MembershipWhereInput, {
    nullable: true
  })
  none?: MembershipWhereInput | undefined;
}
