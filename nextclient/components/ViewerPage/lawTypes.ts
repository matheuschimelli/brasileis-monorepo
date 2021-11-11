export interface ArticleBlock {
    id: string;
    code: string; //relationship

    properties: {
        title: string
    },

    type: 'ARTICLE' | 'INCISE' | 'PARAGRAPH' | 'ALIENEA';
    number: string;
    content: [];
    parent?: ArticleBlock['id'];

    text: string;
    paragraphs?: ArticleBlock[];
    incises?: ArticleBlock[];
    alineas?: ArticleBlock[];

    createdAt: Date;
    updatedAt: Date;

    crawlerId: string; //relationship


}