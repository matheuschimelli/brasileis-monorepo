import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LawBlockUpdateInput } from "../../../inputs/LawBlockUpdateInput";
import { LawBlockWhereUniqueInput } from "../../../inputs/LawBlockWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateLawBlockArgs {
  @TypeGraphQL.Field(_type => LawBlockUpdateInput, {
    nullable: false
  })
  data!: LawBlockUpdateInput;

  @TypeGraphQL.Field(_type => LawBlockWhereUniqueInput, {
    nullable: false
  })
  where!: LawBlockWhereUniqueInput;
}
