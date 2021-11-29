import { BoolFilter } from "../inputs/BoolFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { LawBlockRelationFilter } from "../inputs/LawBlockRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class BlockPropertyWhereInput {
    AND?: BlockPropertyWhereInput[] | undefined;
    OR?: BlockPropertyWhereInput[] | undefined;
    NOT?: BlockPropertyWhereInput[] | undefined;
    id?: StringFilter | undefined;
    value?: StringNullableFilter | undefined;
    title?: StringNullableFilter | undefined;
    number?: StringNullableFilter | undefined;
    identifier?: StringNullableFilter | undefined;
    comment?: StringNullableFilter | undefined;
    year?: IntNullableFilter | undefined;
    author?: StringNullableFilter | undefined;
    membersOnly?: BoolFilter | undefined;
    searchString?: StringNullableFilter | undefined;
    lawBlockId?: StringFilter | undefined;
    LawBlock?: LawBlockRelationFilter | undefined;
}
