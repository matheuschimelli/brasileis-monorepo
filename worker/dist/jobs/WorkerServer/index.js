"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jobUtils_1 = require("../../lib/jobUtils");
const testCrawler1_1 = __importDefault(require("../crawlers/testCrawler1"));
const defaultcrawler_1 = __importDefault(require("../crawlers/defaultcrawler"));
const queue = (0, jobUtils_1.createJob)("WorkerServer");
const process = () => {
    queue.process(async (job) => {
        console.log(job.id);
        console.log(job.data);
        try {
            switch (job.data.queue) {
                case "DefaultCrawler":
                    defaultcrawler_1.default.queue.add({ ...job.data.jobData });
                    break;
                case "CrawlerTest":
                    testCrawler1_1.default.queue.add({ ...job.data.jobData });
                    break;
                default:
                    break;
            }
            job.progress(100);
            return Promise.resolve();
        }
        catch (error) {
            console.log(error);
            return Promise.reject(new Error(error));
        }
    });
};
exports.default = { queue, process };
//# sourceMappingURL=index.js.map