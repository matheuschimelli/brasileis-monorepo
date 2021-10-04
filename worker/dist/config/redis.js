"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var options;
if (process.env.REDIS_PASSWORD) {
    options = {
        redis: {
            host: process.env.REDIS_HOST,
            port: process.env.REDIS_PORT,
            password: process.env.REDIS_PASSWORD
        }
    };
}
else {
    options = {
        redis: {
            host: process.env.REDIS_HOST,
            port: process.env.REDIS_PORT
        }
    };
}
exports.default = {
    options
};
//# sourceMappingURL=redis.js.map