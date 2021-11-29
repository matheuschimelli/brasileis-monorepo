"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawBlock = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlockType_1 = require("../enums/BlockType");
const LawBlockCount_1 = require("../resolvers/outputs/LawBlockCount");
let LawBlock = class LawBlock {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LawBlock.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockType_1.BlockType, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LawBlock.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], LawBlock.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], LawBlock.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LawBlock.prototype, "lawBlockId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockCount_1.LawBlockCount, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockCount_1.LawBlockCount)
], LawBlock.prototype, "_count", void 0);
LawBlock = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("LawBlock", {
        isAbstract: true
    })
], LawBlock);
exports.LawBlock = LawBlock;
