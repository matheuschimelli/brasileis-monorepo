"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let ProfileMaxAggregate = class ProfileMaxAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProfileMaxAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProfileMaxAggregate.prototype, "bio", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProfileMaxAggregate.prototype, "picture", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProfileMaxAggregate.prototype, "userId", void 0);
ProfileMaxAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("ProfileMaxAggregate", {
        isAbstract: true
    })
], ProfileMaxAggregate);
exports.ProfileMaxAggregate = ProfileMaxAggregate;
