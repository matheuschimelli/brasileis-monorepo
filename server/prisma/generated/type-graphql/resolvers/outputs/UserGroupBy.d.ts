import { UserCountAggregate } from "../outputs/UserCountAggregate";
import { UserMaxAggregate } from "../outputs/UserMaxAggregate";
import { UserMinAggregate } from "../outputs/UserMinAggregate";
export declare class UserGroupBy {
    id: string;
    name: string | null;
    email: string;
    username: string | null;
    tokens: string[] | null;
    admin: boolean;
    googleId: string;
    createdAt: Date;
    updatedAt: Date;
    role: "USER" | "MEMBER" | "ADMIN";
    _count: UserCountAggregate | null;
    _min: UserMinAggregate | null;
    _max: UserMaxAggregate | null;
}
