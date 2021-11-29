import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LawBlockCreateManyLawBlockInput } from "../inputs/LawBlockCreateManyLawBlockInput";

@TypeGraphQL.InputType("LawBlockCreateManyLawBlockInputEnvelope", {
  isAbstract: true
})
export class LawBlockCreateManyLawBlockInputEnvelope {
  @TypeGraphQL.Field(_type => [LawBlockCreateManyLawBlockInput], {
    nullable: false
  })
  data!: LawBlockCreateManyLawBlockInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
