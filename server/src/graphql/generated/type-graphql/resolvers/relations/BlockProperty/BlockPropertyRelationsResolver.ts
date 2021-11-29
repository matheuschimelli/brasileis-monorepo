import * as TypeGraphQL from "type-graphql";
import { BlockProperty } from "../../../models/BlockProperty";
import { LawBlock } from "../../../models/LawBlock";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BlockProperty)
export class BlockPropertyRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => LawBlock, {
    nullable: false
  })
  async LawBlock(@TypeGraphQL.Root() blockProperty: BlockProperty, @TypeGraphQL.Ctx() ctx: any): Promise<LawBlock> {
    return getPrismaFromContext(ctx).blockProperty.findUnique({
      where: {
        id: blockProperty.id,
      },
    }).LawBlock({});
  }
}
