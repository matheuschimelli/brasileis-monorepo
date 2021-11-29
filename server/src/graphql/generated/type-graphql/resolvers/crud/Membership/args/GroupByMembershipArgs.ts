import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MembershipOrderByWithAggregationInput } from "../../../inputs/MembershipOrderByWithAggregationInput";
import { MembershipScalarWhereWithAggregatesInput } from "../../../inputs/MembershipScalarWhereWithAggregatesInput";
import { MembershipWhereInput } from "../../../inputs/MembershipWhereInput";
import { MembershipScalarFieldEnum } from "../../../../enums/MembershipScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMembershipArgs {
  @TypeGraphQL.Field(_type => MembershipWhereInput, {
    nullable: true
  })
  where?: MembershipWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MembershipOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MembershipOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MembershipScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "isActive" | "startDate" | "endDate" | "stripeTransactionId" | "customerId" | "invoiceUrl" | "subscriptionId" | "receiptUrl" | "pdfInvoice" | "urlInvoice" | "createdAt" | "updatedAt" | "userId">;

  @TypeGraphQL.Field(_type => MembershipScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MembershipScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
