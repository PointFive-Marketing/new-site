"use client"

import { useState } from "react"
import { BlogCard } from "@/components/blog/blog-card"
import type { PostMeta } from "@/lib/blog-types"

export function BlogList({
  posts,
  categories,
}: {
  posts: PostMeta[]
  categories: string[]
}) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const featured = posts[0]
  const rest = posts.slice(1)

  const filteredRest = activeCategory
    ? rest.filter((p) => p.category === activeCategory)
    : rest

  const showFeatured = !activeCategory || featured?.category === activeCategory

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

      {/* Posts */}
      {!showFeatured && filteredRest.length === 0 ? (
        <p className="py-20 text-center text-neutral-400">
          No posts found in this category.
        </p>
      ) : (
        <>
          {/* Featured post */}
          {showFeatured && featured && (
            <div className="mb-10">
              <BlogCard
                post={featured}
                featured
                onCategoryClick={setActiveCategory}
              />
            </div>
          )}

          {/* Grid */}
          {filteredRest.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredRest.map((post) => (
                <BlogCard
                  key={post.slug}
                  post={post}
                  onCategoryClick={setActiveCategory}
                />
              ))}
            </div>
          )}
        </>
      )}
    </>
  )
}
