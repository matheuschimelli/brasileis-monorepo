"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockPropertyOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LawBlockOrderByWithRelationInput_1 = require("../inputs/LawBlockOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let BlockPropertyOrderByWithRelationInput = class BlockPropertyOrderByWithRelationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlockPropertyOrderByWithRelationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlockPropertyOrderByWithRelationInput.prototype, "value", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlockPropertyOrderByWithRelationInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlockPropertyOrderByWithRelationInput.prototype, "number", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlockPropertyOrderByWithRelationInput.prototype, "identifier", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlockPropertyOrderByWithRelationInput.prototype, "comment", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlockPropertyOrderByWithRelationInput.prototype, "year", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlockPropertyOrderByWithRelationInput.prototype, "author", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlockPropertyOrderByWithRelationInput.prototype, "membersOnly", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlockPropertyOrderByWithRelationInput.prototype, "searchString", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlockPropertyOrderByWithRelationInput.prototype, "lawBlockId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockOrderByWithRelationInput_1.LawBlockOrderByWithRelationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockOrderByWithRelationInput_1.LawBlockOrderByWithRelationInput)
], BlockPropertyOrderByWithRelationInput.prototype, "LawBlock", void 0);
BlockPropertyOrderByWithRelationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlockPropertyOrderByWithRelationInput", {
        isAbstract: true
    })
], BlockPropertyOrderByWithRelationInput);
exports.BlockPropertyOrderByWithRelationInput = BlockPropertyOrderByWithRelationInput;
