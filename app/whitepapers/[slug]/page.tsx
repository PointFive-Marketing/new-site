import { notFound } from "next/navigation"
import { getAllWhitepaperSlugs, getWhitepaper } from "@/lib/blog"
import { PostLayout } from "@/components/blog/post-layout"

export async function generateStaticParams() {
  return getAllWhitepaperSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getWhitepaper(slug)
  if (!post) return { title: "Whitepaper Not Found | PointFive" }

  return {
    title: `${post.title} | PointFive Whitepapers`,
    description: post.excerpt,
  }
}

export default async function WhitepaperPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getWhitepaper(slug)
  if (!post) notFound()

  return <PostLayout post={post} backHref="/whitepapers" backLabel="Back to Whitepapers" />
}
