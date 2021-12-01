import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubscriptionOrderByWithAggregationInput } from "../../../inputs/SubscriptionOrderByWithAggregationInput";
import { SubscriptionScalarWhereWithAggregatesInput } from "../../../inputs/SubscriptionScalarWhereWithAggregatesInput";
import { SubscriptionWhereInput } from "../../../inputs/SubscriptionWhereInput";
import { SubscriptionScalarFieldEnum } from "../../../../enums/SubscriptionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySubscriptionArgs {
  @TypeGraphQL.Field(_type => SubscriptionWhereInput, {
    nullable: true
  })
  where?: SubscriptionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SubscriptionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "isActive" | "stripePaymentId" | "stripeTransactionId" | "stripeSubscriptionId" | "customerId" | "startDate" | "endDate" | "quantity" | "cancelAtPeriodEnd" | "cancelAt" | "canceledAt" | "created" | "endedAt" | "trialStart" | "trialEnd" | "invoiceUrl" | "receiptUrl" | "pdfInvoice" | "urlInvoice" | "createdAt" | "updatedAt" | "userId">;

  @TypeGraphQL.Field(_type => SubscriptionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SubscriptionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}