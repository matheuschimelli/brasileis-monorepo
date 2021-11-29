import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LawBlockCreateInput } from "../../../inputs/LawBlockCreateInput";

@TypeGraphQL.ArgsType()
export class CreateLawBlockArgs {
  @TypeGraphQL.Field(_type => LawBlockCreateInput, {
    nullable: false
  })
  data!: LawBlockCreateInput;
}
