import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Linkedin } from "lucide-react"
import { type Post, formatDate } from "@/lib/blog-types"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"

export function PostLayout({
  post,
  backHref,
  backLabel,
}: {
  post: Post
  backHref: string
  backLabel: string
}) {
  return (
    <main>
      <SiteHeader />

      {/* Hero */}
      <section className="bg-[#0A0A1A] py-14 md:py-20">
        <div className="mx-auto max-w-[800px] px-6">
          <Link
            href={backHref}
            className="inline-flex items-center gap-1.5 text-[13px] text-[#B4B4D0] transition-colors hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            {backLabel}
          </Link>

          {post.category && (
            <span className="mt-6 inline-block rounded-full bg-[#0000EE]/10 px-3 py-1 text-[12px] font-semibold text-[#0000EE]">
              {post.category}
            </span>
          )}

          <h1
            className="mt-4 font-bold leading-[1.1] tracking-tight text-white"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            {post.title}
          </h1>

          {/* Author + date */}
          <div className="mt-6 flex items-center gap-3">
            {post.authorPhoto && (
              <Image
                src={post.authorPhoto}
                alt={post.author}
                width={40}
                height={40}
                className="rounded-full"
              />
            )}
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[14px] font-medium text-white">
                  {post.author}
                </span>
                {post.authorLinkedin && (
                  <a
                    href={post.authorLinkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#B4B4D0] hover:text-white"
                  >
                    <Linkedin className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
              <div className="flex items-center gap-2 text-[13px] text-[#8888A8]">
                {post.authorTitle && <span>{post.authorTitle}</span>}
                {post.authorTitle && post.date && <span>·</span>}
                <span>{formatDate(post.date)}</span>
                {post.readingTime && (
                  <>
                    <span>·</span>
                    <span>{post.readingTime}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cover image */}
      {post.coverImage && (
        <div className="mx-auto max-w-[960px] px-6 -mt-1">
          <div className="relative aspect-[2/1] overflow-hidden rounded-lg border border-border">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 960px) 100vw, 960px"
              priority
            />
          </div>
        </div>
      )}

      {/* Body */}
      <article className="mx-auto max-w-[720px] px-6 py-12 md:py-16">
        <div
          className="prose prose-lg prose-neutral max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-[24px] prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-[20px] prose-h3:mt-8 prose-h3:mb-3 prose-p:text-[16px] prose-p:leading-relaxed prose-p:text-neutral-600 prose-a:text-[#0000EE] prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-img:rounded-lg prose-img:border prose-img:border-border prose-blockquote:border-l-[#0000EE] prose-blockquote:bg-[#0000EE]/[0.02] prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-code:bg-neutral-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-[14px] prose-code:before:content-none prose-code:after:content-none prose-pre:bg-[#0A0A1A] prose-pre:text-[#B4B4D0] prose-li:text-neutral-600"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>

      {/* Back link */}
      <div className="mx-auto max-w-[720px] px-6 pb-12">
        <Link
          href={backHref}
          className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#0000EE] transition-colors hover:text-[#0000CC]"
        >
          <ArrowLeft className="h-4 w-4" />
          {backLabel}
        </Link>
      </div>

      <Footer />
    </main>
  )
}
