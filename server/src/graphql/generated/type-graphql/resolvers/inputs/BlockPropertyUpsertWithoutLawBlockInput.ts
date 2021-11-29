import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlockPropertyCreateWithoutLawBlockInput } from "../inputs/BlockPropertyCreateWithoutLawBlockInput";
import { BlockPropertyUpdateWithoutLawBlockInput } from "../inputs/BlockPropertyUpdateWithoutLawBlockInput";

@TypeGraphQL.InputType("BlockPropertyUpsertWithoutLawBlockInput", {
  isAbstract: true
})
export class BlockPropertyUpsertWithoutLawBlockInput {
  @TypeGraphQL.Field(_type => BlockPropertyUpdateWithoutLawBlockInput, {
    nullable: false
  })
  update!: BlockPropertyUpdateWithoutLawBlockInput;

  @TypeGraphQL.Field(_type => BlockPropertyCreateWithoutLawBlockInput, {
    nullable: false
  })
  create!: BlockPropertyCreateWithoutLawBlockInput;
}
