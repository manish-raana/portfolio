import { MetadataRoute } from 'next';
import { siteConfig, getAbsoluteUrl } from '../utils/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
