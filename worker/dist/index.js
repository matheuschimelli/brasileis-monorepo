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
require("dotenv/config");
const express_basic_auth_1 = __importDefault(require("express-basic-auth"));
const jobs_1 = require("./jobs");
const jobs_2 = require("./jobs");
const pingmydyno_1 = __importDefault(require("pingmydyno"));
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 8081;
if (process.env.NODE_ENV == 'production') {
    console.log("Running on production");
    (0, jobs_2.runQueues)();
}
const serverAdapter = new express_2.ExpressAdapter();
(0, api_1.createBullBoard)({
    queues: jobs_1.queues.map((job) => new bullAdapter_1.BullAdapter(job)),
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
app.get('/ping', (req, res) => res.send("pong"));
app.listen(port, () => {
    signale_1.default.success('Worker Processor Server listening on port 8080');
    (0, pingmydyno_1.default)('https://blws.herokuapp.com/ping');
    (0, pingmydyno_1.default)('https://brasileis-dev-main-server.herokuapp.com/ping');
    (0, pingmydyno_1.default)('https://api.brasileis.com.br/ping');
});
//# sourceMappingURL=index.js.map