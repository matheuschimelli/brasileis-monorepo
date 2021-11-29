"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumBlockTypeFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlockType_1 = require("../../enums/BlockType");
let EnumBlockTypeFieldUpdateOperationsInput = class EnumBlockTypeFieldUpdateOperationsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockType_1.BlockType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumBlockTypeFieldUpdateOperationsInput.prototype, "set", void 0);
EnumBlockTypeFieldUpdateOperationsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumBlockTypeFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumBlockTypeFieldUpdateOperationsInput);
exports.EnumBlockTypeFieldUpdateOperationsInput = EnumBlockTypeFieldUpdateOperationsInput;
