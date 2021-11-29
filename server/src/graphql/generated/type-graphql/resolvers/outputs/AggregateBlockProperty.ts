import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlockPropertyAvgAggregate } from "../outputs/BlockPropertyAvgAggregate";
import { BlockPropertyCountAggregate } from "../outputs/BlockPropertyCountAggregate";
import { BlockPropertyMaxAggregate } from "../outputs/BlockPropertyMaxAggregate";
import { BlockPropertyMinAggregate } from "../outputs/BlockPropertyMinAggregate";
import { BlockPropertySumAggregate } from "../outputs/BlockPropertySumAggregate";

@TypeGraphQL.ObjectType("AggregateBlockProperty", {
  isAbstract: true
})
export class AggregateBlockProperty {
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
