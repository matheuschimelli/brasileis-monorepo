"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jobUtils_1 = require("../../../lib/jobUtils");
const queue = (0, jobUtils_1.createJob)("CrawlerTest1");
const process = () => queue.process((0, jobUtils_1.sandboxFile)(__dirname, "sandbox"));
exports.default = { queue, process };
//# sourceMappingURL=index.js.map