"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJob = exports.sandboxFile = void 0;
var path_1 = __importDefault(require("path"));
var bull_1 = __importDefault(require("bull"));
var redis_1 = __importDefault(require("../config/redis"));
function sandboxFile(dirname, fileName) {
    var ext = path_1.default.extname(__filename);
    var file = path_1.default.resolve(dirname, "" + fileName + ext);
    return file;
}
exports.sandboxFile = sandboxFile;
function createJob(name, options) {
    //@ts-ignore
    var queue = new bull_1.default(name, { redis: __assign({}, redis_1.default), defaultJobOptions: __assign({}, options) });
    return queue;
}
exports.createJob = createJob;
//# sourceMappingURL=jobUtils.js.map