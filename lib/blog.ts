import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

const BLOG_DIR = path.join(process.cwd(), "content/blog")
const CASE_STUDIES_DIR = path.join(process.cwd(), "content/case-studies")
const PRESS_DIR = path.join(process.cwd(), "content/press")

export interface PostMeta {
  slug: string
  title: string
  date: string
  author: string
  authorTitle?: string
  authorLinkedin?: string
  authorPhoto?: string
  excerpt: string
  coverImage?: string
  category?: string
  tags?: string[]
  readingTime?: string
}

export interface Post extends PostMeta {
  content: string
  contentHtml: string
}

function getPostsFromDir(dir: string): PostMeta[] {
  if (!fs.existsSync(dir)) return []

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"))

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "")
    const filePath = path.join(dir, filename)
    const fileContent = fs.readFileSync(filePath, "utf-8")
    const { data } = matter(fileContent)

    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      author: data.author || "PointFive Team",
      authorTitle: data.authorTitle,
      authorLinkedin: data.authorLinkedin,
      authorPhoto: data.authorPhoto,
      excerpt: data.excerpt || "",
      coverImage: data.coverImage,
      category: data.category,
      tags: data.tags,
      readingTime: data.readingTime,
    }
  })

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

async function getPostFromDir(
  dir: string,
  slug: string
): Promise<Post | null> {
  const filePath = path.join(dir, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null

  const fileContent = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(fileContent)

  const processedContent = await remark().use(html).process(content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    author: data.author || "PointFive Team",
    authorTitle: data.authorTitle,
    authorLinkedin: data.authorLinkedin,
    authorPhoto: data.authorPhoto,
    excerpt: data.excerpt || "",
    coverImage: data.coverImage,
    category: data.category,
    tags: data.tags,
    readingTime: data.readingTime,
    content,
    contentHtml,
  }
}

// Blog posts
export function getAllBlogPosts(): PostMeta[] {
  return getPostsFromDir(BLOG_DIR)
}

export async function getBlogPost(slug: string): Promise<Post | null> {
  return getPostFromDir(BLOG_DIR, slug)
}

export function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""))
}

// Case studies
export function getAllCaseStudies(): PostMeta[] {
  return getPostsFromDir(CASE_STUDIES_DIR)
}

export async function getCaseStudy(slug: string): Promise<Post | null> {
  return getPostFromDir(CASE_STUDIES_DIR, slug)
}

export function getAllCaseStudySlugs(): string[] {
  if (!fs.existsSync(CASE_STUDIES_DIR)) return []
  return fs
    .readdirSync(CASE_STUDIES_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""))
}

// Press releases
export function getAllPressReleases(): PostMeta[] {
  return getPostsFromDir(PRESS_DIR)
}

export async function getPressRelease(slug: string): Promise<Post | null> {
  return getPostFromDir(PRESS_DIR, slug)
}

export function getAllPressSlugs(): string[] {
  if (!fs.existsSync(PRESS_DIR)) return []
  return fs
    .readdirSync(PRESS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""))
}

// Utility
export function formatDate(dateString: string): string {
  if (!dateString) return ""
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
