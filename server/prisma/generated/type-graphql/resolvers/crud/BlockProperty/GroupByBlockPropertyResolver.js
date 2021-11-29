"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByBlockPropertyResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const GroupByBlockPropertyArgs_1 = require("./args/GroupByBlockPropertyArgs");
const BlockProperty_1 = require("../../../models/BlockProperty");
const BlockPropertyGroupBy_1 = require("../../outputs/BlockPropertyGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByBlockPropertyResolver = class GroupByBlockPropertyResolver {
    async groupByBlockProperty(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).blockProperty.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [BlockPropertyGroupBy_1.BlockPropertyGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByBlockPropertyArgs_1.GroupByBlockPropertyArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], GroupByBlockPropertyResolver.prototype, "groupByBlockProperty", null);
GroupByBlockPropertyResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => BlockProperty_1.BlockProperty)
], GroupByBlockPropertyResolver);
exports.GroupByBlockPropertyResolver = GroupByBlockPropertyResolver;
