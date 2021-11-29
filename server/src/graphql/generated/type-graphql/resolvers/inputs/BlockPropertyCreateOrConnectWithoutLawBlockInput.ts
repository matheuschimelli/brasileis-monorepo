import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlockPropertyCreateWithoutLawBlockInput } from "../inputs/BlockPropertyCreateWithoutLawBlockInput";
import { BlockPropertyWhereUniqueInput } from "../inputs/BlockPropertyWhereUniqueInput";

@TypeGraphQL.InputType("BlockPropertyCreateOrConnectWithoutLawBlockInput", {
  isAbstract: true
})
export class BlockPropertyCreateOrConnectWithoutLawBlockInput {
  @TypeGraphQL.Field(_type => BlockPropertyWhereUniqueInput, {
    nullable: false
  })
  where!: BlockPropertyWhereUniqueInput;

  @TypeGraphQL.Field(_type => BlockPropertyCreateWithoutLawBlockInput, {
    nullable: false
  })
  create!: BlockPropertyCreateWithoutLawBlockInput;
}
