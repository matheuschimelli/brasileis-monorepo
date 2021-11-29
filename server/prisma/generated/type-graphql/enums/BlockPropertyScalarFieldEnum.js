"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockPropertyScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var BlockPropertyScalarFieldEnum;
(function (BlockPropertyScalarFieldEnum) {
    BlockPropertyScalarFieldEnum["id"] = "id";
    BlockPropertyScalarFieldEnum["value"] = "value";
    BlockPropertyScalarFieldEnum["title"] = "title";
    BlockPropertyScalarFieldEnum["number"] = "number";
    BlockPropertyScalarFieldEnum["identifier"] = "identifier";
    BlockPropertyScalarFieldEnum["comment"] = "comment";
    BlockPropertyScalarFieldEnum["year"] = "year";
    BlockPropertyScalarFieldEnum["author"] = "author";
    BlockPropertyScalarFieldEnum["membersOnly"] = "membersOnly";
    BlockPropertyScalarFieldEnum["searchString"] = "searchString";
    BlockPropertyScalarFieldEnum["lawBlockId"] = "lawBlockId";
})(BlockPropertyScalarFieldEnum = exports.BlockPropertyScalarFieldEnum || (exports.BlockPropertyScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(BlockPropertyScalarFieldEnum, {
    name: "BlockPropertyScalarFieldEnum",
    description: undefined,
});
