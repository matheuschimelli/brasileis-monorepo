import { User } from "../models/User";
export declare class Post {
    id: number;
    title: string;
    createdAt: Date;
    content?: string | null;
    published: boolean;
    authorId: string;
    User?: User;
}
