"use client"

import { useState } from "react"
import { BlogCard } from "@/components/blog/blog-card"
import type { PostMeta } from "@/lib/blog-types"

export function KnowledgeBaseList({
  posts,
  categories,
}: {
  posts: PostMeta[]
  categories: string[]
}) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filtered = activeCategory
    ? posts.filter((p) => p.category === activeCategory)
    : posts

  return (
    <>
      {/* Category filter pills */}
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveCategory(null)}
          className={`rounded-full px-4 py-1.5 text-[13px] font-medium transition-colors ${
            activeCategory === null
              ? "bg-[#0000EE] text-white"
              : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            type="button"
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-4 py-1.5 text-[13px] font-medium transition-colors ${
              activeCategory === cat
                ? "bg-[#0000EE] text-white"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Card grid */}
      {filtered.length === 0 ? (
        <p className="py-20 text-center text-neutral-400">
          No items found.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <BlogCard
              key={post.slug}
              post={post}
              basePath="/knowledge-base"
            />
          ))}
        </div>
      )}
    </>
  )
}
