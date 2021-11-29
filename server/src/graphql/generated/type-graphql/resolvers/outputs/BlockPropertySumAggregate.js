"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockPropertySumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let BlockPropertySumAggregate = class BlockPropertySumAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BlockPropertySumAggregate.prototype, "year", void 0);
BlockPropertySumAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("BlockPropertySumAggregate", {
        isAbstract: true
    })
], BlockPropertySumAggregate);
exports.BlockPropertySumAggregate = BlockPropertySumAggregate;
