import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionAvgOrderByAggregateInput } from "../inputs/SubscriptionAvgOrderByAggregateInput";
import { SubscriptionCountOrderByAggregateInput } from "../inputs/SubscriptionCountOrderByAggregateInput";
import { SubscriptionMaxOrderByAggregateInput } from "../inputs/SubscriptionMaxOrderByAggregateInput";
import { SubscriptionMinOrderByAggregateInput } from "../inputs/SubscriptionMinOrderByAggregateInput";
import { SubscriptionSumOrderByAggregateInput } from "../inputs/SubscriptionSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SubscriptionOrderByWithAggregationInput", {
  isAbstract: true
})
export class SubscriptionOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  isActive?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  stripePaymentId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  stripeTransactionId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  stripeSubscriptionId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  customerId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  startDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  endDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  quantity?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cancelAtPeriodEnd?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cancelAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  canceledAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  endedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  trialStart?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  trialEnd?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  invoiceUrl?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  receiptUrl?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  pdfInvoice?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  urlInvoice?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SubscriptionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SubscriptionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SubscriptionAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SubscriptionAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SubscriptionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SubscriptionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SubscriptionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SubscriptionMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SubscriptionSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SubscriptionSumOrderByAggregateInput | undefined;
}
