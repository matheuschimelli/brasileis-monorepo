"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoolFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedBoolFilter_1 = require("../inputs/NestedBoolFilter");
let BoolFilter = class BoolFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], BoolFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedBoolFilter_1.NestedBoolFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedBoolFilter_1.NestedBoolFilter)
], BoolFilter.prototype, "not", void 0);
BoolFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BoolFilter", {
        isAbstract: true
    })
], BoolFilter);
exports.BoolFilter = BoolFilter;
