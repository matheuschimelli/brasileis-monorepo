"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProfileResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const DeleteProfileArgs_1 = require("./args/DeleteProfileArgs");
const Profile_1 = require("../../../models/Profile");
const helpers_1 = require("../../../helpers");
let DeleteProfileResolver = class DeleteProfileResolver {
    async deleteProfile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).profile.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Profile_1.Profile, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteProfileArgs_1.DeleteProfileArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DeleteProfileResolver.prototype, "deleteProfile", null);
DeleteProfileResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Profile_1.Profile)
], DeleteProfileResolver);
exports.DeleteProfileResolver = DeleteProfileResolver;
