"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.queues = exports.sendResult = exports.runQueues = exports.crawlerDailyTJPR = exports.crawlerTJPRJurisprudenciaWorker = exports.crawlerTJPRJurisprudencia = exports.crawlerArtigsoLeiJsDom = exports.crawlerArtigosLei = exports.jobResult = exports.workerServer = void 0;
const signale_1 = __importDefault(require("signale"));
const bull_1 = require("../lib/bull");
const handler_1 = __importDefault(require("./worker-server/handler"));
const handler_2 = __importDefault(require("./crawlers/crawler-artigos-jsdom/handler"));
const job_utils_1 = require("../lib/job-utils");
exports.workerServer = (0, bull_1.queue)('WorkerServer', handler_1.default);
exports.jobResult = (0, bull_1.queue)('JobResults');
exports.crawlerArtigosLei = (0, bull_1.queue)('crawler-artigos-lei', (0, job_utils_1.runOnSandbox)(__dirname, './crawlers/crawler-artigos-lei/sandbox'));
exports.crawlerArtigsoLeiJsDom = (0, bull_1.queue)('crawler-artigos-lei-jsdom', handler_2.default);
exports.crawlerTJPRJurisprudencia = (0, bull_1.queue)('TJPRJurisprudencia', (0, job_utils_1.runOnSandbox)(__dirname, './crawlers/crawler-tjpr/sandbox'));
exports.crawlerTJPRJurisprudenciaWorker = (0, bull_1.queue)('TJPRJurisprudencia Worker', (0, job_utils_1.runOnSandbox)(__dirname, './crawlers/crawler-tjpr/worker'));
exports.crawlerDailyTJPR = (0, bull_1.queue)('DailyTJPR', (0, job_utils_1.runOnSandbox)(__dirname, './crawlers/crawler-tjpr-diary/sandbox'));
const runQueues = () => signale_1.default.success('🐂 Bull running');
exports.runQueues = runQueues;
const sendResult = async ({ queue, data, result }) => await exports.jobResult.add({ queue, data, result });
exports.sendResult = sendResult;
exports.queues = [
    exports.workerServer,
    exports.jobResult,
    exports.crawlerArtigosLei,
    exports.crawlerArtigsoLeiJsDom,
    exports.crawlerTJPRJurisprudencia,
    exports.crawlerDailyTJPR,
    exports.crawlerTJPRJurisprudenciaWorker
];
//# sourceMappingURL=index.js.map