import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("MembershipMinAggregate", {
  isAbstract: true
})
export class MembershipMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isActive!: boolean | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  startDate!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  endDate!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  stripeTransactionId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customerId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  invoiceUrl!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  subscriptionId!: string | null;

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
