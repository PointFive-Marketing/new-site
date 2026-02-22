import { notFound } from "next/navigation"
import { getAllCaseStudySlugs, getCaseStudy } from "@/lib/blog"
import { PostLayout } from "@/components/blog/post-layout"

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getCaseStudy(slug)
  if (!post) return { title: "Case Study Not Found | PointFive" }

  return {
    title: `${post.title} | PointFive Case Studies`,
    description: post.excerpt,
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getCaseStudy(slug)
  if (!post) notFound()

  return (
    <PostLayout
      post={post}
      backHref="/case-studies"
      backLabel="Back to Case Studies"
    />
  )
}
