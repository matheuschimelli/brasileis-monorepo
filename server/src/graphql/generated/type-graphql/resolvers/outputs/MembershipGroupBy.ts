import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MembershipCountAggregate } from "../outputs/MembershipCountAggregate";
import { MembershipMaxAggregate } from "../outputs/MembershipMaxAggregate";
import { MembershipMinAggregate } from "../outputs/MembershipMinAggregate";

@TypeGraphQL.ObjectType("MembershipGroupBy", {
  isAbstract: true
})
export class MembershipGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isActive!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  startDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  endDate!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  stripeTransactionId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  customerId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  invoiceUrl!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  subscriptionId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  receiptUrl!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  pdfInvoice!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  urlInvoice!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

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
