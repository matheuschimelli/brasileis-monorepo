import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionWhereInput } from "../inputs/SubscriptionWhereInput";

@TypeGraphQL.InputType("SubscriptionListRelationFilter", {
  isAbstract: true
})
export class SubscriptionListRelationFilter {
  @TypeGraphQL.Field(_type => SubscriptionWhereInput, {
    nullable: true
  })
  every?: SubscriptionWhereInput | undefined;

  @TypeGraphQL.Field(_type => SubscriptionWhereInput, {
    nullable: true
  })
  some?: SubscriptionWhereInput | undefined;

  @TypeGraphQL.Field(_type => SubscriptionWhereInput, {
    nullable: true
  })
  none?: SubscriptionWhereInput | undefined;
}
