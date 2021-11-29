import { GraphQLResolveInfo } from "graphql";
import { DeleteLawBlockArgs } from "./args/DeleteLawBlockArgs";
import { LawBlock } from "../../../models/LawBlock";
export declare class DeleteLawBlockResolver {
    deleteLawBlock(ctx: any, info: GraphQLResolveInfo, args: DeleteLawBlockArgs): Promise<LawBlock | null>;
}
