import { BlockPropertyAvgAggregate } from "../outputs/BlockPropertyAvgAggregate";
import { BlockPropertyCountAggregate } from "../outputs/BlockPropertyCountAggregate";
import { BlockPropertyMaxAggregate } from "../outputs/BlockPropertyMaxAggregate";
import { BlockPropertyMinAggregate } from "../outputs/BlockPropertyMinAggregate";
import { BlockPropertySumAggregate } from "../outputs/BlockPropertySumAggregate";
export declare class AggregateBlockProperty {
    _count: BlockPropertyCountAggregate | null;
    _avg: BlockPropertyAvgAggregate | null;
    _sum: BlockPropertySumAggregate | null;
    _min: BlockPropertyMinAggregate | null;
    _max: BlockPropertyMaxAggregate | null;
}
