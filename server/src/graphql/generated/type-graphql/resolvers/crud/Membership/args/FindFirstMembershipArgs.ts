import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MembershipOrderByWithRelationInput } from "../../../inputs/MembershipOrderByWithRelationInput";
import { MembershipWhereInput } from "../../../inputs/MembershipWhereInput";
import { MembershipWhereUniqueInput } from "../../../inputs/MembershipWhereUniqueInput";
import { MembershipScalarFieldEnum } from "../../../../enums/MembershipScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstMembershipArgs {
  @TypeGraphQL.Field(_type => MembershipWhereInput, {
    nullable: true
  })
  where?: MembershipWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MembershipOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MembershipOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MembershipWhereUniqueInput, {
    nullable: true
  })
  cursor?: MembershipWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MembershipScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "isActive" | "startDate" | "endDate" | "stripeTransactionId" | "customerId" | "invoiceUrl" | "subscriptionId" | "receiptUrl" | "pdfInvoice" | "urlInvoice" | "createdAt" | "updatedAt" | "userId"> | undefined;
}
