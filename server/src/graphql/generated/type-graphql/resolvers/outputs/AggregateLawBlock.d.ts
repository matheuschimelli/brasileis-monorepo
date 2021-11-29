import { LawBlockCountAggregate } from "../outputs/LawBlockCountAggregate";
import { LawBlockMaxAggregate } from "../outputs/LawBlockMaxAggregate";
import { LawBlockMinAggregate } from "../outputs/LawBlockMinAggregate";
export declare class AggregateLawBlock {
    _count: LawBlockCountAggregate | null;
    _min: LawBlockMinAggregate | null;
    _max: LawBlockMaxAggregate | null;
}
