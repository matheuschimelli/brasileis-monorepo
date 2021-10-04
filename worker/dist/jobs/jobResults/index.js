"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jobUtils_1 = require("../../lib/jobUtils");
const queue = (0, jobUtils_1.createJob)("jobResults");
const process = () => Promise.resolve();
exports.default = { queue, process };
//# sourceMappingURL=index.js.map