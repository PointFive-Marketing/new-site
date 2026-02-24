import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { type PostMeta, formatDate } from "@/lib/blog-types"

export function BlogCard({
  post,
  basePath = "/blog",
  featured = false,
  onCategoryClick,
}: {
  post: PostMeta
  basePath?: string
  featured?: boolean
  onCategoryClick?: (category: string) => void
}) {
  return (
    <Link
      href={`${basePath}/${post.slug}`}
      className={`group flex flex-col overflow-hidden rounded-lg border border-border bg-white transition-all hover:border-[#0000EE]/20 hover:shadow-lg hover:shadow-[#0000EE]/5 ${
        featured ? "md:flex-row" : ""
      }`}
    >
      {/* Cover image */}
      {post.coverImage && (
        <div
          className={`relative overflow-hidden bg-neutral-100 ${
            featured ? "aspect-[16/9] md:aspect-auto md:w-1/2" : "aspect-[16/9]"
          }`}
        >
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes={
              featured
                ? "(max-width: 768px) 100vw, 50vw"
                : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            }
          />
        </div>
      )}

      {/* Content */}
      <div className={`flex flex-1 flex-col p-5 ${featured ? "md:p-8" : ""}`}>
        {/* Category + date */}
        <div className="flex items-center gap-3">
          {post.category && (
            onCategoryClick ? (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  onCategoryClick(post.category!)
                }}
                className="rounded-full bg-[#0000EE]/5 px-2.5 py-0.5 text-[11px] font-semibold text-[#0000EE] transition-colors hover:bg-[#0000EE]/10"
              >
                {post.category}
              </button>
            ) : (
              <span className="rounded-full bg-[#0000EE]/5 px-2.5 py-0.5 text-[11px] font-semibold text-[#0000EE]">
                {post.category}
              </span>
            )
          )}
          <span className="text-[12px] text-neutral-400">
            {formatDate(post.date)}
          </span>
        </div>

        {/* Title */}
        <h3
          className={`mt-3 font-semibold leading-snug text-foreground group-hover:text-[#0000EE] transition-colors ${
            featured ? "text-[22px]" : "text-[17px]"
          }`}
        >
          {post.title}
        </h3>

        {/* Excerpt */}
        <p
          className={`mt-2 text-neutral-500 line-clamp-2 ${
            featured ? "text-[15px]" : "text-[14px]"
          }`}
        >
          {post.excerpt}
        </p>

        {/* Author + read more */}
        <div className="mt-auto flex items-center justify-between pt-4">
          <div className="flex items-center gap-2">
            {post.authorPhoto && (
              <Image
                src={post.authorPhoto}
                alt={post.author}
                width={24}
                height={24}
                className="rounded-full"
              />
            )}
            <span className="text-[13px] font-medium text-neutral-600">
              {post.author}
            </span>
          </div>
          <span className="flex items-center gap-1 text-[13px] font-medium text-[#0000EE] opacity-0 transition-opacity group-hover:opacity-100">
            Read
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </Link>
  )
}
