"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PostOrderByRelationAggregateInput_1 = require("../inputs/PostOrderByRelationAggregateInput");
const ProfileOrderByWithRelationInput_1 = require("../inputs/ProfileOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let UserOrderByWithRelationInput = class UserOrderByWithRelationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserOrderByWithRelationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserOrderByWithRelationInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserOrderByWithRelationInput.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserOrderByWithRelationInput.prototype, "username", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserOrderByWithRelationInput.prototype, "tokens", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserOrderByWithRelationInput.prototype, "admin", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserOrderByWithRelationInput.prototype, "googleId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserOrderByWithRelationInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserOrderByWithRelationInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserOrderByWithRelationInput.prototype, "role", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProfileOrderByWithRelationInput_1.ProfileOrderByWithRelationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProfileOrderByWithRelationInput_1.ProfileOrderByWithRelationInput)
], UserOrderByWithRelationInput.prototype, "profile", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostOrderByRelationAggregateInput_1.PostOrderByRelationAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PostOrderByRelationAggregateInput_1.PostOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "posts", void 0);
UserOrderByWithRelationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserOrderByWithRelationInput", {
        isAbstract: true
    })
], UserOrderByWithRelationInput);
exports.UserOrderByWithRelationInput = UserOrderByWithRelationInput;
