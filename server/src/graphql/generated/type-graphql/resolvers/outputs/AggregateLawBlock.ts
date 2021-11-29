import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LawBlockCountAggregate } from "../outputs/LawBlockCountAggregate";
import { LawBlockMaxAggregate } from "../outputs/LawBlockMaxAggregate";
import { LawBlockMinAggregate } from "../outputs/LawBlockMinAggregate";

@TypeGraphQL.ObjectType("AggregateLawBlock", {
  isAbstract: true
})
export class AggregateLawBlock {
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
