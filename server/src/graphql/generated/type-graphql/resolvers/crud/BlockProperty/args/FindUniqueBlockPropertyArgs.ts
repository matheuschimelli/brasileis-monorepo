import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BlockPropertyWhereUniqueInput } from "../../../inputs/BlockPropertyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueBlockPropertyArgs {
  @TypeGraphQL.Field(_type => BlockPropertyWhereUniqueInput, {
    nullable: false
  })
  where!: BlockPropertyWhereUniqueInput;
}
