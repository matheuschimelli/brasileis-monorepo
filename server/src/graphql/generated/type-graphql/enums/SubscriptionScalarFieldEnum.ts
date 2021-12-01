import * as TypeGraphQL from "type-graphql";

export enum SubscriptionScalarFieldEnum {
  id = "id",
  isActive = "isActive",
  stripePaymentId = "stripePaymentId",
  stripeTransactionId = "stripeTransactionId",
  stripeSubscriptionId = "stripeSubscriptionId",
  customerId = "customerId",
  startDate = "startDate",
  endDate = "endDate",
  quantity = "quantity",
  cancelAtPeriodEnd = "cancelAtPeriodEnd",
  cancelAt = "cancelAt",
  canceledAt = "canceledAt",
  created = "created",
  endedAt = "endedAt",
  trialStart = "trialStart",
  trialEnd = "trialEnd",
  invoiceUrl = "invoiceUrl",
  receiptUrl = "receiptUrl",
  pdfInvoice = "pdfInvoice",
  urlInvoice = "urlInvoice",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  userId = "userId"
}
TypeGraphQL.registerEnumType(SubscriptionScalarFieldEnum, {
  name: "SubscriptionScalarFieldEnum",
  description: undefined,
});
