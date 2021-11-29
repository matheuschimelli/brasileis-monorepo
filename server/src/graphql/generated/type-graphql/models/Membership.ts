import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("Membership", {
  isAbstract: true
})
export class Membership {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  user?: User;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isActive!: boolean;

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
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;
}
