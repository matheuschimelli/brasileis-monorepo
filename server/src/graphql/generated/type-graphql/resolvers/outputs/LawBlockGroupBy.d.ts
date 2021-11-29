import { LawBlockCountAggregate } from "../outputs/LawBlockCountAggregate";
import { LawBlockMaxAggregate } from "../outputs/LawBlockMaxAggregate";
import { LawBlockMinAggregate } from "../outputs/LawBlockMinAggregate";
export declare class LawBlockGroupBy {
    id: string;
    type: "LAW" | "JURISPRUDENCE" | "ARTICLE" | "PARAGRAPH" | "INCISE" | "ALINEA" | "UNIQUE_PARAGRAPH" | "INFO" | "CODE" | "CONSTITUTION";
    createdAt: Date;
    updatedAt: Date;
    lawBlockId: string | null;
    _count: LawBlockCountAggregate | null;
    _min: LawBlockMinAggregate | null;
    _max: LawBlockMaxAggregate | null;
}
