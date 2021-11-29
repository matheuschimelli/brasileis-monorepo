import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LawBlockUpdateManyMutationInput } from "../../../inputs/LawBlockUpdateManyMutationInput";
import { LawBlockWhereInput } from "../../../inputs/LawBlockWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyLawBlockArgs {
  @TypeGraphQL.Field(_type => LawBlockUpdateManyMutationInput, {
    nullable: false
  })
  data!: LawBlockUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => LawBlockWhereInput, {
    nullable: true
  })
  where?: LawBlockWhereInput | undefined;
}
