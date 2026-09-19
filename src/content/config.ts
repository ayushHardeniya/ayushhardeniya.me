import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    cover: image().optional(), // for optimized cover image
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  })
});

export const collections = { blog };
