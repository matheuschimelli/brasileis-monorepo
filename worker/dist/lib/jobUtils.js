"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJob = exports.sandboxFile = void 0;
const path_1 = __importDefault(require("path"));
const bull_1 = __importDefault(require("bull"));
const redis_1 = __importDefault(require("../config/redis"));
function sandboxFile(dirname, fileName) {
    const ext = path_1.default.extname(__filename);
    const file = path_1.default.resolve(dirname, `${fileName}${ext}`);
    return file;
}
exports.sandboxFile = sandboxFile;
function createJob(name, options) {
    //@ts-ignore
    const queue = new bull_1.default(name, {
        redis: {
            ...redis_1.default.options
        },
        defaultJobOptions: { ...options }
    });
    return queue;
}
exports.createJob = createJob;
//# sourceMappingURL=jobUtils.js.map