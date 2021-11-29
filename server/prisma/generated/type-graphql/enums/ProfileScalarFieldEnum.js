"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var ProfileScalarFieldEnum;
(function (ProfileScalarFieldEnum) {
    ProfileScalarFieldEnum["id"] = "id";
    ProfileScalarFieldEnum["bio"] = "bio";
    ProfileScalarFieldEnum["picture"] = "picture";
    ProfileScalarFieldEnum["userId"] = "userId";
})(ProfileScalarFieldEnum = exports.ProfileScalarFieldEnum || (exports.ProfileScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ProfileScalarFieldEnum, {
    name: "ProfileScalarFieldEnum",
    description: undefined,
});
