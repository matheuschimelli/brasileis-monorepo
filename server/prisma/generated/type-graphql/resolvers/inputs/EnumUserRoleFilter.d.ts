import { NestedEnumUserRoleFilter } from "../inputs/NestedEnumUserRoleFilter";
export declare class EnumUserRoleFilter {
    equals?: "USER" | "MEMBER" | "ADMIN" | undefined;
    in?: Array<"USER" | "MEMBER" | "ADMIN"> | undefined;
    notIn?: Array<"USER" | "MEMBER" | "ADMIN"> | undefined;
    not?: NestedEnumUserRoleFilter | undefined;
}
