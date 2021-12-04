declare module 'mongoose-slug-plugin'
declare module 'pingmydyno'
declare module 'mongoose-slug-updater'
declare module 'unirest'
declare module 'html-to-docx'
declare module 'compression'
declare module 'errorhandler'
declare module 'redis'
declare module 'mongoose'
declare module 'errorhandler'
declare module 'compression'



import { User } from '@prisma/client'


declare global {
    namespace Express {
        interface Request {
            isAuthenticated: () => User | undefined;
            user?: User
        }
    }
}
