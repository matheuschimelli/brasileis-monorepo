import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BlockPropertyCreateInput } from "../../../inputs/BlockPropertyCreateInput";
import { BlockPropertyUpdateInput } from "../../../inputs/BlockPropertyUpdateInput";
import { BlockPropertyWhereUniqueInput } from "../../../inputs/BlockPropertyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertBlockPropertyArgs {
  @TypeGraphQL.Field(_type => BlockPropertyWhereUniqueInput, {
    nullable: false
  })
  where!: BlockPropertyWhereUniqueInput;

  @TypeGraphQL.Field(_type => BlockPropertyCreateInput, {
    nullable: false
  })
  create!: BlockPropertyCreateInput;

  @TypeGraphQL.Field(_type => BlockPropertyUpdateInput, {
    nullable: false
  })
  update!: BlockPropertyUpdateInput;
}
