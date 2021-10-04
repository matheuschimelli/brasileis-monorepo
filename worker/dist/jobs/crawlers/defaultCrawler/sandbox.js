"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unused-vars */
var apify_1 = __importDefault(require("apify"));
var jobResults_1 = __importDefault(require("../../jobResults"));
var normalizeString = function (str) {
    return str.toLowerCase()
        .replace(/(\r\n|\n|\r)/gm, ' ')
        .replace(/\s{2,}/g, ' ')
        .replace(/[\u200B-\u200D\uFEFF]/g, '')
        .replace(/[§:;,.]/g, '')
        .replace(/[/()-]/g, ' ') // .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/\s{2,}/g, ' ')
        .trim();
};
function default_1(job) {
    return __awaiter(this, void 0, void 0, function () {
        var jobData, urlsToVisit, requestQueue, _i, urlsToVisit_1, url, crawler, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    jobData = job.data;
                    urlsToVisit = jobData.urlsToVisit;
                    console.log(urlsToVisit);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 9, , 10]);
                    job.progress(10);
                    return [4 /*yield*/, apify_1.default.openRequestQueue()];
                case 2:
                    requestQueue = _a.sent();
                    _i = 0, urlsToVisit_1 = urlsToVisit;
                    _a.label = 3;
                case 3:
                    if (!(_i < urlsToVisit_1.length)) return [3 /*break*/, 6];
                    url = urlsToVisit_1[_i];
                    return [4 /*yield*/, requestQueue.addRequest({ url: url })];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5:
                    _i++;
                    return [3 /*break*/, 3];
                case 6:
                    crawler = new apify_1.default.PuppeteerCrawler({
                        requestQueue: requestQueue,
                        handlePageFunction: function (_a) {
                            var request = _a.request, page = _a.page;
                            return __awaiter(this, void 0, void 0, function () {
                                var title, url, content, body, h1s, bs, paragraphs;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0: return [4 /*yield*/, page.title()];
                                        case 1:
                                            title = _b.sent();
                                            url = page.url();
                                            return [4 /*yield*/, page.content()];
                                        case 2:
                                            content = _b.sent();
                                            return [4 /*yield*/, page.evaluate(function () { var _a; return (_a = document.querySelector("body")) === null || _a === void 0 ? void 0 : _a.innerText; })];
                                        case 3:
                                            body = _b.sent();
                                            return [4 /*yield*/, page.$$eval('h1', (function (els) { return els.map(function (h1) { return h1.textContent; }); }))];
                                        case 4:
                                            h1s = _b.sent();
                                            return [4 /*yield*/, page.$$eval('b', (function (els) { return els.map(function (b) { return b.textContent; }); }))];
                                        case 5:
                                            bs = _b.sent();
                                            return [4 /*yield*/, page.$$eval('p', (function (els) { return els.map(function (p) { return p.textContent; }); }))];
                                        case 6:
                                            paragraphs = _b.sent();
                                            return [4 /*yield*/, jobResults_1.default.queue.add({
                                                    queue: 'DefaultCrawler',
                                                    jobData: job.data,
                                                    operation: 'SaveData',
                                                    model: 'Law',
                                                    result: {
                                                        page: {
                                                            title: title,
                                                            url: url,
                                                            content: content,
                                                            bodyText: normalizeString(body),
                                                            h1s: JSON.stringify(h1s),
                                                            bs: JSON.stringify(bs),
                                                            paragraphs: JSON.stringify(paragraphs)
                                                        }
                                                    }
                                                })];
                                        case 7:
                                            _b.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        },
                        maxRequestsPerCrawl: 10,
                        launchContext: {
                            stealth: true,
                        }
                    });
                    return [4 /*yield*/, crawler.run()];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, job.progress(100)];
                case 8:
                    _a.sent();
                    return [3 /*break*/, 10];
                case 9:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [2 /*return*/, Promise.reject(new Error(error_1))];
                case 10: return [2 /*return*/];
            }
        });
    });
}
exports.default = default_1;
//# sourceMappingURL=sandbox.js.map