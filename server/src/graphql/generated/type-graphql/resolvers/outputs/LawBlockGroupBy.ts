import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LawBlockCountAggregate } from "../outputs/LawBlockCountAggregate";
import { LawBlockMaxAggregate } from "../outputs/LawBlockMaxAggregate";
import { LawBlockMinAggregate } from "../outputs/LawBlockMinAggregate";
import { BlockType } from "../../enums/BlockType";

@TypeGraphQL.ObjectType("LawBlockGroupBy", {
  isAbstract: true
})
export class LawBlockGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => BlockType, {
    nullable: false
  })
  type!: "LAW" | "JURISPRUDENCE" | "ARTICLE" | "PARAGRAPH" | "INCISE" | "ALINEA" | "UNIQUE_PARAGRAPH" | "INFO" | "CODE" | "CONSTITUTION";

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lawBlockId!: string | null;

  @TypeGraphQL.Field(_type => LawBlockCountAggregate, {
    nullable: true
  })
  _count!: LawBlockCountAggregate | null;

  @TypeGraphQL.Field(_type => LawBlockMinAggregate, {
    nullable: true
  })
  _min!: LawBlockMinAggregate | null;

  @TypeGraphQL.Field(_type => LawBlockMaxAggregate, {
    nullable: true
  })
  _max!: LawBlockMaxAggregate | null;
}
