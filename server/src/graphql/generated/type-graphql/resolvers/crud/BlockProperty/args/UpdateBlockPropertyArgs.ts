import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BlockPropertyUpdateInput } from "../../../inputs/BlockPropertyUpdateInput";
import { BlockPropertyWhereUniqueInput } from "../../../inputs/BlockPropertyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateBlockPropertyArgs {
  @TypeGraphQL.Field(_type => BlockPropertyUpdateInput, {
    nullable: false
  })
  data!: BlockPropertyUpdateInput;

  @TypeGraphQL.Field(_type => BlockPropertyWhereUniqueInput, {
    nullable: false
  })
  where!: BlockPropertyWhereUniqueInput;
}
