import { BlockPropertyUpdateOneWithoutLawBlockInput } from "../inputs/BlockPropertyUpdateOneWithoutLawBlockInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumBlockTypeFieldUpdateOperationsInput } from "../inputs/EnumBlockTypeFieldUpdateOperationsInput";
import { LawBlockUpdateOneWithoutContentInput } from "../inputs/LawBlockUpdateOneWithoutContentInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class LawBlockUpdateWithoutContentInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    type?: EnumBlockTypeFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    properties?: BlockPropertyUpdateOneWithoutLawBlockInput | undefined;
    LawBlock?: LawBlockUpdateOneWithoutContentInput | undefined;
}
