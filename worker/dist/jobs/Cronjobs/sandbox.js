"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jobResults_1 = __importDefault(require("../jobResults"));
async function default_1(job) {
    console.log('CronJob Sandbox');
    console.log(job.id);
    try {
        console.log(job.data);
        console.log('CronJob Sandbox');
        jobResults_1.default.queue.add({ queue: 'CronJob', result: { data: 'CronJob Sandbox' } });
        job.progress(100);
        return Promise.resolve();
    }
    catch (error) {
        console.log(error);
        return Promise.reject(new Error(error));
    }
}
exports.default = default_1;
//# sourceMappingURL=sandbox.js.map