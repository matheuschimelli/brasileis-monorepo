"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bullmq_1 = require("bullmq");
const path_1 = __importDefault(require("path"));
const REDIS_HOST = "127.0.0.1";
const REDIS_PORT = 6379;
const queue = new bullmq_1.Queue('BULLMQ', {
    connection: {
        host: REDIS_HOST,
        port: REDIS_PORT,
    }
});
const ext = path_1.default.extname(__filename);
const sandboxFile = path_1.default.resolve(__dirname, `sandbox.js`);
const worker = new bullmq_1.Worker('BULLMQ', sandboxFile);
const queueEvents = new bullmq_1.QueueEvents('BULLMQ');
queueEvents.on('completed', jobId => {
    console.log('done painting');
});
queueEvents.on('failed', (jobId, err) => {
    console.error('error painting', err);
});
async function start() {
    await queue.add('cars', { color: 'blue' });
}
exports.default = {
    start,
    queues: [queue]
};
//# sourceMappingURL=index.js.map