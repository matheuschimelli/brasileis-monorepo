import { BlockPropertyAvgAggregate } from "../outputs/BlockPropertyAvgAggregate";
import { BlockPropertyCountAggregate } from "../outputs/BlockPropertyCountAggregate";
import { BlockPropertyMaxAggregate } from "../outputs/BlockPropertyMaxAggregate";
import { BlockPropertyMinAggregate } from "../outputs/BlockPropertyMinAggregate";
import { BlockPropertySumAggregate } from "../outputs/BlockPropertySumAggregate";
export declare class BlockPropertyGroupBy {
    id: string;
    value: string | null;
    title: string | null;
    number: string | null;
    identifier: string | null;
    comment: string | null;
    year: number | null;
    author: string | null;
    membersOnly: boolean;
    searchString: string | null;
    lawBlockId: string;
    _count: BlockPropertyCountAggregate | null;
    _avg: BlockPropertyAvgAggregate | null;
    _sum: BlockPropertySumAggregate | null;
    _min: BlockPropertyMinAggregate | null;
    _max: BlockPropertyMaxAggregate | null;
}
