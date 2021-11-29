import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { LawBlock } from "../models/LawBlock";

@TypeGraphQL.ObjectType("BlockProperty", {
  isAbstract: true
})
export class BlockProperty {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  value?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  number?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  comment?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  year?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  author?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  membersOnly!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  searchString?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lawBlockId!: string;

  LawBlock?: LawBlock;
}
