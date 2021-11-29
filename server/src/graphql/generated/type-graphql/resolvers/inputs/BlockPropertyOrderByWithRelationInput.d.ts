import { LawBlockOrderByWithRelationInput } from "../inputs/LawBlockOrderByWithRelationInput";
export declare class BlockPropertyOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    value?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    number?: "asc" | "desc" | undefined;
    identifier?: "asc" | "desc" | undefined;
    comment?: "asc" | "desc" | undefined;
    year?: "asc" | "desc" | undefined;
    author?: "asc" | "desc" | undefined;
    membersOnly?: "asc" | "desc" | undefined;
    searchString?: "asc" | "desc" | undefined;
    lawBlockId?: "asc" | "desc" | undefined;
    LawBlock?: LawBlockOrderByWithRelationInput | undefined;
}
