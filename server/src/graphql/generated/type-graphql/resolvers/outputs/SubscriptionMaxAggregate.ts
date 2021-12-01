import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("SubscriptionMaxAggregate", {
  isAbstract: true
})
export class SubscriptionMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isActive!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  stripePaymentId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  stripeTransactionId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  stripeSubscriptionId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customerId!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  startDate!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  endDate!: Date | null;

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
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userId!: string | null;
}
