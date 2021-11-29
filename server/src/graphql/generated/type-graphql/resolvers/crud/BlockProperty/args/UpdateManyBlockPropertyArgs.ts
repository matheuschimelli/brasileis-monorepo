import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BlockPropertyUpdateManyMutationInput } from "../../../inputs/BlockPropertyUpdateManyMutationInput";
import { BlockPropertyWhereInput } from "../../../inputs/BlockPropertyWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyBlockPropertyArgs {
  @TypeGraphQL.Field(_type => BlockPropertyUpdateManyMutationInput, {
    nullable: false
  })
  data!: BlockPropertyUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => BlockPropertyWhereInput, {
    nullable: true
  })
  where?: BlockPropertyWhereInput | undefined;
}
