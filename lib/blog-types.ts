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

export function formatDate(dateString: string): string {
  if (!dateString) return ""
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
