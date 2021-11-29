import { GraphQLResolveInfo } from "graphql";
import { UpdateLawBlockArgs } from "./args/UpdateLawBlockArgs";
import { LawBlock } from "../../../models/LawBlock";
export declare class UpdateLawBlockResolver {
    updateLawBlock(ctx: any, info: GraphQLResolveInfo, args: UpdateLawBlockArgs): Promise<LawBlock | null>;
}
