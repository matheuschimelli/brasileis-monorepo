"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jobUtils_1 = require("../../lib/jobUtils");
var queue = (0, jobUtils_1.createJob)("jobResults");
var process = function () { return Promise.resolve(); };
exports.default = { queue: queue, process: process };
//# sourceMappingURL=index.js.map