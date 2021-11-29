import { LawBlockCreateNestedManyWithoutLawBlockInput } from "../inputs/LawBlockCreateNestedManyWithoutLawBlockInput";
import { LawBlockCreateNestedOneWithoutContentInput } from "../inputs/LawBlockCreateNestedOneWithoutContentInput";
export declare class LawBlockCreateWithoutPropertiesInput {
    id?: string | undefined;
    type?: "LAW" | "JURISPRUDENCE" | "ARTICLE" | "PARAGRAPH" | "INCISE" | "ALINEA" | "UNIQUE_PARAGRAPH" | "INFO" | "CODE" | "CONSTITUTION" | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    content?: LawBlockCreateNestedManyWithoutLawBlockInput | undefined;
    LawBlock?: LawBlockCreateNestedOneWithoutContentInput | undefined;
}
