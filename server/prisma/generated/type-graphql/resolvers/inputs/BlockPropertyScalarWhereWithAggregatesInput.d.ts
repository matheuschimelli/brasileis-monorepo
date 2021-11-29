import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class BlockPropertyScalarWhereWithAggregatesInput {
    AND?: BlockPropertyScalarWhereWithAggregatesInput[] | undefined;
    OR?: BlockPropertyScalarWhereWithAggregatesInput[] | undefined;
    NOT?: BlockPropertyScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    value?: StringNullableWithAggregatesFilter | undefined;
    title?: StringNullableWithAggregatesFilter | undefined;
    number?: StringNullableWithAggregatesFilter | undefined;
    identifier?: StringNullableWithAggregatesFilter | undefined;
    comment?: StringNullableWithAggregatesFilter | undefined;
    year?: IntNullableWithAggregatesFilter | undefined;
    author?: StringNullableWithAggregatesFilter | undefined;
    membersOnly?: BoolWithAggregatesFilter | undefined;
    searchString?: StringNullableWithAggregatesFilter | undefined;
    lawBlockId?: StringWithAggregatesFilter | undefined;
}
