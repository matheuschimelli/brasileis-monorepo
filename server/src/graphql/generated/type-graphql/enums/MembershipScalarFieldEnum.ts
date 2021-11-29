import * as TypeGraphQL from "type-graphql";

export enum MembershipScalarFieldEnum {
  id = "id",
  isActive = "isActive",
  startDate = "startDate",
  endDate = "endDate",
  stripeTransactionId = "stripeTransactionId",
  customerId = "customerId",
  invoiceUrl = "invoiceUrl",
  subscriptionId = "subscriptionId",
  receiptUrl = "receiptUrl",
  pdfInvoice = "pdfInvoice",
  urlInvoice = "urlInvoice",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  userId = "userId"
}
TypeGraphQL.registerEnumType(MembershipScalarFieldEnum, {
  name: "MembershipScalarFieldEnum",
  description: undefined,
});
