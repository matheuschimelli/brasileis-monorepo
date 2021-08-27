import { Client } from '@notionhq/client';

const notion = new Client({
  auth: 'secret_UsYhDjOgHWtBgRS8t8ZnfOajRVLUxwzA26GTVqAVccS',
});
export default async function getPage(pageId: string) {
  const page = await notion.blocks.children.list({
    block_id: pageId,
  });
  return page;
}
