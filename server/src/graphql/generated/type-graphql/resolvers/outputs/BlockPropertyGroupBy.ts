import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlockPropertyAvgAggregate } from "../outputs/BlockPropertyAvgAggregate";
import { BlockPropertyCountAggregate } from "../outputs/BlockPropertyCountAggregate";
import { BlockPropertyMaxAggregate } from "../outputs/BlockPropertyMaxAggregate";
import { BlockPropertyMinAggregate } from "../outputs/BlockPropertyMinAggregate";
import { BlockPropertySumAggregate } from "../outputs/BlockPropertySumAggregate";

@TypeGraphQL.ObjectType("BlockPropertyGroupBy", {
  isAbstract: true
})
export class BlockPropertyGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  value!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  number!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  comment!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  year!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  author!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  membersOnly!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  searchString!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lawBlockId!: string;

  @TypeGraphQL.Field(_type => BlockPropertyCountAggregate, {
    nullable: true
  })
  _count!: BlockPropertyCountAggregate | null;

  @TypeGraphQL.Field(_type => BlockPropertyAvgAggregate, {
    nullable: true
  })
  _avg!: BlockPropertyAvgAggregate | null;

  @TypeGraphQL.Field(_type => BlockPropertySumAggregate, {
    nullable: true
  })
  _sum!: BlockPropertySumAggregate | null;

  @TypeGraphQL.Field(_type => BlockPropertyMinAggregate, {
    nullable: true
  })
  _min!: BlockPropertyMinAggregate | null;

  @TypeGraphQL.Field(_type => BlockPropertyMaxAggregate, {
    nullable: true
  })
  _max!: BlockPropertyMaxAggregate | null;
}
