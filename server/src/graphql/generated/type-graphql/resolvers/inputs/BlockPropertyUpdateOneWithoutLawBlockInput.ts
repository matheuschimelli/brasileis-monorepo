import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlockPropertyCreateOrConnectWithoutLawBlockInput } from "../inputs/BlockPropertyCreateOrConnectWithoutLawBlockInput";
import { BlockPropertyCreateWithoutLawBlockInput } from "../inputs/BlockPropertyCreateWithoutLawBlockInput";
import { BlockPropertyUpdateWithoutLawBlockInput } from "../inputs/BlockPropertyUpdateWithoutLawBlockInput";
import { BlockPropertyUpsertWithoutLawBlockInput } from "../inputs/BlockPropertyUpsertWithoutLawBlockInput";
import { BlockPropertyWhereUniqueInput } from "../inputs/BlockPropertyWhereUniqueInput";

@TypeGraphQL.InputType("BlockPropertyUpdateOneWithoutLawBlockInput", {
  isAbstract: true
})
export class BlockPropertyUpdateOneWithoutLawBlockInput {
  @TypeGraphQL.Field(_type => BlockPropertyCreateWithoutLawBlockInput, {
    nullable: true
  })
  create?: BlockPropertyCreateWithoutLawBlockInput | undefined;

  @TypeGraphQL.Field(_type => BlockPropertyCreateOrConnectWithoutLawBlockInput, {
    nullable: true
  })
  connectOrCreate?: BlockPropertyCreateOrConnectWithoutLawBlockInput | undefined;

  @TypeGraphQL.Field(_type => BlockPropertyUpsertWithoutLawBlockInput, {
    nullable: true
  })
  upsert?: BlockPropertyUpsertWithoutLawBlockInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => BlockPropertyWhereUniqueInput, {
    nullable: true
  })
  connect?: BlockPropertyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => BlockPropertyUpdateWithoutLawBlockInput, {
    nullable: true
  })
  update?: BlockPropertyUpdateWithoutLawBlockInput | undefined;
}
