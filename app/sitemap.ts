import { MetadataRoute } from 'next';
import { getAllBlogs } from '../utils/mdx';
import { siteConfig, getAbsoluteUrl } from '../utils/seo';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await getAllBlogs();

  const blogEntries: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: getAbsoluteUrl(`/blog/${blog.slug}`),
    lastModified: new Date(blog.date),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: getAbsoluteUrl('/'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: getAbsoluteUrl('/blog'),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...blogEntries,
  ];
}
