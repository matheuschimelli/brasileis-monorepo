import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LawBlockCountOrderByAggregateInput } from "../inputs/LawBlockCountOrderByAggregateInput";
import { LawBlockMaxOrderByAggregateInput } from "../inputs/LawBlockMaxOrderByAggregateInput";
import { LawBlockMinOrderByAggregateInput } from "../inputs/LawBlockMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("LawBlockOrderByWithAggregationInput", {
  isAbstract: true
})
export class LawBlockOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

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
  lawBlockId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => LawBlockCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: LawBlockCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LawBlockMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: LawBlockMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LawBlockMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: LawBlockMinOrderByAggregateInput | undefined;
}
