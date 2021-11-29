"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockPropertyWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let BlockPropertyWhereUniqueInput = class BlockPropertyWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlockPropertyWhereUniqueInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlockPropertyWhereUniqueInput.prototype, "lawBlockId", void 0);
BlockPropertyWhereUniqueInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlockPropertyWhereUniqueInput", {
        isAbstract: true
    })
], BlockPropertyWhereUniqueInput);
exports.BlockPropertyWhereUniqueInput = BlockPropertyWhereUniqueInput;
