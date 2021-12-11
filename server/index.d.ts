import { User } from '@prisma/client'
declare global {
    namespace Express {
        interface Request {
            isAuthenticated: () => User | undefined;
            user?: User
        }
    }
}
