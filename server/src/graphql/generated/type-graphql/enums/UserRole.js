"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRole = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var UserRole;
(function (UserRole) {
    UserRole["USER"] = "USER";
    UserRole["MEMBER"] = "MEMBER";
    UserRole["ADMIN"] = "ADMIN";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
TypeGraphQL.registerEnumType(UserRole, {
    name: "UserRole",
    description: undefined,
});
