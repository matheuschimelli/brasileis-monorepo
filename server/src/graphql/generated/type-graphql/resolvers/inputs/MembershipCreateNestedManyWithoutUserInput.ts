import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MembershipCreateManyUserInputEnvelope } from "../inputs/MembershipCreateManyUserInputEnvelope";
import { MembershipCreateOrConnectWithoutUserInput } from "../inputs/MembershipCreateOrConnectWithoutUserInput";
import { MembershipCreateWithoutUserInput } from "../inputs/MembershipCreateWithoutUserInput";
import { MembershipWhereUniqueInput } from "../inputs/MembershipWhereUniqueInput";

@TypeGraphQL.InputType("MembershipCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class MembershipCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [MembershipCreateWithoutUserInput], {
    nullable: true
  })
  create?: MembershipCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MembershipCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: MembershipCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => MembershipCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: MembershipCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MembershipWhereUniqueInput], {
    nullable: true
  })
  connect?: MembershipWhereUniqueInput[] | undefined;
}
