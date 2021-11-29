import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LawBlockOrderByWithAggregationInput } from "../../../inputs/LawBlockOrderByWithAggregationInput";
import { LawBlockScalarWhereWithAggregatesInput } from "../../../inputs/LawBlockScalarWhereWithAggregatesInput";
import { LawBlockWhereInput } from "../../../inputs/LawBlockWhereInput";
import { LawBlockScalarFieldEnum } from "../../../../enums/LawBlockScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByLawBlockArgs {
  @TypeGraphQL.Field(_type => LawBlockWhereInput, {
    nullable: true
  })
  where?: LawBlockWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LawBlockOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: LawBlockOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LawBlockScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "type" | "createdAt" | "updatedAt" | "lawBlockId">;

  @TypeGraphQL.Field(_type => LawBlockScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: LawBlockScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
