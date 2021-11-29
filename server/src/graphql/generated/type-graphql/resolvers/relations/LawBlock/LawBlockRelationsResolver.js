"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawBlockRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlockProperty_1 = require("../../../models/BlockProperty");
const LawBlock_1 = require("../../../models/LawBlock");
const LawBlockContentArgs_1 = require("./args/LawBlockContentArgs");
const helpers_1 = require("../../../helpers");
let LawBlockRelationsResolver = class LawBlockRelationsResolver {
    async content(lawBlock, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).lawBlock.findUnique({
            where: {
                id: lawBlock.id,
            },
        }).content(args);
    }
    async properties(lawBlock, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).lawBlock.findUnique({
            where: {
                id: lawBlock.id,
            },
        }).properties({});
    }
    async LawBlock(lawBlock, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).lawBlock.findUnique({
            where: {
                id: lawBlock.id,
            },
        }).LawBlock({});
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => [LawBlock_1.LawBlock], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [LawBlock_1.LawBlock, Object, LawBlockContentArgs_1.LawBlockContentArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LawBlockRelationsResolver.prototype, "content", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => BlockProperty_1.BlockProperty, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [LawBlock_1.LawBlock, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LawBlockRelationsResolver.prototype, "properties", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => LawBlock_1.LawBlock, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [LawBlock_1.LawBlock, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LawBlockRelationsResolver.prototype, "LawBlock", null);
LawBlockRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => LawBlock_1.LawBlock)
], LawBlockRelationsResolver);
exports.LawBlockRelationsResolver = LawBlockRelationsResolver;
