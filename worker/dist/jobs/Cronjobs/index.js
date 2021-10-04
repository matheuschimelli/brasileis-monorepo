"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jobUtils_1 = require("../../lib/jobUtils");
var queue = (0, jobUtils_1.createJob)("CronJob", {
    repeat: {
        cron: "* * * * *",
    },
});
var process = function () { return queue.process((0, jobUtils_1.sandboxFile)(__dirname, "sandbox")); };
queue.add({ justRun: true });
exports.default = { queue: queue, process: process };
//# sourceMappingURL=index.js.map