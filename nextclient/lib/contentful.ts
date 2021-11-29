import { createClient } from 'contentful';

const client = createClient({
    space: process.env.CF_SPACE_ID!, // ID of a Compose-compatible space to be used \
    accessToken: process.env.CF_DELIVERY_ACCESS_TOKEN!, // delivery API key for the space \
});

type GetPageParams = {
    pageContentType: string;
    slug: string;
};

export default async function getPage(params: GetPageParams) {
    const query = {
        limit: 1,
        include: 10,
        'fields.slug': params.slug,
        content_type: params.pageContentType,

    };
    const { items: [page] } = await client.getEntries(query);
    return page || null;
}