export declare class UserMinAggregate {
    id: string | null;
    name: string | null;
    email: string | null;
    username: string | null;
    admin: boolean | null;
    googleId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    role: "USER" | "MEMBER" | "ADMIN" | null;
}
