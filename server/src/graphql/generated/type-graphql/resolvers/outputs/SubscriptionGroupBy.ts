import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionAvgAggregate } from "../outputs/SubscriptionAvgAggregate";
import { SubscriptionCountAggregate } from "../outputs/SubscriptionCountAggregate";
import { SubscriptionMaxAggregate } from "../outputs/SubscriptionMaxAggregate";
import { SubscriptionMinAggregate } from "../outputs/SubscriptionMinAggregate";
import { SubscriptionSumAggregate } from "../outputs/SubscriptionSumAggregate";

@TypeGraphQL.ObjectType("SubscriptionGroupBy", {
  isAbstract: true
})
export class SubscriptionGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isActive!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  stripePaymentId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  stripeTransactionId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  stripeSubscriptionId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  customerId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  startDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  endDate!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  quantity!: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  cancelAtPeriodEnd!: boolean | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  cancelAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  canceledAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  endedAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  trialStart!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  trialEnd!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  invoiceUrl!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  receiptUrl!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  pdfInvoice!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  urlInvoice!: string | null;

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

  @TypeGraphQL.Field(_type => SubscriptionCountAggregate, {
    nullable: true
  })
  _count!: SubscriptionCountAggregate | null;

  @TypeGraphQL.Field(_type => SubscriptionAvgAggregate, {
    nullable: true
  })
  _avg!: SubscriptionAvgAggregate | null;

  @TypeGraphQL.Field(_type => SubscriptionSumAggregate, {
    nullable: true
  })
  _sum!: SubscriptionSumAggregate | null;

  @TypeGraphQL.Field(_type => SubscriptionMinAggregate, {
    nullable: true
  })
  _min!: SubscriptionMinAggregate | null;

  @TypeGraphQL.Field(_type => SubscriptionMaxAggregate, {
    nullable: true
  })
  _max!: SubscriptionMaxAggregate | null;
}
