import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumBlockTypeFieldUpdateOperationsInput } from "../inputs/EnumBlockTypeFieldUpdateOperationsInput";
import { LawBlockUpdateManyWithoutLawBlockInput } from "../inputs/LawBlockUpdateManyWithoutLawBlockInput";
import { LawBlockUpdateOneWithoutContentInput } from "../inputs/LawBlockUpdateOneWithoutContentInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class LawBlockUpdateWithoutPropertiesInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    type?: EnumBlockTypeFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    content?: LawBlockUpdateManyWithoutLawBlockInput | undefined;
    LawBlock?: LawBlockUpdateOneWithoutContentInput | undefined;
}
