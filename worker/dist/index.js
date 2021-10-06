"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = require("@bull-board/api");
const bullAdapter_1 = require("@bull-board/api/bullAdapter");
const express_2 = require("@bull-board/express");
const signale_1 = __importDefault(require("signale"));
const Queue_1 = require("./lib/Queue");
const Queue_2 = require("./lib/Queue");
require("dotenv/config");
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 8080;
const express_basic_auth_1 = __importDefault(require("express-basic-auth"));
if (process.env.NODE_ENV == 'production') {
    console.log("Running on production");
    (0, Queue_2.startProcess)();
}
//import { BullMQAdapter } from '@bull-board/api/bullMQAdapter';
//import BullMQ from './bullmq';
//BullMQ.queues.map((queue) => new BullMQAdapter(queue)),
const serverAdapter = new express_2.ExpressAdapter();
(0, api_1.createBullBoard)({
    queues: Queue_1.queues.map((job) => new bullAdapter_1.BullAdapter(job.queue)),
    serverAdapter,
});
const app = (0, express_1.default)();
serverAdapter.setBasePath('/admin/queues');
app.use('/admin/queues', (0, express_basic_auth_1.default)({
    users: { 'painel': 'decontrole' },
    challenge: true,
}), serverAdapter.getRouter());
app.set('host', host);
app.set('port', port);
app.listen(port, () => {
    signale_1.default.success('Server listening on port 8080');
});
//# sourceMappingURL=index.js.map