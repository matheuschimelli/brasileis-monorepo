import { LawBlock } from "../models/LawBlock";
export declare class BlockProperty {
    id: string;
    value?: string | null;
    title?: string | null;
    number?: string | null;
    identifier?: string | null;
    comment?: string | null;
    year?: number | null;
    author?: string | null;
    membersOnly: boolean;
    searchString?: string | null;
    lawBlockId: string;
    LawBlock?: LawBlock;
}
