"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockPropertyAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let BlockPropertyAvgAggregate = class BlockPropertyAvgAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BlockPropertyAvgAggregate.prototype, "year", void 0);
BlockPropertyAvgAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("BlockPropertyAvgAggregate", {
        isAbstract: true
    })
], BlockPropertyAvgAggregate);
exports.BlockPropertyAvgAggregate = BlockPropertyAvgAggregate;
