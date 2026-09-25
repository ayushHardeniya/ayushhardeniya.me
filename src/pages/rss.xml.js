import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');

  return rss({
    title: 'Ayush Hardeniya',
    description: 'Writing about Linux, systems, and what I learn building software.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.slug.replace(/^\d{4}-\d{2}-\d{2}-/, '')}/`,
    })),
  });
}