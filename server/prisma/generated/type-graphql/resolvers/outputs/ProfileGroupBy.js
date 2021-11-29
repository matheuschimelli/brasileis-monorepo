"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProfileCountAggregate_1 = require("../outputs/ProfileCountAggregate");
const ProfileMaxAggregate_1 = require("../outputs/ProfileMaxAggregate");
const ProfileMinAggregate_1 = require("../outputs/ProfileMinAggregate");
let ProfileGroupBy = class ProfileGroupBy {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProfileGroupBy.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProfileGroupBy.prototype, "bio", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProfileGroupBy.prototype, "picture", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProfileGroupBy.prototype, "userId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProfileCountAggregate_1.ProfileCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProfileCountAggregate_1.ProfileCountAggregate)
], ProfileGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProfileMinAggregate_1.ProfileMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProfileMinAggregate_1.ProfileMinAggregate)
], ProfileGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProfileMaxAggregate_1.ProfileMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProfileMaxAggregate_1.ProfileMaxAggregate)
], ProfileGroupBy.prototype, "_max", void 0);
ProfileGroupBy = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("ProfileGroupBy", {
        isAbstract: true
    })
], ProfileGroupBy);
exports.ProfileGroupBy = ProfileGroupBy;
