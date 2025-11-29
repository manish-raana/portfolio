import Link from "next/link";
import { getAllBlogs } from "../utils/mdx";
import { formatDate } from "../utils/formatting";

export default async function BlogSection() {
  const blogs = await getAllBlogs();
  const recentBlogs = blogs.slice(0, 2);

  return (
    <section className="mb-16">
      <div className="flex justify-center mb-12">
        <div className="inline-block bg-[var(--color-retro-peach)] border-2 border-[var(--color-border)] px-8 py-3 rounded-full transform rotate-1 shadow-[4px_4px_0px_0px_var(--shadow-color)]">
          <h2 className="text-4xl font-bold text-[var(--foreground)] flex items-center gap-3">
             <span className="text-4xl">✍️</span> Recent Blogs
          </h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8 px-4">
        {recentBlogs.map((blog, index) => (
          <Link href={`/blog/${blog.slug}`} key={blog.slug} className="group h-full">
            <article
              className={`neo-card h-full p-6 ${index % 2 === 0 ? 'rotate-1-ccw' : 'rotate-1-cw'} hover:rotate-0`}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                   <span className="inline-block px-3 py-1 bg-[var(--color-retro-yellow)] border-2 border-black rounded-md text-sm font-bold text-black">
                     {formatDate(blog.date)}
                   </span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-[var(--foreground)] group-hover:underline decoration-wavy decoration-2 decoration-yellow-400 transition-all">
                  {blog.title}
                </h3>
                <p className="text-[var(--foreground)]/80 mb-4 grow font-medium line-clamp-3">
                  {blog.excerpt || blog.description}
                </p>
                <div className="text-[var(--foreground)] font-bold group-hover:translate-x-2 transition-transform inline-flex items-center gap-1">
                  Read more <span>&rarr;</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/blog"
          className="neo-pill inline-block text-lg"
        >
          Check more &rarr;
        </Link>
      </div>
    </section>
  );
}
