import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BlockPropertyCreateInput } from "../../../inputs/BlockPropertyCreateInput";

@TypeGraphQL.ArgsType()
export class CreateBlockPropertyArgs {
  @TypeGraphQL.Field(_type => BlockPropertyCreateInput, {
    nullable: false
  })
  data!: BlockPropertyCreateInput;
}
