import { BlockPropertyRelationFilter } from "../inputs/BlockPropertyRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumBlockTypeFilter } from "../inputs/EnumBlockTypeFilter";
import { LawBlockListRelationFilter } from "../inputs/LawBlockListRelationFilter";
import { LawBlockRelationFilter } from "../inputs/LawBlockRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class LawBlockWhereInput {
    AND?: LawBlockWhereInput[] | undefined;
    OR?: LawBlockWhereInput[] | undefined;
    NOT?: LawBlockWhereInput[] | undefined;
    id?: StringFilter | undefined;
    type?: EnumBlockTypeFilter | undefined;
    content?: LawBlockListRelationFilter | undefined;
    properties?: BlockPropertyRelationFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    LawBlock?: LawBlockRelationFilter | undefined;
    lawBlockId?: StringNullableFilter | undefined;
}
