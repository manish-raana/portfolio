import { notFound, redirect } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getSingleBlog, getBlogFrontmatterBySlug } from '../../../utils/mdx';
import { formatDate } from '../../../utils/formatting';
import { generateBlogMetadata, generateBlogStructuredData } from '../../../utils/seo';

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const slug = (await params).slug;
    const frontmatter = await getBlogFrontmatterBySlug(slug);

    if (!frontmatter) {
        return {
            title: 'Blog not found',
        };
    }

    return generateBlogMetadata({
        title: frontmatter.title,
        description: frontmatter.description,
        date: frontmatter.date,
        image: frontmatter.image,
        slug,
        tags: frontmatter.tags,
    });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const blog = await getSingleBlog(slug);

    if (!blog) {
        redirect('/blog');
    }

    const { content, frontmatter } = blog;
    const structuredData = generateBlogStructuredData({
        title: frontmatter.title,
        description: frontmatter.description,
        date: frontmatter.date,
        image: frontmatter.image,
        slug,
        author: frontmatter.author,
    });

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <div className="min-h-screen p-8 md:p-16 max-w-6xl mx-auto text-[var(--foreground)]">
            <Link
                href="/blog"
                className="neo-pill inline-block mb-8 text-sm"
            >
                &larr; Back to Blog
            </Link>

            <article className="neo-card p-8 md:p-12 bg-white dark:bg-gray-900" itemScope itemType="https://schema.org/BlogPosting">
                <header className="mb-8 border-b-2 border-dashed border-[var(--color-border)] pb-8">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[var(--foreground)]" itemProp="headline">{frontmatter.title}</h1>
                    <div className="flex flex-wrap items-center gap-4 text-[var(--foreground)]/80 font-bold text-lg">
                        <span className="inline-block px-3 py-1 bg-[var(--color-retro-yellow)] border-2 border-black rounded-md text-sm font-bold text-black">
                             <time dateTime={frontmatter.date} itemProp="datePublished">
                                {formatDate(frontmatter.date)}
                            </time>
                        </span>
                        
                        {frontmatter.author && (
                            <div className="flex items-center gap-2" itemProp="author" itemScope itemType="https://schema.org/Person">
                                <span>by</span> <span itemProp="name" className="underline decoration-wavy">{frontmatter.author}</span>
                            </div>
                        )}
                    </div>
                    
                    {frontmatter.tags && frontmatter.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-6">
                            {frontmatter.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 bg-[var(--color-retro-sage)] border-2 border-[var(--color-border)] rounded-full text-sm font-bold text-[var(--foreground)] shadow-[2px_2px_0px_0px_var(--shadow-color)]"
                                    itemProp="keywords"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}
                </header>

                <div className="max-w-none prose dark:prose-invert prose-lg" itemProp="articleBody">
                    {content}
                </div>
                <meta itemProp="description" content={frontmatter.description} />
            </article>

            <div className="mt-12 text-center">
                <Link
                    href="/"
                    className="neo-pill inline-block text-xl"
                >
                    Go Home
                </Link>
            </div>
        </div>
        </>
    );
}
