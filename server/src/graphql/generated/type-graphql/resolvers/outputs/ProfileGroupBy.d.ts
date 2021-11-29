import { ProfileCountAggregate } from "../outputs/ProfileCountAggregate";
import { ProfileMaxAggregate } from "../outputs/ProfileMaxAggregate";
import { ProfileMinAggregate } from "../outputs/ProfileMinAggregate";
export declare class ProfileGroupBy {
    id: string;
    bio: string | null;
    picture: string | null;
    userId: string;
    _count: ProfileCountAggregate | null;
    _min: ProfileMinAggregate | null;
    _max: ProfileMaxAggregate | null;
}
