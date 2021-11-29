import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class PostWhereInput {
    AND?: PostWhereInput[] | undefined;
    OR?: PostWhereInput[] | undefined;
    NOT?: PostWhereInput[] | undefined;
    id?: IntFilter | undefined;
    title?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    content?: StringNullableFilter | undefined;
    published?: BoolFilter | undefined;
    authorId?: StringFilter | undefined;
    User?: UserRelationFilter | undefined;
}
