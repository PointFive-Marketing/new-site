import { notFound } from "next/navigation"
import { getAllProductReleaseSlugs, getProductRelease } from "@/lib/blog"
import { PostLayout } from "@/components/blog/post-layout"

export async function generateStaticParams() {
  return getAllProductReleaseSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getProductRelease(slug)
  if (!post) return { title: "Product Release Not Found | PointFive" }

  return {
    title: `${post.title} | PointFive Product Releases`,
    description: post.excerpt,
  }
}

export default async function ProductReleasePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getProductRelease(slug)
  if (!post) notFound()

  return (
    <PostLayout
      post={post}
      backHref="/product-releases"
      backLabel="Back to Product Releases"
    />
  )
}
