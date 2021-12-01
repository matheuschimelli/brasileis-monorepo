import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BlockPropertyOrderByWithAggregationInput } from "../../../inputs/BlockPropertyOrderByWithAggregationInput";
import { BlockPropertyScalarWhereWithAggregatesInput } from "../../../inputs/BlockPropertyScalarWhereWithAggregatesInput";
import { BlockPropertyWhereInput } from "../../../inputs/BlockPropertyWhereInput";
import { BlockPropertyScalarFieldEnum } from "../../../../enums/BlockPropertyScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByBlockPropertyArgs {
  @TypeGraphQL.Field(_type => BlockPropertyWhereInput, {
    nullable: true
  })
  where?: BlockPropertyWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BlockPropertyOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: BlockPropertyOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlockPropertyScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "value" | "title" | "number" | "identifier" | "comment" | "year" | "author" | "subsOnly" | "searchString" | "lawBlockId">;

  @TypeGraphQL.Field(_type => BlockPropertyScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: BlockPropertyScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
