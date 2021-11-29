import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BlockPropertyCreateManyInput } from "../../../inputs/BlockPropertyCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyBlockPropertyArgs {
  @TypeGraphQL.Field(_type => [BlockPropertyCreateManyInput], {
    nullable: false
  })
  data!: BlockPropertyCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
