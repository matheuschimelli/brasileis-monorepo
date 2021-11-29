"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawBlockCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let LawBlockCount = class LawBlockCount {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], LawBlockCount.prototype, "content", void 0);
LawBlockCount = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("LawBlockCount", {
        isAbstract: true
    })
], LawBlockCount);
exports.LawBlockCount = LawBlockCount;
