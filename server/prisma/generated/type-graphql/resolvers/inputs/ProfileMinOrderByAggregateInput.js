"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ProfileMinOrderByAggregateInput = class ProfileMinOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProfileMinOrderByAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProfileMinOrderByAggregateInput.prototype, "bio", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProfileMinOrderByAggregateInput.prototype, "picture", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProfileMinOrderByAggregateInput.prototype, "userId", void 0);
ProfileMinOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProfileMinOrderByAggregateInput", {
        isAbstract: true
    })
], ProfileMinOrderByAggregateInput);
exports.ProfileMinOrderByAggregateInput = ProfileMinOrderByAggregateInput;
