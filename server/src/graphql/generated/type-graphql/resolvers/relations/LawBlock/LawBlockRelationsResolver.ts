import * as TypeGraphQL from "type-graphql";
import { BlockProperty } from "../../../models/BlockProperty";
import { LawBlock } from "../../../models/LawBlock";
import { LawBlockContentArgs } from "./args/LawBlockContentArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LawBlock)
export class LawBlockRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [LawBlock], {
    nullable: false
  })
  async content(@TypeGraphQL.Root() lawBlock: LawBlock, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: LawBlockContentArgs): Promise<LawBlock[]> {
    return getPrismaFromContext(ctx).lawBlock.findUnique({
      where: {
        id: lawBlock.id,
      },
    }).content(args);
  }

  @TypeGraphQL.FieldResolver(_type => BlockProperty, {
    nullable: true
  })
  async properties(@TypeGraphQL.Root() lawBlock: LawBlock, @TypeGraphQL.Ctx() ctx: any): Promise<BlockProperty | null> {
    return getPrismaFromContext(ctx).lawBlock.findUnique({
      where: {
        id: lawBlock.id,
      },
    }).properties({});
  }

  @TypeGraphQL.FieldResolver(_type => LawBlock, {
    nullable: true
  })
  async LawBlock(@TypeGraphQL.Root() lawBlock: LawBlock, @TypeGraphQL.Ctx() ctx: any): Promise<LawBlock | null> {
    return getPrismaFromContext(ctx).lawBlock.findUnique({
      where: {
        id: lawBlock.id,
      },
    }).LawBlock({});
  }
}
