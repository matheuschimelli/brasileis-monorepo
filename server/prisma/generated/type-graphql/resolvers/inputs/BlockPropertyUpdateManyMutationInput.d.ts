import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class BlockPropertyUpdateManyMutationInput {
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
}
