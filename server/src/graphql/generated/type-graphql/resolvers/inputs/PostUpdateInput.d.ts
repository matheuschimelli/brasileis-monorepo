import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutPostsInput } from "../inputs/UserUpdateOneRequiredWithoutPostsInput";
export declare class PostUpdateInput {
    title?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    content?: NullableStringFieldUpdateOperationsInput | undefined;
    published?: BoolFieldUpdateOperationsInput | undefined;
    User?: UserUpdateOneRequiredWithoutPostsInput | undefined;
}
