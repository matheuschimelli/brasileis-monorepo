import { BlockPropertyCreateNestedOneWithoutLawBlockInput } from "../inputs/BlockPropertyCreateNestedOneWithoutLawBlockInput";
import { LawBlockCreateNestedManyWithoutLawBlockInput } from "../inputs/LawBlockCreateNestedManyWithoutLawBlockInput";
export declare class LawBlockCreateWithoutLawBlockInput {
    id?: string | undefined;
    type?: "LAW" | "JURISPRUDENCE" | "ARTICLE" | "PARAGRAPH" | "INCISE" | "ALINEA" | "UNIQUE_PARAGRAPH" | "INFO" | "CODE" | "CONSTITUTION" | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    content?: LawBlockCreateNestedManyWithoutLawBlockInput | undefined;
    properties?: BlockPropertyCreateNestedOneWithoutLawBlockInput | undefined;
}
