import { NestedEnumBlockTypeFilter } from "../inputs/NestedEnumBlockTypeFilter";
import { NestedEnumBlockTypeWithAggregatesFilter } from "../inputs/NestedEnumBlockTypeWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumBlockTypeWithAggregatesFilter {
    equals?: "LAW" | "JURISPRUDENCE" | "ARTICLE" | "PARAGRAPH" | "INCISE" | "ALINEA" | "UNIQUE_PARAGRAPH" | "INFO" | "CODE" | "CONSTITUTION" | undefined;
    in?: Array<"LAW" | "JURISPRUDENCE" | "ARTICLE" | "PARAGRAPH" | "INCISE" | "ALINEA" | "UNIQUE_PARAGRAPH" | "INFO" | "CODE" | "CONSTITUTION"> | undefined;
    notIn?: Array<"LAW" | "JURISPRUDENCE" | "ARTICLE" | "PARAGRAPH" | "INCISE" | "ALINEA" | "UNIQUE_PARAGRAPH" | "INFO" | "CODE" | "CONSTITUTION"> | undefined;
    not?: NestedEnumBlockTypeWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumBlockTypeFilter | undefined;
    _max?: NestedEnumBlockTypeFilter | undefined;
}
