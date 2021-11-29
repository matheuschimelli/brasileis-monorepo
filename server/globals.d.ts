declare module 'mongoose-slug-plugin'
declare module 'pingmydyno'
declare module 'mongoose-slug-updater'
declare module 'unirest'
declare module 'html-to-docx'
declare module 'compression'
declare module 'errorhandler'
declare module 'redis'
declare module 'mongoose'


declare global {
    namespace NodeJS {
        interface ProcessEnv {
            GITHUB_AUTH_TOKEN: string;
            NODE_ENV: 'development' | 'production';
            PORT?: string;
            PWD: string;
            CLIENT_URL: string,
            GOOGLE_SECRET: string
            GOOGLE_ID: string,
            TOKEN_SECRET: string
        }
    }
}