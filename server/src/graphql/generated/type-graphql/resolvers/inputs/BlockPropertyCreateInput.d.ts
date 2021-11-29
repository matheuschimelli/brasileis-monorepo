import { LawBlockCreateNestedOneWithoutPropertiesInput } from "../inputs/LawBlockCreateNestedOneWithoutPropertiesInput";
export declare class BlockPropertyCreateInput {
    id?: string | undefined;
    value?: string | undefined;
    title?: string | undefined;
    number?: string | undefined;
    identifier?: string | undefined;
    comment?: string | undefined;
    year?: number | undefined;
    author?: string | undefined;
    membersOnly?: boolean | undefined;
    searchString?: string | undefined;
    LawBlock: LawBlockCreateNestedOneWithoutPropertiesInput;
}
