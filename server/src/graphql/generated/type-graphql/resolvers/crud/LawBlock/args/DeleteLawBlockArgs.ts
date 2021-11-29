import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LawBlockWhereUniqueInput } from "../../../inputs/LawBlockWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteLawBlockArgs {
  @TypeGraphQL.Field(_type => LawBlockWhereUniqueInput, {
    nullable: false
  })
  where!: LawBlockWhereUniqueInput;
}
