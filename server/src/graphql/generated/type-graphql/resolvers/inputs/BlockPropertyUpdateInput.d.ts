import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { LawBlockUpdateOneRequiredWithoutPropertiesInput } from "../inputs/LawBlockUpdateOneRequiredWithoutPropertiesInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class BlockPropertyUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    value?: NullableStringFieldUpdateOperationsInput | undefined;
    title?: NullableStringFieldUpdateOperationsInput | undefined;
    number?: NullableStringFieldUpdateOperationsInput | undefined;
    identifier?: NullableStringFieldUpdateOperationsInput | undefined;
    comment?: NullableStringFieldUpdateOperationsInput | undefined;
    year?: NullableIntFieldUpdateOperationsInput | undefined;
    author?: NullableStringFieldUpdateOperationsInput | undefined;
    membersOnly?: BoolFieldUpdateOperationsInput | undefined;
    searchString?: NullableStringFieldUpdateOperationsInput | undefined;
    LawBlock?: LawBlockUpdateOneRequiredWithoutPropertiesInput | undefined;
}
