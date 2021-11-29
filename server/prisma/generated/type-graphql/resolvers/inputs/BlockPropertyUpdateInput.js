"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockPropertyUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const LawBlockUpdateOneRequiredWithoutPropertiesInput_1 = require("../inputs/LawBlockUpdateOneRequiredWithoutPropertiesInput");
const NullableIntFieldUpdateOperationsInput_1 = require("../inputs/NullableIntFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let BlockPropertyUpdateInput = class BlockPropertyUpdateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], BlockPropertyUpdateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], BlockPropertyUpdateInput.prototype, "value", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], BlockPropertyUpdateInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], BlockPropertyUpdateInput.prototype, "number", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], BlockPropertyUpdateInput.prototype, "identifier", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], BlockPropertyUpdateInput.prototype, "comment", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], BlockPropertyUpdateInput.prototype, "year", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], BlockPropertyUpdateInput.prototype, "author", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], BlockPropertyUpdateInput.prototype, "membersOnly", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], BlockPropertyUpdateInput.prototype, "searchString", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockUpdateOneRequiredWithoutPropertiesInput_1.LawBlockUpdateOneRequiredWithoutPropertiesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockUpdateOneRequiredWithoutPropertiesInput_1.LawBlockUpdateOneRequiredWithoutPropertiesInput)
], BlockPropertyUpdateInput.prototype, "LawBlock", void 0);
BlockPropertyUpdateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlockPropertyUpdateInput", {
        isAbstract: true
    })
], BlockPropertyUpdateInput);
exports.BlockPropertyUpdateInput = BlockPropertyUpdateInput;
