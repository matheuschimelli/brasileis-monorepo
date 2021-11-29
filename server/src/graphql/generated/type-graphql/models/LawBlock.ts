import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { BlockProperty } from "../models/BlockProperty";
import { BlockType } from "../enums/BlockType";
import { LawBlockCount } from "../resolvers/outputs/LawBlockCount";

@TypeGraphQL.ObjectType("LawBlock", {
  isAbstract: true
})
export class LawBlock {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => BlockType, {
    nullable: false
  })
  type!: "LAW" | "JURISPRUDENCE" | "ARTICLE" | "PARAGRAPH" | "INCISE" | "ALINEA" | "UNIQUE_PARAGRAPH" | "INFO" | "CODE" | "CONSTITUTION";

  content?: LawBlock[];

  properties?: BlockProperty | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  LawBlock?: LawBlock | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lawBlockId?: string | null;

  @TypeGraphQL.Field(_type => LawBlockCount, {
    nullable: false
  })
  _count!: LawBlockCount;
}
