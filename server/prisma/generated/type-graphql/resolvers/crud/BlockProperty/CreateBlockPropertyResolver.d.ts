import { GraphQLResolveInfo } from "graphql";
import { CreateBlockPropertyArgs } from "./args/CreateBlockPropertyArgs";
import { BlockProperty } from "../../../models/BlockProperty";
export declare class CreateBlockPropertyResolver {
    createBlockProperty(ctx: any, info: GraphQLResolveInfo, args: CreateBlockPropertyArgs): Promise<BlockProperty>;
}
