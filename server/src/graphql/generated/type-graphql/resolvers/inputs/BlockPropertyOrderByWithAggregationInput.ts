import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlockPropertyAvgOrderByAggregateInput } from "../inputs/BlockPropertyAvgOrderByAggregateInput";
import { BlockPropertyCountOrderByAggregateInput } from "../inputs/BlockPropertyCountOrderByAggregateInput";
import { BlockPropertyMaxOrderByAggregateInput } from "../inputs/BlockPropertyMaxOrderByAggregateInput";
import { BlockPropertyMinOrderByAggregateInput } from "../inputs/BlockPropertyMinOrderByAggregateInput";
import { BlockPropertySumOrderByAggregateInput } from "../inputs/BlockPropertySumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BlockPropertyOrderByWithAggregationInput", {
  isAbstract: true
})
export class BlockPropertyOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  value?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  number?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  comment?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  year?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  author?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  membersOnly?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  searchString?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  lawBlockId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => BlockPropertyCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: BlockPropertyCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BlockPropertyAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: BlockPropertyAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BlockPropertyMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: BlockPropertyMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BlockPropertyMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: BlockPropertyMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BlockPropertySumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: BlockPropertySumOrderByAggregateInput | undefined;
}
