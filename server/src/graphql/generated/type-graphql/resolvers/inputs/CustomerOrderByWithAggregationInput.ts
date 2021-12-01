import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCountOrderByAggregateInput } from "../inputs/CustomerCountOrderByAggregateInput";
import { CustomerMaxOrderByAggregateInput } from "../inputs/CustomerMaxOrderByAggregateInput";
import { CustomerMinOrderByAggregateInput } from "../inputs/CustomerMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CustomerOrderByWithAggregationInput", {
  isAbstract: true
})
export class CustomerOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  stripeId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CustomerCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CustomerCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CustomerMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CustomerMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CustomerMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CustomerMinOrderByAggregateInput | undefined;
}
