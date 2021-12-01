import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("SubscriptionCreateManyInput", {
  isAbstract: true
})
export class SubscriptionCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isActive?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  stripePaymentId?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  stripeTransactionId?: string | undefined;

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
  quantity?: number | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  cancelAtPeriodEnd?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  cancelAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  canceledAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  endedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  trialStart?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  trialEnd?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  invoiceUrl?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  receiptUrl?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  pdfInvoice?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  urlInvoice?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;
}
