"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueBlockPropertyResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const FindUniqueBlockPropertyArgs_1 = require("./args/FindUniqueBlockPropertyArgs");
const BlockProperty_1 = require("../../../models/BlockProperty");
const helpers_1 = require("../../../helpers");
let FindUniqueBlockPropertyResolver = class FindUniqueBlockPropertyResolver {
    async blockProperty(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).blockProperty.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => BlockProperty_1.BlockProperty, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindUniqueBlockPropertyArgs_1.FindUniqueBlockPropertyArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FindUniqueBlockPropertyResolver.prototype, "blockProperty", null);
FindUniqueBlockPropertyResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => BlockProperty_1.BlockProperty)
], FindUniqueBlockPropertyResolver);
exports.FindUniqueBlockPropertyResolver = FindUniqueBlockPropertyResolver;
