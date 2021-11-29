"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateLawBlock = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LawBlockCountAggregate_1 = require("../outputs/LawBlockCountAggregate");
const LawBlockMaxAggregate_1 = require("../outputs/LawBlockMaxAggregate");
const LawBlockMinAggregate_1 = require("../outputs/LawBlockMinAggregate");
let AggregateLawBlock = class AggregateLawBlock {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockCountAggregate_1.LawBlockCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockCountAggregate_1.LawBlockCountAggregate)
], AggregateLawBlock.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockMinAggregate_1.LawBlockMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockMinAggregate_1.LawBlockMinAggregate)
], AggregateLawBlock.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockMaxAggregate_1.LawBlockMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockMaxAggregate_1.LawBlockMaxAggregate)
], AggregateLawBlock.prototype, "_max", void 0);
AggregateLawBlock = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("AggregateLawBlock", {
        isAbstract: true
    })
], AggregateLawBlock);
exports.AggregateLawBlock = AggregateLawBlock;
