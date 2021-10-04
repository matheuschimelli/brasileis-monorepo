"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.queues = exports.startProcess = void 0;
var signale_1 = __importDefault(require("signale"));
var jobs_1 = __importDefault(require("../jobs"));
var startProcess = function () {
    signale_1.default.success('🐂 Bull running');
    jobs_1.default.map(function (job) {
        job.process();
    });
};
exports.startProcess = startProcess;
exports.queues = jobs_1.default;
//# sourceMappingURL=Queue.js.map