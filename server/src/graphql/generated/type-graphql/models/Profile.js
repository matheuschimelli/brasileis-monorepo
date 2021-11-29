"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let Profile = class Profile {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Profile.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Profile.prototype, "bio", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Profile.prototype, "picture", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Profile.prototype, "userId", void 0);
Profile = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("Profile", {
        isAbstract: true
    })
], Profile);
exports.Profile = Profile;
