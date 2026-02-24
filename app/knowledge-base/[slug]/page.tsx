import { notFound } from "next/navigation"
import { getAllKnowledgeBaseSlugs, getKnowledgeBaseItem } from "@/lib/blog"
import { PostLayout } from "@/components/blog/post-layout"

export async function generateStaticParams() {
  return getAllKnowledgeBaseSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getKnowledgeBaseItem(slug)
  if (!post) return { title: "Not Found | PointFive Knowledge Base" }

  return {
    title: `${post.title} | PointFive Knowledge Base`,
    description: post.excerpt,
  }
}

export default async function KnowledgeBaseItemPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getKnowledgeBaseItem(slug)
  if (!post) notFound()

  return (
    <PostLayout
      post={post}
      backHref="/knowledge-base"
      backLabel="Back to Knowledge Base"
    />
  )
}
