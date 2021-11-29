import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BlockPropertyWhereInput } from "../../../inputs/BlockPropertyWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyBlockPropertyArgs {
  @TypeGraphQL.Field(_type => BlockPropertyWhereInput, {
    nullable: true
  })
  where?: BlockPropertyWhereInput | undefined;
}
