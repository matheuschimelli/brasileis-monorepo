import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlockPropertyCreateOrConnectWithoutLawBlockInput } from "../inputs/BlockPropertyCreateOrConnectWithoutLawBlockInput";
import { BlockPropertyCreateWithoutLawBlockInput } from "../inputs/BlockPropertyCreateWithoutLawBlockInput";
import { BlockPropertyWhereUniqueInput } from "../inputs/BlockPropertyWhereUniqueInput";

@TypeGraphQL.InputType("BlockPropertyCreateNestedOneWithoutLawBlockInput", {
  isAbstract: true
})
export class BlockPropertyCreateNestedOneWithoutLawBlockInput {
  @TypeGraphQL.Field(_type => BlockPropertyCreateWithoutLawBlockInput, {
    nullable: true
  })
  create?: BlockPropertyCreateWithoutLawBlockInput | undefined;

  @TypeGraphQL.Field(_type => BlockPropertyCreateOrConnectWithoutLawBlockInput, {
    nullable: true
  })
  connectOrCreate?: BlockPropertyCreateOrConnectWithoutLawBlockInput | undefined;

  @TypeGraphQL.Field(_type => BlockPropertyWhereUniqueInput, {
    nullable: true
  })
  connect?: BlockPropertyWhereUniqueInput | undefined;
}
