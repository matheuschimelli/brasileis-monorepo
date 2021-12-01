import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LawBlockCreateNestedOneWithoutPropertiesInput } from "../inputs/LawBlockCreateNestedOneWithoutPropertiesInput";

@TypeGraphQL.InputType("BlockPropertyCreateInput", {
  isAbstract: true
})
export class BlockPropertyCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  value?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  number?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  comment?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  year?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  author?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  subsOnly?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  searchString?: string | undefined;

  @TypeGraphQL.Field(_type => LawBlockCreateNestedOneWithoutPropertiesInput, {
    nullable: false
  })
  LawBlock!: LawBlockCreateNestedOneWithoutPropertiesInput;
}
