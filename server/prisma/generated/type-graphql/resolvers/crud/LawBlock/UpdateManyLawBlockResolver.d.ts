import { GraphQLResolveInfo } from "graphql";
import { UpdateManyLawBlockArgs } from "./args/UpdateManyLawBlockArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyLawBlockResolver {
    updateManyLawBlock(ctx: any, info: GraphQLResolveInfo, args: UpdateManyLawBlockArgs): Promise<AffectedRowsOutput>;
}
