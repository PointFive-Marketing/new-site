import { notFound } from "next/navigation"
import { getAllPressSlugs, getPressRelease } from "@/lib/blog"
import { PostLayout } from "@/components/blog/post-layout"

export async function generateStaticParams() {
  return getAllPressSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPressRelease(slug)
  if (!post) return { title: "Press Release Not Found | PointFive" }

  return {
    title: `${post.title} | PointFive Press`,
    description: post.excerpt,
  }
}

export default async function PressReleasePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPressRelease(slug)
  if (!post) notFound()

  return (
    <PostLayout
      post={post}
      backHref="/press"
      backLabel="Back to Press Releases"
    />
  )
}
