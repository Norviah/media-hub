import { defineCollection, defineConfig } from '@content-collections/core';
import { compileMDX } from '@content-collections/mdx';

const posts = defineCollection({
  name: 'posts',
  directory: 'docs',
  include: '**/*.mdx',
  schema: (z) => ({
    title: z.string(),
    summary: z.string(),
    index: z.boolean().optional(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);

    return {
      ...document,
      slug: document.index
        ? undefined
        : encodeURI(document._meta.path.replace(/ /g, '-').toLowerCase()),
      mdx,
    };
  },
});

export default defineConfig({
  collections: [posts],
});
