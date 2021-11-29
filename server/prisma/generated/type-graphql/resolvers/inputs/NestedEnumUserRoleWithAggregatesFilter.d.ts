import { NestedEnumUserRoleFilter } from "../inputs/NestedEnumUserRoleFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumUserRoleWithAggregatesFilter {
    equals?: "USER" | "MEMBER" | "ADMIN" | undefined;
    in?: Array<"USER" | "MEMBER" | "ADMIN"> | undefined;
    notIn?: Array<"USER" | "MEMBER" | "ADMIN"> | undefined;
    not?: NestedEnumUserRoleWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumUserRoleFilter | undefined;
    _max?: NestedEnumUserRoleFilter | undefined;
}
