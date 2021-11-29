import { Post } from "../models/Post";
import { Profile } from "../models/Profile";
import { UserCount } from "../resolvers/outputs/UserCount";
export declare class User {
    id: string;
    name?: string | null;
    email: string;
    username?: string | null;
    tokens: string[];
    admin: boolean;
    googleId: string;
    createdAt: Date;
    updatedAt: Date;
    role: "USER" | "MEMBER" | "ADMIN";
    profile?: Profile | null;
    posts?: Post[];
    _count: UserCount;
}
