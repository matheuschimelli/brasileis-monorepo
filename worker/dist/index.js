"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var api_1 = require("@bull-board/api");
var bullAdapter_1 = require("@bull-board/api/bullAdapter");
var express_2 = require("@bull-board/express");
var signale_1 = __importDefault(require("signale"));
var Queue_1 = require("./lib/Queue");
var Queue_2 = require("./lib/Queue");
require("dotenv/config");
var host = process.env.HOST || '0.0.0.0';
var port = process.env.PORT || 8080;
if (process.env.NODE_ENV == 'production') {
    (0, Queue_2.startProcess)();
}
//import { BullMQAdapter } from '@bull-board/api/bullMQAdapter';
//import BullMQ from './bullmq';
//BullMQ.queues.map((queue) => new BullMQAdapter(queue)),
var serverAdapter = new express_2.ExpressAdapter();
(0, api_1.createBullBoard)({
    queues: Queue_1.queues.map(function (job) { return new bullAdapter_1.BullAdapter(job.queue); }),
    serverAdapter: serverAdapter,
});
var app = (0, express_1.default)();
serverAdapter.setBasePath('/admin/queues');
app.use('/admin/queues', serverAdapter.getRouter());
app.set('host', host);
app.set('port', port);
app.listen(port, function () {
    signale_1.default.success('Server listening on port 8080');
});
//# sourceMappingURL=index.js.map