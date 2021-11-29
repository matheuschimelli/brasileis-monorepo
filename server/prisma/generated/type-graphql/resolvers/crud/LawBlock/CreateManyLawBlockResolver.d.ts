import { GraphQLResolveInfo } from "graphql";
import { CreateManyLawBlockArgs } from "./args/CreateManyLawBlockArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyLawBlockResolver {
    createManyLawBlock(ctx: any, info: GraphQLResolveInfo, args: CreateManyLawBlockArgs): Promise<AffectedRowsOutput>;
}
