import { promises as fs } from 'fs'
import { compileMDX } from 'next-mdx-remote/rsc'
import path from 'path'
import rehypeHighlight from 'rehype-highlight'
import { components } from '../components/mdx-components'

export type BlogFrontmatter = {
    title: string
    description: string
    excerpt?: string
    date: string
    author?: string
    tags?: string[]
    category?: string[]
    image?: string
}

const BLOGS_DIR = path.join(process.cwd(), 'content', 'blogs')

export const getSingleBlog = async (slug: string) => {
    try {
        const singleBlog = await fs.readFile(
            path.join(BLOGS_DIR, `${slug}.mdx`),
            'utf8'
        )
        if (!singleBlog) {
            throw new Error(`Blog with slug ${slug} not found`)
        }
        const { content, frontmatter } = await compileMDX<BlogFrontmatter>({
            source: singleBlog,
            options: {
                mdxOptions: {
                    format: 'mdx',
                    rehypePlugins: [rehypeHighlight],
                },
                parseFrontmatter: true,
            },
            components,
        })
        return { content, frontmatter }
    } catch (error) {
        console.error(`Error reading blog ${slug}:`, error)
        return null
    }
}

export const getAllBlogs = async () => {
    try {
        const files = await fs.readdir(BLOGS_DIR)
        const mdxFiles = files.filter(file => file.endsWith('.mdx'))
        
        const allBlogs = await Promise.all(
            mdxFiles.map(async (file) => {
                const slug = file.replace('.mdx', '')
                const frontmatter = await getBlogFrontmatterBySlug(slug)
                if (!frontmatter) return null
                return { slug, ...frontmatter }
            })
        )
        
        // Filter out null values and sort by date (newest first)
        return allBlogs
            .filter((blog): blog is NonNullable<typeof blog> => blog !== null)
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    } catch (error) {
        console.error('Error reading blogs:', error)
        return []
    }
}

export const getBlogFrontmatterBySlug = async (slug: string) => {
    try {
        const singleBlog = await fs.readFile(
            path.join(BLOGS_DIR, `${slug}.mdx`),
            'utf8'
        )
        if (!singleBlog) {
            throw new Error(`Blog with slug ${slug} not found`)
        }
        const { frontmatter } = await compileMDX<BlogFrontmatter>({
            source: singleBlog,
            options: {
                mdxOptions: {
                    format: 'mdx',
                },
                parseFrontmatter: true,
            },
            components,
        })
        return frontmatter
    } catch (error) {
        console.error(`Error reading frontmatter for ${slug}:`, error)
        return null
    }
}
