export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    content: string;
}

export const blogPosts: BlogPost[] = [
    {
        slug: 'hello-world',
        title: 'Hello World! Welcome to my Doodle Portfolio',
        date: '2025-11-29',
        excerpt: 'This is the first post on my new portfolio website. I decided to go with a fun, hand-drawn aesthetic.',
        content: `
      <p>Welcome to my new portfolio! I've been working on this for a while and I'm really excited to share it with you.</p>
      <p>I wanted to create something that felt personal and creative, so I decided to go with a "doodle" aesthetic. Everything is meant to look a bit sketchy and hand-drawn.</p>
      <p>I built this site using Next.js and Tailwind CSS. It's been a fun project to work on and I've learned a lot along the way.</p>
      <p>Stay tuned for more updates!</p>
    `,
    },
    {
        slug: 'why-nextjs',
        title: 'Why I Chose Next.js for My Portfolio',
        date: '2025-11-28',
        excerpt: 'Next.js offers a great developer experience and excellent performance out of the box.',
        content: `
      <p>When I was deciding on a framework for my portfolio, I knew I wanted to use React. But I also wanted something that would handle routing and server-side rendering for me.</p>
      <p>Next.js was the obvious choice. It's easy to set up, has great documentation, and the performance is top-notch.</p>
      <p>I'm using the App Router in Next.js 14, which has been a bit of a learning curve, but I'm really enjoying the new features like Server Components.</p>
    `,
    },
    {
        slug: 'designing-with-tailwind',
        title: 'Designing with Tailwind CSS',
        date: '2025-11-27',
        excerpt: 'Tailwind CSS makes it incredibly easy to style your application without leaving your HTML.',
        content: `
      <p>I've been using Tailwind CSS for a few years now and I absolutely love it. It speeds up my development workflow so much.</p>
      <p>For this portfolio, I'm using Tailwind to create all the custom styles, including the "sketchy" borders and pastel colors.</p>
      <p>It's amazing how much you can achieve with just utility classes!</p>
    `,
    },
];

export function getBlogPosts(): BlogPost[] {
    return blogPosts;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find((post) => post.slug === slug);
}

export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}
