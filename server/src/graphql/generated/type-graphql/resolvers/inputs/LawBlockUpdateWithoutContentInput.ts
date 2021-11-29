import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlockPropertyUpdateOneWithoutLawBlockInput } from "../inputs/BlockPropertyUpdateOneWithoutLawBlockInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumBlockTypeFieldUpdateOperationsInput } from "../inputs/EnumBlockTypeFieldUpdateOperationsInput";
import { LawBlockUpdateOneWithoutContentInput } from "../inputs/LawBlockUpdateOneWithoutContentInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("LawBlockUpdateWithoutContentInput", {
  isAbstract: true
})
export class LawBlockUpdateWithoutContentInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumBlockTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: EnumBlockTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BlockPropertyUpdateOneWithoutLawBlockInput, {
    nullable: true
  })
  properties?: BlockPropertyUpdateOneWithoutLawBlockInput | undefined;

  @TypeGraphQL.Field(_type => LawBlockUpdateOneWithoutContentInput, {
    nullable: true
  })
  LawBlock?: LawBlockUpdateOneWithoutContentInput | undefined;
}
