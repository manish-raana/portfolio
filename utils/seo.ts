export const siteConfig = {
  name: 'Manish Rana',
  description: 'Full Stack Developer with ~7 years of experience in building scalable, high-performance web applications.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://manishrana.dev',
  ogImage: '/mkart.png',
  links: {
    twitter: 'https://twitter.com/ManishRaanaa',
    linkedin: 'https://www.linkedin.com/in/manishraana/',
    email: 'mkrana173@gmail.com',
  },
};

export function getAbsoluteUrl(path: string): string {
  return `${siteConfig.url}${path}`;
}

export function generateBlogMetadata({
  title,
  description,
  date,
  image,
  slug,
  tags = [],
}: {
  title: string;
  description: string;
  date: string;
  image?: string;
  slug: string;
  tags?: string[];
}) {
  const url = getAbsoluteUrl(`/blog/${slug}`);
  const ogImage = image ? getAbsoluteUrl(image) : getAbsoluteUrl(siteConfig.ogImage);
  const publishedTime = new Date(date).toISOString();

  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    keywords: tags.length > 0 ? tags.join(', ') : undefined,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url,
      title,
      description,
      siteName: siteConfig.name,
      publishedTime,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@ManishRaanaa',
      images: [ogImage],
    },
    alternates: {
      canonical: url,
    },
  };
}

export function generateBlogStructuredData({
  title,
  description,
  date,
  image,
  slug,
  author = siteConfig.name,
}: {
  title: string;
  description: string;
  date: string;
  image?: string;
  slug: string;
  author?: string;
}) {
  const url = getAbsoluteUrl(`/blog/${slug}`);
  const imageUrl = image ? getAbsoluteUrl(image) : getAbsoluteUrl(siteConfig.ogImage);
  const publishedTime = new Date(date).toISOString();

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    image: imageUrl,
    datePublished: publishedTime,
    dateModified: publishedTime,
    author: {
      '@type': 'Person',
      name: author,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    url,
  };
}
