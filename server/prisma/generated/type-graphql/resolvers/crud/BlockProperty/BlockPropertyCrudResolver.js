"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockPropertyCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateBlockPropertyArgs_1 = require("./args/AggregateBlockPropertyArgs");
const CreateBlockPropertyArgs_1 = require("./args/CreateBlockPropertyArgs");
const CreateManyBlockPropertyArgs_1 = require("./args/CreateManyBlockPropertyArgs");
const DeleteBlockPropertyArgs_1 = require("./args/DeleteBlockPropertyArgs");
const DeleteManyBlockPropertyArgs_1 = require("./args/DeleteManyBlockPropertyArgs");
const FindFirstBlockPropertyArgs_1 = require("./args/FindFirstBlockPropertyArgs");
const FindManyBlockPropertyArgs_1 = require("./args/FindManyBlockPropertyArgs");
const FindUniqueBlockPropertyArgs_1 = require("./args/FindUniqueBlockPropertyArgs");
const GroupByBlockPropertyArgs_1 = require("./args/GroupByBlockPropertyArgs");
const UpdateBlockPropertyArgs_1 = require("./args/UpdateBlockPropertyArgs");
const UpdateManyBlockPropertyArgs_1 = require("./args/UpdateManyBlockPropertyArgs");
const UpsertBlockPropertyArgs_1 = require("./args/UpsertBlockPropertyArgs");
const helpers_1 = require("../../../helpers");
const BlockProperty_1 = require("../../../models/BlockProperty");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateBlockProperty_1 = require("../../outputs/AggregateBlockProperty");
const BlockPropertyGroupBy_1 = require("../../outputs/BlockPropertyGroupBy");
let BlockPropertyCrudResolver = class BlockPropertyCrudResolver {
    async blockProperty(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).blockProperty.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstBlockProperty(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).blockProperty.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async blockProperties(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).blockProperty.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createBlockProperty(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).blockProperty.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyBlockProperty(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).blockProperty.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteBlockProperty(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).blockProperty.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateBlockProperty(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).blockProperty.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyBlockProperty(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).blockProperty.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyBlockProperty(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).blockProperty.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertBlockProperty(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).blockProperty.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateBlockProperty(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).blockProperty.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByBlockProperty(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).blockProperty.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
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
], BlockPropertyCrudResolver.prototype, "blockProperty", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => BlockProperty_1.BlockProperty, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstBlockPropertyArgs_1.FindFirstBlockPropertyArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], BlockPropertyCrudResolver.prototype, "findFirstBlockProperty", null);
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
], BlockPropertyCrudResolver.prototype, "blockProperties", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => BlockProperty_1.BlockProperty, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateBlockPropertyArgs_1.CreateBlockPropertyArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], BlockPropertyCrudResolver.prototype, "createBlockProperty", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateManyBlockPropertyArgs_1.CreateManyBlockPropertyArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], BlockPropertyCrudResolver.prototype, "createManyBlockProperty", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => BlockProperty_1.BlockProperty, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteBlockPropertyArgs_1.DeleteBlockPropertyArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], BlockPropertyCrudResolver.prototype, "deleteBlockProperty", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => BlockProperty_1.BlockProperty, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateBlockPropertyArgs_1.UpdateBlockPropertyArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], BlockPropertyCrudResolver.prototype, "updateBlockProperty", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteManyBlockPropertyArgs_1.DeleteManyBlockPropertyArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], BlockPropertyCrudResolver.prototype, "deleteManyBlockProperty", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateManyBlockPropertyArgs_1.UpdateManyBlockPropertyArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], BlockPropertyCrudResolver.prototype, "updateManyBlockProperty", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => BlockProperty_1.BlockProperty, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpsertBlockPropertyArgs_1.UpsertBlockPropertyArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], BlockPropertyCrudResolver.prototype, "upsertBlockProperty", null);
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
], BlockPropertyCrudResolver.prototype, "aggregateBlockProperty", null);
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
], BlockPropertyCrudResolver.prototype, "groupByBlockProperty", null);
BlockPropertyCrudResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => BlockProperty_1.BlockProperty)
], BlockPropertyCrudResolver);
exports.BlockPropertyCrudResolver = BlockPropertyCrudResolver;
