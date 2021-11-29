import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteLawBlockArgs } from "./args/DeleteLawBlockArgs";
import { LawBlock } from "../../../models/LawBlock";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LawBlock)
export class DeleteLawBlockResolver {
  @TypeGraphQL.Mutation(_returns => LawBlock, {
    nullable: true
  })
  async deleteLawBlock(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteLawBlockArgs): Promise<LawBlock | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).lawBlock.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
