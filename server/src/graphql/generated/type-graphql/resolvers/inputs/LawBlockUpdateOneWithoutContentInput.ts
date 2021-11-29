import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LawBlockCreateOrConnectWithoutContentInput } from "../inputs/LawBlockCreateOrConnectWithoutContentInput";
import { LawBlockCreateWithoutContentInput } from "../inputs/LawBlockCreateWithoutContentInput";
import { LawBlockUpdateWithoutContentInput } from "../inputs/LawBlockUpdateWithoutContentInput";
import { LawBlockUpsertWithoutContentInput } from "../inputs/LawBlockUpsertWithoutContentInput";
import { LawBlockWhereUniqueInput } from "../inputs/LawBlockWhereUniqueInput";

@TypeGraphQL.InputType("LawBlockUpdateOneWithoutContentInput", {
  isAbstract: true
})
export class LawBlockUpdateOneWithoutContentInput {
  @TypeGraphQL.Field(_type => LawBlockCreateWithoutContentInput, {
    nullable: true
  })
  create?: LawBlockCreateWithoutContentInput | undefined;

  @TypeGraphQL.Field(_type => LawBlockCreateOrConnectWithoutContentInput, {
    nullable: true
  })
  connectOrCreate?: LawBlockCreateOrConnectWithoutContentInput | undefined;

  @TypeGraphQL.Field(_type => LawBlockUpsertWithoutContentInput, {
    nullable: true
  })
  upsert?: LawBlockUpsertWithoutContentInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => LawBlockWhereUniqueInput, {
    nullable: true
  })
  connect?: LawBlockWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LawBlockUpdateWithoutContentInput, {
    nullable: true
  })
  update?: LawBlockUpdateWithoutContentInput | undefined;
}
