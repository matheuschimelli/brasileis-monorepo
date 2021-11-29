import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumBlockTypeFieldUpdateOperationsInput } from "../inputs/EnumBlockTypeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class LawBlockUpdateManyMutationInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    type?: EnumBlockTypeFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
