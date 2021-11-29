"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawBlockScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var LawBlockScalarFieldEnum;
(function (LawBlockScalarFieldEnum) {
    LawBlockScalarFieldEnum["id"] = "id";
    LawBlockScalarFieldEnum["type"] = "type";
    LawBlockScalarFieldEnum["createdAt"] = "createdAt";
    LawBlockScalarFieldEnum["updatedAt"] = "updatedAt";
    LawBlockScalarFieldEnum["lawBlockId"] = "lawBlockId";
})(LawBlockScalarFieldEnum = exports.LawBlockScalarFieldEnum || (exports.LawBlockScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(LawBlockScalarFieldEnum, {
    name: "LawBlockScalarFieldEnum",
    description: undefined,
});
