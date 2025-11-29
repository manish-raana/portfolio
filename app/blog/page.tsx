import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllBlogs } from '../../utils/mdx';
import { formatDate, truncate } from '../../utils/formatting';
import { notFound } from 'next/navigation';
import { siteConfig, getAbsoluteUrl } from '../../utils/seo';

export const metadata: Metadata = {
    title: `Blog | ${siteConfig.name}`,
    description: 'Software engineering blogs, tutorials, and thoughts on web development, React, Next.js, and modern frontend technologies.',
    keywords: ['blog', 'software engineering', 'web development', 'React', 'Next.js', 'TypeScript', 'full stack development'],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: getAbsoluteUrl('/blog'),
        title: `Blog | ${siteConfig.name}`,
        description: 'Software engineering blogs, tutorials, and thoughts on web development.',
        siteName: siteConfig.name,
        images: [
            {
                url: getAbsoluteUrl(siteConfig.ogImage),
                width: 1200,
                height: 630,
                alt: siteConfig.name,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: `Blog | ${siteConfig.name}`,
        description: 'Software engineering blogs, tutorials, and thoughts on web development.',
        creator: '@ManishRaanaa',
        images: [getAbsoluteUrl(siteConfig.ogImage)],
    },
    alternates: {
        canonical: getAbsoluteUrl('/blog'),
    },
};

export default async function BlogPage() {
    const allBlogs = await getAllBlogs();

    if (!allBlogs || allBlogs.length === 0) {
        return notFound();
    }

    return (
        <div className="min-h-screen p-8 md:p-16 max-w-7xl mx-auto text-[var(--foreground)]">
            <header className="mb-12 text-center flex justify-center">
                <div className="inline-block bg-[var(--color-retro-peach)] border-2 border-[var(--color-border)] px-8 py-4 rounded-full transform -rotate-2 shadow-[4px_4px_0px_0px_var(--shadow-color)]">
                    <h1 className="text-5xl md:text-7xl font-bold text-[var(--foreground)]">
                        My <span className="text-white drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">Blogs</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-[var(--foreground)] font-bold mt-2">
                        Thoughts, updates, and random scribbles.
                    </p>
                </div>
            </header>

            <div className="grid gap-8 md:grid-cols-2">
                {allBlogs.map((blog, index) => (
                    <Link href={`/blog/${blog.slug}`} key={blog.slug} className="group">
                        <article
                            className={`neo-card h-full p-6 ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0`}
                        >
                            <div className="flex flex-col h-full">
                                <div className="mb-4">
                                   <span className="inline-block px-3 py-1 bg-[var(--color-retro-yellow)] border-2 border-black rounded-md text-sm font-bold text-black">
                                     {formatDate(blog.date)}
                                   </span>
                                </div>
                                <h2 className="text-2xl font-bold mb-2 text-[var(--foreground)] group-hover:underline decoration-wavy decoration-2 decoration-yellow-400 transition-all">
                                    {blog.title}
                                </h2>
                                <p className="text-[var(--foreground)]/80 mb-4 grow font-medium">
                                    {truncate(blog.excerpt || blog.description, 150)}
                                </p>
                                <div className="text-[var(--foreground)] font-bold group-hover:translate-x-2 transition-transform inline-flex items-center gap-1">
                                    Read more &rarr;
                                </div>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>

            <div className="mt-12 text-center">
                <Link
                    href="/"
                    className="neo-pill inline-block text-xl transform -rotate-1"
                >
                    &larr; Back to Home
                </Link>
            </div>
        </div>
    );
}
