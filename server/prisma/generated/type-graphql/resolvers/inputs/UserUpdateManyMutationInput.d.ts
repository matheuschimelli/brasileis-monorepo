import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumUserRoleFieldUpdateOperationsInput } from "../inputs/EnumUserRoleFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdatetokensInput } from "../inputs/UserUpdatetokensInput";
export declare class UserUpdateManyMutationInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    username?: NullableStringFieldUpdateOperationsInput | undefined;
    admin?: BoolFieldUpdateOperationsInput | undefined;
    googleId?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    role?: EnumUserRoleFieldUpdateOperationsInput | undefined;
    tokens?: UserUpdatetokensInput | undefined;
}
