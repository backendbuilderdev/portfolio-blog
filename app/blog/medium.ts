import Parser from 'rss-parser'
import { mediumUsername } from 'app/site-config'

export type MediumPost = {
  title: string
  link: string
  pubDate: string
  summary: string
}

const parser = new Parser({
  timeout: 10000,
  headers: { 'User-Agent': 'Portfolio-Blog/1.0' },
})

export async function getMediumPosts(): Promise<MediumPost[]> {
  try {
    const feedUrl = `https://medium.com/feed/@${mediumUsername}`
    const res = await fetch(feedUrl, { next: { revalidate: 3600 } })
    if (!res.ok) throw new Error(`Medium feed failed: ${res.status}`)
    const feed = await res.text()
    const parsed = await parser.parseString(feed)
    if (!parsed.items?.length) return []
    return parsed.items.map((item) => ({
      title: item.title ?? 'Untitled',
      link: item.link ?? '',
      pubDate: item.pubDate ?? new Date().toISOString(),
      summary: item.contentSnippet ?? item.content?.slice(0, 200) ?? '',
    }))
  } catch {
    return []
  }
}
