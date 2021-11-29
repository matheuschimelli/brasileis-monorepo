import { GraphQLResolveInfo } from "graphql";
import { CreateLawBlockArgs } from "./args/CreateLawBlockArgs";
import { LawBlock } from "../../../models/LawBlock";
export declare class CreateLawBlockResolver {
    createLawBlock(ctx: any, info: GraphQLResolveInfo, args: CreateLawBlockArgs): Promise<LawBlock>;
}
