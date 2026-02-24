import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"
import type { PostMeta, Post } from "./blog-types"

export type { PostMeta, Post }
export { formatDate } from "./blog-types"

const BLOG_DIR = path.join(process.cwd(), "content/blog")
const CASE_STUDIES_DIR = path.join(process.cwd(), "content/case-studies")
const PRESS_DIR = path.join(process.cwd(), "content/press")
const PRODUCT_RELEASES_DIR = path.join(process.cwd(), "content/product-releases")
const WHITEPAPERS_DIR = path.join(process.cwd(), "content/whitepapers")
const KNOWLEDGE_BASE_DIR = path.join(process.cwd(), "content/knowledge-base")

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

// Filtered blog posts (excludes Newsletter category)
export function getFilteredBlogPosts(): PostMeta[] {
  return getAllBlogPosts().filter((p) => p.category !== "Newsletter")
}

// Blog categories (excludes Newsletter)
export function getBlogCategories(): string[] {
  const posts = getFilteredBlogPosts()
  const cats = new Set(posts.map((p) => p.category).filter(Boolean) as string[])
  return Array.from(cats).sort()
}

// Whitepapers
export function getAllWhitepapers(): PostMeta[] {
  return getPostsFromDir(WHITEPAPERS_DIR)
}

export async function getWhitepaper(slug: string): Promise<Post | null> {
  return getPostFromDir(WHITEPAPERS_DIR, slug)
}

export function getAllWhitepaperSlugs(): string[] {
  if (!fs.existsSync(WHITEPAPERS_DIR)) return []
  return fs
    .readdirSync(WHITEPAPERS_DIR)
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

// Product releases
export function getAllProductReleases(): PostMeta[] {
  return getPostsFromDir(PRODUCT_RELEASES_DIR)
}

export async function getProductRelease(slug: string): Promise<Post | null> {
  return getPostFromDir(PRODUCT_RELEASES_DIR, slug)
}

export function getAllProductReleaseSlugs(): string[] {
  if (!fs.existsSync(PRODUCT_RELEASES_DIR)) return []
  return fs
    .readdirSync(PRODUCT_RELEASES_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""))
}

// Knowledge base
export function getAllKnowledgeBaseItems(): PostMeta[] {
  return getPostsFromDir(KNOWLEDGE_BASE_DIR)
}

export async function getKnowledgeBaseItem(slug: string): Promise<Post | null> {
  return getPostFromDir(KNOWLEDGE_BASE_DIR, slug)
}

export function getAllKnowledgeBaseSlugs(): string[] {
  if (!fs.existsSync(KNOWLEDGE_BASE_DIR)) return []
  return fs
    .readdirSync(KNOWLEDGE_BASE_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""))
}

export function getKnowledgeBaseCategories(): string[] {
  const posts = getAllKnowledgeBaseItems()
  const cats = new Set(posts.map((p) => p.category).filter(Boolean) as string[])
  return Array.from(cats).sort()
}

