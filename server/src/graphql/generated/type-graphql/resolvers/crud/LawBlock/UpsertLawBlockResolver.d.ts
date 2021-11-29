import { GraphQLResolveInfo } from "graphql";
import { UpsertLawBlockArgs } from "./args/UpsertLawBlockArgs";
import { LawBlock } from "../../../models/LawBlock";
export declare class UpsertLawBlockResolver {
    upsertLawBlock(ctx: any, info: GraphQLResolveInfo, args: UpsertLawBlockArgs): Promise<LawBlock>;
}
