import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class PostScalarWhereWithAggregatesInput {
    AND?: PostScalarWhereWithAggregatesInput[] | undefined;
    OR?: PostScalarWhereWithAggregatesInput[] | undefined;
    NOT?: PostScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    title?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    content?: StringNullableWithAggregatesFilter | undefined;
    published?: BoolWithAggregatesFilter | undefined;
    authorId?: StringWithAggregatesFilter | undefined;
}
