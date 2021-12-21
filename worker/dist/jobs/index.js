"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const worker_server_1 = __importDefault(require("./worker-server"));
const cron_jobs_1 = __importDefault(require("./cron-jobs"));
const job_results_1 = __importDefault(require("./job-results"));
const test_crawler_1_1 = __importDefault(require("./crawlers/test-crawler-1"));
const default_crawler_1 = __importDefault(require("./crawlers/default-crawler"));
const jobQueues = [
    worker_server_1.default,
    cron_jobs_1.default,
    job_results_1.default,
    default_crawler_1.default,
    test_crawler_1_1.default
];
exports.default = jobQueues;
//# sourceMappingURL=index.js.map