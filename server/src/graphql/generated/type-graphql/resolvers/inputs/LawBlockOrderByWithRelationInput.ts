import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlockPropertyOrderByWithRelationInput } from "../inputs/BlockPropertyOrderByWithRelationInput";
import { LawBlockOrderByRelationAggregateInput } from "../inputs/LawBlockOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("LawBlockOrderByWithRelationInput", {
  isAbstract: true
})
export class LawBlockOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => LawBlockOrderByRelationAggregateInput, {
    nullable: true
  })
  content?: LawBlockOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BlockPropertyOrderByWithRelationInput, {
    nullable: true
  })
  properties?: BlockPropertyOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => LawBlockOrderByWithRelationInput, {
    nullable: true
  })
  LawBlock?: LawBlockOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  lawBlockId?: "asc" | "desc" | undefined;
}
