"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockType = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var BlockType;
(function (BlockType) {
    BlockType["LAW"] = "LAW";
    BlockType["JURISPRUDENCE"] = "JURISPRUDENCE";
    BlockType["ARTICLE"] = "ARTICLE";
    BlockType["PARAGRAPH"] = "PARAGRAPH";
    BlockType["INCISE"] = "INCISE";
    BlockType["ALINEA"] = "ALINEA";
    BlockType["UNIQUE_PARAGRAPH"] = "UNIQUE_PARAGRAPH";
    BlockType["INFO"] = "INFO";
    BlockType["CODE"] = "CODE";
    BlockType["CONSTITUTION"] = "CONSTITUTION";
})(BlockType = exports.BlockType || (exports.BlockType = {}));
TypeGraphQL.registerEnumType(BlockType, {
    name: "BlockType",
    description: undefined,
});
