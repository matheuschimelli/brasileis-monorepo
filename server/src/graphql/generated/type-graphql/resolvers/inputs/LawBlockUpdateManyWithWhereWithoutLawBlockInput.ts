import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LawBlockScalarWhereInput } from "../inputs/LawBlockScalarWhereInput";
import { LawBlockUpdateManyMutationInput } from "../inputs/LawBlockUpdateManyMutationInput";

@TypeGraphQL.InputType("LawBlockUpdateManyWithWhereWithoutLawBlockInput", {
  isAbstract: true
})
export class LawBlockUpdateManyWithWhereWithoutLawBlockInput {
  @TypeGraphQL.Field(_type => LawBlockScalarWhereInput, {
    nullable: false
  })
  where!: LawBlockScalarWhereInput;

  @TypeGraphQL.Field(_type => LawBlockUpdateManyMutationInput, {
    nullable: false
  })
  data!: LawBlockUpdateManyMutationInput;
}
