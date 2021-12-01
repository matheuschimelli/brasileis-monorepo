"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ProfileMaxOrderByAggregateInput = class ProfileMaxOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProfileMaxOrderByAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProfileMaxOrderByAggregateInput.prototype, "bio", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProfileMaxOrderByAggregateInput.prototype, "picture", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProfileMaxOrderByAggregateInput.prototype, "userId", void 0);
ProfileMaxOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProfileMaxOrderByAggregateInput", {
        isAbstract: true
    })
], ProfileMaxOrderByAggregateInput);
exports.ProfileMaxOrderByAggregateInput = ProfileMaxOrderByAggregateInput;