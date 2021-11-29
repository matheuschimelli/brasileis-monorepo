import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlockPropertyCreateNestedOneWithoutLawBlockInput } from "../inputs/BlockPropertyCreateNestedOneWithoutLawBlockInput";
import { LawBlockCreateNestedManyWithoutLawBlockInput } from "../inputs/LawBlockCreateNestedManyWithoutLawBlockInput";
import { LawBlockCreateNestedOneWithoutContentInput } from "../inputs/LawBlockCreateNestedOneWithoutContentInput";
import { BlockType } from "../../enums/BlockType";

@TypeGraphQL.InputType("LawBlockCreateInput", {
  isAbstract: true
})
export class LawBlockCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => BlockType, {
    nullable: true
  })
  type?: "LAW" | "JURISPRUDENCE" | "ARTICLE" | "PARAGRAPH" | "INCISE" | "ALINEA" | "UNIQUE_PARAGRAPH" | "INFO" | "CODE" | "CONSTITUTION" | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => LawBlockCreateNestedManyWithoutLawBlockInput, {
    nullable: true
  })
  content?: LawBlockCreateNestedManyWithoutLawBlockInput | undefined;

  @TypeGraphQL.Field(_type => BlockPropertyCreateNestedOneWithoutLawBlockInput, {
    nullable: true
  })
  properties?: BlockPropertyCreateNestedOneWithoutLawBlockInput | undefined;

  @TypeGraphQL.Field(_type => LawBlockCreateNestedOneWithoutContentInput, {
    nullable: true
  })
  LawBlock?: LawBlockCreateNestedOneWithoutContentInput | undefined;
}
