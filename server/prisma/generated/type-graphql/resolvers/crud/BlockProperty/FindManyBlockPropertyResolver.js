"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyBlockPropertyResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const FindManyBlockPropertyArgs_1 = require("./args/FindManyBlockPropertyArgs");
const BlockProperty_1 = require("../../../models/BlockProperty");
const helpers_1 = require("../../../helpers");
let FindManyBlockPropertyResolver = class FindManyBlockPropertyResolver {
    async blockProperties(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).blockProperty.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [BlockProperty_1.BlockProperty], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindManyBlockPropertyArgs_1.FindManyBlockPropertyArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FindManyBlockPropertyResolver.prototype, "blockProperties", null);
FindManyBlockPropertyResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => BlockProperty_1.BlockProperty)
], FindManyBlockPropertyResolver);
exports.FindManyBlockPropertyResolver = FindManyBlockPropertyResolver;
