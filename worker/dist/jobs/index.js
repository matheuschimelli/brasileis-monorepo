"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WorkerServer_1 = __importDefault(require("./WorkerServer"));
const Cronjobs_1 = __importDefault(require("./Cronjobs"));
const jobResults_1 = __importDefault(require("./jobResults"));
const testCrawler1_1 = __importDefault(require("./crawlers/testCrawler1"));
const defaultcrawler_1 = __importDefault(require("./crawlers/defaultcrawler"));
const jobQueues = [
    WorkerServer_1.default,
    Cronjobs_1.default,
    jobResults_1.default,
    defaultcrawler_1.default,
    testCrawler1_1.default
];
exports.default = jobQueues;
//# sourceMappingURL=index.js.map