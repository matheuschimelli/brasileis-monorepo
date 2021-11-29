import { BlockProperty } from "../models/BlockProperty";
import { LawBlockCount } from "../resolvers/outputs/LawBlockCount";
export declare class LawBlock {
    id: string;
    type: "LAW" | "JURISPRUDENCE" | "ARTICLE" | "PARAGRAPH" | "INCISE" | "ALINEA" | "UNIQUE_PARAGRAPH" | "INFO" | "CODE" | "CONSTITUTION";
    content?: LawBlock[];
    properties?: BlockProperty | null;
    createdAt: Date;
    updatedAt: Date;
    LawBlock?: LawBlock | null;
    lawBlockId?: string | null;
    _count: LawBlockCount;
}
