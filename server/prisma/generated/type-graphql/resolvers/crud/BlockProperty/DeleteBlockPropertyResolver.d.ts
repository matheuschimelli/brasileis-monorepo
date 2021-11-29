import { GraphQLResolveInfo } from "graphql";
import { DeleteBlockPropertyArgs } from "./args/DeleteBlockPropertyArgs";
import { BlockProperty } from "../../../models/BlockProperty";
export declare class DeleteBlockPropertyResolver {
    deleteBlockProperty(ctx: any, info: GraphQLResolveInfo, args: DeleteBlockPropertyArgs): Promise<BlockProperty | null>;
}
