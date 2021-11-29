import { BlockPropertyCreateNestedOneWithoutLawBlockInput } from "../inputs/BlockPropertyCreateNestedOneWithoutLawBlockInput";
import { LawBlockCreateNestedOneWithoutContentInput } from "../inputs/LawBlockCreateNestedOneWithoutContentInput";
export declare class LawBlockCreateWithoutContentInput {
    id?: string | undefined;
    type?: "LAW" | "JURISPRUDENCE" | "ARTICLE" | "PARAGRAPH" | "INCISE" | "ALINEA" | "UNIQUE_PARAGRAPH" | "INFO" | "CODE" | "CONSTITUTION" | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    properties?: BlockPropertyCreateNestedOneWithoutLawBlockInput | undefined;
    LawBlock?: LawBlockCreateNestedOneWithoutContentInput | undefined;
}
