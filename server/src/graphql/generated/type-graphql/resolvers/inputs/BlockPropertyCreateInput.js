"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockPropertyCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LawBlockCreateNestedOneWithoutPropertiesInput_1 = require("../inputs/LawBlockCreateNestedOneWithoutPropertiesInput");
let BlockPropertyCreateInput = class BlockPropertyCreateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlockPropertyCreateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlockPropertyCreateInput.prototype, "value", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlockPropertyCreateInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlockPropertyCreateInput.prototype, "number", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlockPropertyCreateInput.prototype, "identifier", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlockPropertyCreateInput.prototype, "comment", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BlockPropertyCreateInput.prototype, "year", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlockPropertyCreateInput.prototype, "author", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], BlockPropertyCreateInput.prototype, "membersOnly", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlockPropertyCreateInput.prototype, "searchString", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockCreateNestedOneWithoutPropertiesInput_1.LawBlockCreateNestedOneWithoutPropertiesInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockCreateNestedOneWithoutPropertiesInput_1.LawBlockCreateNestedOneWithoutPropertiesInput)
], BlockPropertyCreateInput.prototype, "LawBlock", void 0);
BlockPropertyCreateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlockPropertyCreateInput", {
        isAbstract: true
    })
], BlockPropertyCreateInput);
exports.BlockPropertyCreateInput = BlockPropertyCreateInput;
