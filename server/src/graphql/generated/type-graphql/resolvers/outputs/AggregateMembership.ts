import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MembershipCountAggregate } from "../outputs/MembershipCountAggregate";
import { MembershipMaxAggregate } from "../outputs/MembershipMaxAggregate";
import { MembershipMinAggregate } from "../outputs/MembershipMinAggregate";

@TypeGraphQL.ObjectType("AggregateMembership", {
  isAbstract: true
})
export class AggregateMembership {
  @TypeGraphQL.Field(_type => MembershipCountAggregate, {
    nullable: true
  })
  _count!: MembershipCountAggregate | null;

  @TypeGraphQL.Field(_type => MembershipMinAggregate, {
    nullable: true
  })
  _min!: MembershipMinAggregate | null;

  @TypeGraphQL.Field(_type => MembershipMaxAggregate, {
    nullable: true
  })
  _max!: MembershipMaxAggregate | null;
}
