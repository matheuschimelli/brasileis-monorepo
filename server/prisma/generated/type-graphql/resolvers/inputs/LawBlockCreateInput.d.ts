import { BlockPropertyCreateNestedOneWithoutLawBlockInput } from "../inputs/BlockPropertyCreateNestedOneWithoutLawBlockInput";
import { LawBlockCreateNestedManyWithoutLawBlockInput } from "../inputs/LawBlockCreateNestedManyWithoutLawBlockInput";
import { LawBlockCreateNestedOneWithoutContentInput } from "../inputs/LawBlockCreateNestedOneWithoutContentInput";
export declare class LawBlockCreateInput {
    id?: string | undefined;
    type?: "LAW" | "JURISPRUDENCE" | "ARTICLE" | "PARAGRAPH" | "INCISE" | "ALINEA" | "UNIQUE_PARAGRAPH" | "INFO" | "CODE" | "CONSTITUTION" | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    content?: LawBlockCreateNestedManyWithoutLawBlockInput | undefined;
    properties?: BlockPropertyCreateNestedOneWithoutLawBlockInput | undefined;
    LawBlock?: LawBlockCreateNestedOneWithoutContentInput | undefined;
}
