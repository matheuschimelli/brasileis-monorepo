"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/no-named-default */
require("reflect-metadata");
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const compression_1 = __importDefault(require("compression"));
const helmet_1 = __importDefault(require("helmet"));
const errorhandler_1 = __importDefault(require("errorhandler"));
const cors_1 = __importDefault(require("cors"));
const signale_1 = __importDefault(require("signale"));
class Server {
    constructor(params) {
        this.host = (params === null || params === void 0 ? void 0 : params.host) || '0.0.0.0.0';
        this.port = (params === null || params === void 0 ? void 0 : params.port) || 8080;
        this.postgresql = (params === null || params === void 0 ? void 0 : params.postgresql) || undefined;
        this.app = undefined;
        this.debugGraphql = (params === null || params === void 0 ? void 0 : params.debugGraphql) || false;
        this.apolloServer = undefined;
        this.graphqlResolvers = (params === null || params === void 0 ? void 0 : params.graphqlResolvers) || undefined;
        this.cors = (params === null || params === void 0 ? void 0 : params.cors) || undefined;
        this.init();
    }
    init() {
        this.app = express_1.default();
        this.server = http_1.default.createServer(this.app);
        this.app.disable('x-powered-by');
        this.app.set('host', this.host);
        this.app.set('port', Number(this.port));
        this.app.get('/tired', ({ res }) => res.send('Tired?'));
        this.app.use(helmet_1.default({
            contentSecurityPolicy: (process.env.NODE_ENV === 'production')
                ? undefined : false
        }));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use(express_1.default.json());
        this.app.use(compression_1.default());
        if (process.env.NODE_ENV === 'development')
            this.app.use(errorhandler_1.default());
        return this;
    }
    useMiddleware(middleware) {
        var _a;
        (_a = this.app) === null || _a === void 0 ? void 0 : _a.use(middleware);
        return this;
    }
    useCors() {
        const corsList = this.cors;
        const corsOptionsDelegate = function (req, callback) {
            let corsOptions;
            if ((corsList === null || corsList === void 0 ? void 0 : corsList.indexOf(req.header('Origin'))) !== -1) {
                corsOptions = { origin: true, credentials: true }; // reflect (enable) the requested origin in the CORS response
            }
            else {
                corsOptions = { origin: false, credentials: true }; // disable CORS for this request
            }
            callback(null, corsOptions); // callback expects two parameters: error and options
        };
        this.app.use(cors_1.default(corsOptionsDelegate));
        return this;
    }
    useRunOnBoostrap(boostrapFunction) {
        boostrapFunction();
        return this;
    }
    async useAsyncRunOnBoostrap(boostrapFunction) {
        await boostrapFunction();
        return this;
    }
    async useApolloServer() {
        var _a;
        if (this.graphqlResolvers && ((_a = this.graphqlResolvers) === null || _a === void 0 ? void 0 : _a.length) !== 0) {
            this.apolloServer = new apollo_server_express_1.ApolloServer({
                debug: this.debugGraphql || false,
                schema: await type_graphql_1.buildSchema({
                    resolvers: this.graphqlResolvers,
                    validate: true
                }),
                context: ({ req }) => ({
                    req
                })
            });
            this.apolloServer.applyMiddleware({
                app: this.app
            });
            this.apolloServer.installSubscriptionHandlers(this.server);
        }
    }
    handleErrors() {
        if (process.env.NODE_ENV === 'development') {
            this.app.use(errorhandler_1.default());
        }
        else {
            // @ts-ignore
            this.app.use(function (err, _, res) {
                // @TODO fix error handler. Change console to sentry or something else
                console.error(err);
                res.status(500).send('<pre>Server Error: Please try again in a few minutes</pre>');
            });
        }
    }
    async boostrap() {
        var _a;
        if (this.cors && this.cors.lenght !== 0)
            this.useCors(this.cors);
        await this.useApolloServer();
        this.handleErrors();
        (_a = this.server) === null || _a === void 0 ? void 0 : _a.listen(this.port, () => {
            var _a, _b;
            signale_1.default.success(`Server listening on port ${this.port}`);
            signale_1.default.success(`GraphQl path: ${(_a = this.apolloServer) === null || _a === void 0 ? void 0 : _a.graphqlPath}`);
            signale_1.default.success(`GraphQl Subscriptions path: ${(_b = this.apolloServer) === null || _b === void 0 ? void 0 : _b.subscriptionsPath}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map