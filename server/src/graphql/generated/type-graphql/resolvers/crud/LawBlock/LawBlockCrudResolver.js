"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawBlockCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateLawBlockArgs_1 = require("./args/AggregateLawBlockArgs");
const CreateLawBlockArgs_1 = require("./args/CreateLawBlockArgs");
const CreateManyLawBlockArgs_1 = require("./args/CreateManyLawBlockArgs");
const DeleteLawBlockArgs_1 = require("./args/DeleteLawBlockArgs");
const DeleteManyLawBlockArgs_1 = require("./args/DeleteManyLawBlockArgs");
const FindFirstLawBlockArgs_1 = require("./args/FindFirstLawBlockArgs");
const FindManyLawBlockArgs_1 = require("./args/FindManyLawBlockArgs");
const FindUniqueLawBlockArgs_1 = require("./args/FindUniqueLawBlockArgs");
const GroupByLawBlockArgs_1 = require("./args/GroupByLawBlockArgs");
const UpdateLawBlockArgs_1 = require("./args/UpdateLawBlockArgs");
const UpdateManyLawBlockArgs_1 = require("./args/UpdateManyLawBlockArgs");
const UpsertLawBlockArgs_1 = require("./args/UpsertLawBlockArgs");
const helpers_1 = require("../../../helpers");
const LawBlock_1 = require("../../../models/LawBlock");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateLawBlock_1 = require("../../outputs/AggregateLawBlock");
const LawBlockGroupBy_1 = require("../../outputs/LawBlockGroupBy");
let LawBlockCrudResolver = class LawBlockCrudResolver {
    async lawBlock(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lawBlock.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstLawBlock(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lawBlock.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async lawBlocks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lawBlock.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createLawBlock(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lawBlock.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyLawBlock(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lawBlock.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteLawBlock(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lawBlock.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateLawBlock(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lawBlock.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyLawBlock(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lawBlock.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyLawBlock(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lawBlock.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertLawBlock(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lawBlock.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateLawBlock(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).lawBlock.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByLawBlock(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lawBlock.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => LawBlock_1.LawBlock, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindUniqueLawBlockArgs_1.FindUniqueLawBlockArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LawBlockCrudResolver.prototype, "lawBlock", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => LawBlock_1.LawBlock, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstLawBlockArgs_1.FindFirstLawBlockArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LawBlockCrudResolver.prototype, "findFirstLawBlock", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [LawBlock_1.LawBlock], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindManyLawBlockArgs_1.FindManyLawBlockArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LawBlockCrudResolver.prototype, "lawBlocks", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => LawBlock_1.LawBlock, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateLawBlockArgs_1.CreateLawBlockArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LawBlockCrudResolver.prototype, "createLawBlock", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateManyLawBlockArgs_1.CreateManyLawBlockArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LawBlockCrudResolver.prototype, "createManyLawBlock", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => LawBlock_1.LawBlock, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteLawBlockArgs_1.DeleteLawBlockArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LawBlockCrudResolver.prototype, "deleteLawBlock", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => LawBlock_1.LawBlock, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateLawBlockArgs_1.UpdateLawBlockArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LawBlockCrudResolver.prototype, "updateLawBlock", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteManyLawBlockArgs_1.DeleteManyLawBlockArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LawBlockCrudResolver.prototype, "deleteManyLawBlock", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateManyLawBlockArgs_1.UpdateManyLawBlockArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LawBlockCrudResolver.prototype, "updateManyLawBlock", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => LawBlock_1.LawBlock, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpsertLawBlockArgs_1.UpsertLawBlockArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LawBlockCrudResolver.prototype, "upsertLawBlock", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateLawBlock_1.AggregateLawBlock, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateLawBlockArgs_1.AggregateLawBlockArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LawBlockCrudResolver.prototype, "aggregateLawBlock", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [LawBlockGroupBy_1.LawBlockGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByLawBlockArgs_1.GroupByLawBlockArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LawBlockCrudResolver.prototype, "groupByLawBlock", null);
LawBlockCrudResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => LawBlock_1.LawBlock)
], LawBlockCrudResolver);
exports.LawBlockCrudResolver = LawBlockCrudResolver;
