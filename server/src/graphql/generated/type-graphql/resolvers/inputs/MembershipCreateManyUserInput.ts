import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("MembershipCreateManyUserInput", {
  isAbstract: true
})
export class MembershipCreateManyUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isActive?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  startDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  endDate!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  stripeTransactionId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  customerId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  invoiceUrl!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  subscriptionId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  receiptUrl!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  pdfInvoice!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  urlInvoice!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
