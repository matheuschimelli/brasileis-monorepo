"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockPropertyRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlockProperty_1 = require("../../../models/BlockProperty");
const LawBlock_1 = require("../../../models/LawBlock");
const helpers_1 = require("../../../helpers");
let BlockPropertyRelationsResolver = class BlockPropertyRelationsResolver {
    async LawBlock(blockProperty, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).blockProperty.findUnique({
            where: {
                id: blockProperty.id,
            },
        }).LawBlock({});
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => LawBlock_1.LawBlock, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [BlockProperty_1.BlockProperty, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], BlockPropertyRelationsResolver.prototype, "LawBlock", null);
BlockPropertyRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => BlockProperty_1.BlockProperty)
], BlockPropertyRelationsResolver);
exports.BlockPropertyRelationsResolver = BlockPropertyRelationsResolver;
