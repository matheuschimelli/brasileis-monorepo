"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawBlockCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlockType_1 = require("../../enums/BlockType");
let LawBlockCreateManyInput = class LawBlockCreateManyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LawBlockCreateManyInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockType_1.BlockType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LawBlockCreateManyInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], LawBlockCreateManyInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], LawBlockCreateManyInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LawBlockCreateManyInput.prototype, "lawBlockId", void 0);
LawBlockCreateManyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LawBlockCreateManyInput", {
        isAbstract: true
    })
], LawBlockCreateManyInput);
exports.LawBlockCreateManyInput = LawBlockCreateManyInput;
