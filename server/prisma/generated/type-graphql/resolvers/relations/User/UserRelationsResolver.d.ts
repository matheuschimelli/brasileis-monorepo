import { Post } from "../../../models/Post";
import { Profile } from "../../../models/Profile";
import { User } from "../../../models/User";
import { UserPostsArgs } from "./args/UserPostsArgs";
export declare class UserRelationsResolver {
    profile(user: User, ctx: any): Promise<Profile | null>;
    posts(user: User, ctx: any, args: UserPostsArgs): Promise<Post[]>;
}
