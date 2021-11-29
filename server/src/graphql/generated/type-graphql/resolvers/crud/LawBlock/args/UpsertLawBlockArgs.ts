import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LawBlockCreateInput } from "../../../inputs/LawBlockCreateInput";
import { LawBlockUpdateInput } from "../../../inputs/LawBlockUpdateInput";
import { LawBlockWhereUniqueInput } from "../../../inputs/LawBlockWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertLawBlockArgs {
  @TypeGraphQL.Field(_type => LawBlockWhereUniqueInput, {
    nullable: false
  })
  where!: LawBlockWhereUniqueInput;

  @TypeGraphQL.Field(_type => LawBlockCreateInput, {
    nullable: false
  })
  create!: LawBlockCreateInput;

  @TypeGraphQL.Field(_type => LawBlockUpdateInput, {
    nullable: false
  })
  update!: LawBlockUpdateInput;
}
