import { User } from "../models/User";
export declare class Profile {
    id: string;
    bio?: string | null;
    picture?: string | null;
    userId: string;
    User?: User;
}
