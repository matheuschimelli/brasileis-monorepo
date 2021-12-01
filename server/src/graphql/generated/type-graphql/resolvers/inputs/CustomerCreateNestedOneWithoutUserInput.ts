import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateOrConnectWithoutUserInput } from "../inputs/CustomerCreateOrConnectWithoutUserInput";
import { CustomerCreateWithoutUserInput } from "../inputs/CustomerCreateWithoutUserInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerCreateNestedOneWithoutUserInput", {
  isAbstract: true
})
export class CustomerCreateNestedOneWithoutUserInput {
  @TypeGraphQL.Field(_type => CustomerCreateWithoutUserInput, {
    nullable: true
  })
  create?: CustomerCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomerWhereUniqueInput | undefined;
}
