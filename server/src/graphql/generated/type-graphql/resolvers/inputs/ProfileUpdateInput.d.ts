import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutProfileInput } from "../inputs/UserUpdateOneRequiredWithoutProfileInput";
export declare class ProfileUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    bio?: NullableStringFieldUpdateOperationsInput | undefined;
    picture?: NullableStringFieldUpdateOperationsInput | undefined;
    User?: UserUpdateOneRequiredWithoutProfileInput | undefined;
}
