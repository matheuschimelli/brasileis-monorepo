"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawBlockMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlockType_1 = require("../../enums/BlockType");
let LawBlockMaxAggregate = class LawBlockMaxAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LawBlockMaxAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockType_1.BlockType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LawBlockMaxAggregate.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], LawBlockMaxAggregate.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], LawBlockMaxAggregate.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LawBlockMaxAggregate.prototype, "lawBlockId", void 0);
LawBlockMaxAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("LawBlockMaxAggregate", {
        isAbstract: true
    })
], LawBlockMaxAggregate);
exports.LawBlockMaxAggregate = LawBlockMaxAggregate;
