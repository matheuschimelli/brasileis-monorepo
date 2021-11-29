"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ProfileCountOrderByAggregateInput = class ProfileCountOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProfileCountOrderByAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProfileCountOrderByAggregateInput.prototype, "bio", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProfileCountOrderByAggregateInput.prototype, "picture", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProfileCountOrderByAggregateInput.prototype, "userId", void 0);
ProfileCountOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProfileCountOrderByAggregateInput", {
        isAbstract: true
    })
], ProfileCountOrderByAggregateInput);
exports.ProfileCountOrderByAggregateInput = ProfileCountOrderByAggregateInput;
