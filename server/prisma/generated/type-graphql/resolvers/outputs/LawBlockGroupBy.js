"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawBlockGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LawBlockCountAggregate_1 = require("../outputs/LawBlockCountAggregate");
const LawBlockMaxAggregate_1 = require("../outputs/LawBlockMaxAggregate");
const LawBlockMinAggregate_1 = require("../outputs/LawBlockMinAggregate");
const BlockType_1 = require("../../enums/BlockType");
let LawBlockGroupBy = class LawBlockGroupBy {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LawBlockGroupBy.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockType_1.BlockType, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LawBlockGroupBy.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], LawBlockGroupBy.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], LawBlockGroupBy.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LawBlockGroupBy.prototype, "lawBlockId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockCountAggregate_1.LawBlockCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockCountAggregate_1.LawBlockCountAggregate)
], LawBlockGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockMinAggregate_1.LawBlockMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockMinAggregate_1.LawBlockMinAggregate)
], LawBlockGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockMaxAggregate_1.LawBlockMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockMaxAggregate_1.LawBlockMaxAggregate)
], LawBlockGroupBy.prototype, "_max", void 0);
LawBlockGroupBy = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("LawBlockGroupBy", {
        isAbstract: true
    })
], LawBlockGroupBy);
exports.LawBlockGroupBy = LawBlockGroupBy;
