import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LawBlockCreateManyInput } from "../../../inputs/LawBlockCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyLawBlockArgs {
  @TypeGraphQL.Field(_type => [LawBlockCreateManyInput], {
    nullable: false
  })
  data!: LawBlockCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
