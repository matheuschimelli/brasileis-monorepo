import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LawBlockOrderByWithRelationInput } from "../../../inputs/LawBlockOrderByWithRelationInput";
import { LawBlockWhereInput } from "../../../inputs/LawBlockWhereInput";
import { LawBlockWhereUniqueInput } from "../../../inputs/LawBlockWhereUniqueInput";
import { LawBlockScalarFieldEnum } from "../../../../enums/LawBlockScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyLawBlockArgs {
  @TypeGraphQL.Field(_type => LawBlockWhereInput, {
    nullable: true
  })
  where?: LawBlockWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LawBlockOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: LawBlockOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => LawBlockWhereUniqueInput, {
    nullable: true
  })
  cursor?: LawBlockWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [LawBlockScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "type" | "createdAt" | "updatedAt" | "lawBlockId"> | undefined;
}