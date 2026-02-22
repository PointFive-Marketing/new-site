import { notFound } from "next/navigation"
import { getAllBlogSlugs, getBlogPost } from "@/lib/blog"
import { PostLayout } from "@/components/blog/post-layout"

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getBlogPost(slug)
  if (!post) return { title: "Post Not Found | PointFive" }

  return {
    title: `${post.title} | PointFive Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getBlogPost(slug)
  if (!post) notFound()

  return <PostLayout post={post} backHref="/blog" backLabel="Back to Blog" />
}
