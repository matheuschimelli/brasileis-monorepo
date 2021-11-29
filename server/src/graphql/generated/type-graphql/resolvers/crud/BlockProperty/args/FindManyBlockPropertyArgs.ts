import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BlockPropertyOrderByWithRelationInput } from "../../../inputs/BlockPropertyOrderByWithRelationInput";
import { BlockPropertyWhereInput } from "../../../inputs/BlockPropertyWhereInput";
import { BlockPropertyWhereUniqueInput } from "../../../inputs/BlockPropertyWhereUniqueInput";
import { BlockPropertyScalarFieldEnum } from "../../../../enums/BlockPropertyScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyBlockPropertyArgs {
  @TypeGraphQL.Field(_type => BlockPropertyWhereInput, {
    nullable: true
  })
  where?: BlockPropertyWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BlockPropertyOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: BlockPropertyOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => BlockPropertyWhereUniqueInput, {
    nullable: true
  })
  cursor?: BlockPropertyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [BlockPropertyScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "value" | "title" | "number" | "identifier" | "comment" | "year" | "author" | "membersOnly" | "searchString" | "lawBlockId"> | undefined;
}
