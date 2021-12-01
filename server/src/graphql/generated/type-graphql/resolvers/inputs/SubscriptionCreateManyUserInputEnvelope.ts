import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionCreateManyUserInput } from "../inputs/SubscriptionCreateManyUserInput";

@TypeGraphQL.InputType("SubscriptionCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class SubscriptionCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [SubscriptionCreateManyUserInput], {
    nullable: false
  })
  data!: SubscriptionCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
