"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.queues = exports.startProcess = void 0;
const signale_1 = __importDefault(require("signale"));
const jobs_1 = __importDefault(require("../jobs"));
const startProcess = () => {
    signale_1.default.success('🐂 Bull running');
    jobs_1.default.map((job) => {
        job.process();
    });
};
exports.startProcess = startProcess;
exports.queues = jobs_1.default;
//# sourceMappingURL=Queue.js.map