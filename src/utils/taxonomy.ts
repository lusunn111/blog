import type { CollectionEntry } from 'astro:content'

export const CATEGORIES = ['技术', '读博日记'] as const

export type BlogCategory = (typeof CATEGORIES)[number]
export type BlogPost = CollectionEntry<'blog'>

export function categoryHref(category: string) {
  return `/categories/${encodeURIComponent(category)}`
}

export function seriesHref(series: string) {
  return `/series/${encodeURIComponent(series)}`
}

export function getSeriesGroups(posts: BlogPost[]) {
  const groups = new Map<string, BlogPost[]>()

  for (const post of posts) {
    if (!post.data.series) continue
    const current = groups.get(post.data.series) ?? []
    current.push(post)
    groups.set(post.data.series, current)
  }

  return Array.from(groups.entries())
    .map(([name, entries]) => [name, sortSeriesPosts(entries)] as const)
    .sort(([a], [b]) => a.localeCompare(b, 'zh-CN'))
}

export function sortSeriesPosts(posts: BlogPost[]) {
  return [...posts].sort((a, b) => {
    const orderA = a.data.seriesOrder ?? Number.MAX_SAFE_INTEGER
    const orderB = b.data.seriesOrder ?? Number.MAX_SAFE_INTEGER

    if (orderA !== orderB) return orderA - orderB
    return a.data.publishDate.getTime() - b.data.publishDate.getTime()
  })
}
