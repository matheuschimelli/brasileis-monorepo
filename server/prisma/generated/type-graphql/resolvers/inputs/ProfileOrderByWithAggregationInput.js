"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProfileCountOrderByAggregateInput_1 = require("../inputs/ProfileCountOrderByAggregateInput");
const ProfileMaxOrderByAggregateInput_1 = require("../inputs/ProfileMaxOrderByAggregateInput");
const ProfileMinOrderByAggregateInput_1 = require("../inputs/ProfileMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ProfileOrderByWithAggregationInput = class ProfileOrderByWithAggregationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProfileOrderByWithAggregationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProfileOrderByWithAggregationInput.prototype, "bio", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProfileOrderByWithAggregationInput.prototype, "picture", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProfileOrderByWithAggregationInput.prototype, "userId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProfileCountOrderByAggregateInput_1.ProfileCountOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProfileCountOrderByAggregateInput_1.ProfileCountOrderByAggregateInput)
], ProfileOrderByWithAggregationInput.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProfileMaxOrderByAggregateInput_1.ProfileMaxOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProfileMaxOrderByAggregateInput_1.ProfileMaxOrderByAggregateInput)
], ProfileOrderByWithAggregationInput.prototype, "_max", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProfileMinOrderByAggregateInput_1.ProfileMinOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProfileMinOrderByAggregateInput_1.ProfileMinOrderByAggregateInput)
], ProfileOrderByWithAggregationInput.prototype, "_min", void 0);
ProfileOrderByWithAggregationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProfileOrderByWithAggregationInput", {
        isAbstract: true
    })
], ProfileOrderByWithAggregationInput);
exports.ProfileOrderByWithAggregationInput = ProfileOrderByWithAggregationInput;
