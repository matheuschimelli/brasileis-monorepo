import { GraphQLResolveInfo } from "graphql";
import { DeleteManyLawBlockArgs } from "./args/DeleteManyLawBlockArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyLawBlockResolver {
    deleteManyLawBlock(ctx: any, info: GraphQLResolveInfo, args: DeleteManyLawBlockArgs): Promise<AffectedRowsOutput>;
}
