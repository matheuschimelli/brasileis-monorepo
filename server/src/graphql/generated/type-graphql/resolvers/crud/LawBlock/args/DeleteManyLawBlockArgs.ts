import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LawBlockWhereInput } from "../../../inputs/LawBlockWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyLawBlockArgs {
  @TypeGraphQL.Field(_type => LawBlockWhereInput, {
    nullable: true
  })
  where?: LawBlockWhereInput | undefined;
}
