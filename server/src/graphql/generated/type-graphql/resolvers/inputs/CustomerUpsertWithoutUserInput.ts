import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateWithoutUserInput } from "../inputs/CustomerCreateWithoutUserInput";
import { CustomerUpdateWithoutUserInput } from "../inputs/CustomerUpdateWithoutUserInput";

@TypeGraphQL.InputType("CustomerUpsertWithoutUserInput", {
  isAbstract: true
})
export class CustomerUpsertWithoutUserInput {
  @TypeGraphQL.Field(_type => CustomerUpdateWithoutUserInput, {
    nullable: false
  })
  update!: CustomerUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => CustomerCreateWithoutUserInput, {
    nullable: false
  })
  create!: CustomerCreateWithoutUserInput;
}
