import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateOrConnectWithoutUserInput } from "../inputs/CustomerCreateOrConnectWithoutUserInput";
import { CustomerCreateWithoutUserInput } from "../inputs/CustomerCreateWithoutUserInput";
import { CustomerUpdateWithoutUserInput } from "../inputs/CustomerUpdateWithoutUserInput";
import { CustomerUpsertWithoutUserInput } from "../inputs/CustomerUpsertWithoutUserInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerUpdateOneWithoutUserInput", {
  isAbstract: true
})
export class CustomerUpdateOneWithoutUserInput {
  @TypeGraphQL.Field(_type => CustomerCreateWithoutUserInput, {
    nullable: true
  })
  create?: CustomerCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpsertWithoutUserInput, {
    nullable: true
  })
  upsert?: CustomerUpsertWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpdateWithoutUserInput, {
    nullable: true
  })
  update?: CustomerUpdateWithoutUserInput | undefined;
}
