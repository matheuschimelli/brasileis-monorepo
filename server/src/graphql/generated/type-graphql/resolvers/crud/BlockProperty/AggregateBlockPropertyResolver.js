"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateBlockPropertyResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateBlockPropertyArgs_1 = require("./args/AggregateBlockPropertyArgs");
const BlockProperty_1 = require("../../../models/BlockProperty");
const AggregateBlockProperty_1 = require("../../outputs/AggregateBlockProperty");
const helpers_1 = require("../../../helpers");
let AggregateBlockPropertyResolver = class AggregateBlockPropertyResolver {
    async aggregateBlockProperty(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).blockProperty.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateBlockProperty_1.AggregateBlockProperty, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateBlockPropertyArgs_1.AggregateBlockPropertyArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AggregateBlockPropertyResolver.prototype, "aggregateBlockProperty", null);
AggregateBlockPropertyResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => BlockProperty_1.BlockProperty)
], AggregateBlockPropertyResolver);
exports.AggregateBlockPropertyResolver = AggregateBlockPropertyResolver;
