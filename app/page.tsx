import Link from 'next/link'
import { getBlogPosts } from 'app/blog/utils'
import { site, author, social } from 'app/site-config'

export default function Page() {
  const posts = getBlogPosts().sort((a, b) => {
    const d1 = new Date(a.metadata.publishedAt)
    const d2 = new Date(b.metadata.publishedAt)
    return d2.getTime() - d1.getTime()
  })

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        {site.name}
      </h1>
      <p className="mb-6 text-neutral-700 dark:text-neutral-300 leading-relaxed">
        {author.intro}
      </p>
      <p className="mb-10 text-neutral-700 dark:text-neutral-300 leading-relaxed">
        {author.lifeWork}
      </p>
      <p className="mb-3 text-neutral-700 dark:text-neutral-300">
        Some of my favorite writing includes:
      </p>
      <ul className="mb-10 list-none space-y-1 text-neutral-700 dark:text-neutral-300">
        {posts.map((post) => (
          <li key={post.slug} className="flex gap-2">
            <span className="text-neutral-400 dark:text-neutral-500">-</span>
            <Link
              href={`/blog/${post.slug}`}
              className="text-neutral-900 dark:text-neutral-100 hover:underline"
            >
              {post.metadata.title}
            </Link>
          </li>
        ))}
      </ul>
      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
        You can{' '}
        <Link href="/blog" className="underline hover:no-underline">
          read my writing
        </Link>{' '}
        or{' '}
        <a
          href={social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:no-underline"
        >
          code
        </a>
        , or{' '}
        <a
          href={social.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:no-underline"
        >
          follow me online
        </a>
        . I also write on{' '}
        <Link
          href="/blog#writing-elsewhere"
          className="underline hover:no-underline"
        >
          Medium and LinkedIn
        </Link>
        .{' '}
        {author.email ? (
          <>
            <a
              href={`mailto:${author.email}`}
              className="underline hover:no-underline"
            >
              Reach out
            </a>{' '}
            if interested.
          </>
        ) : (
          <>Reach out if you&apos;re building something or want to geek out over APIs and systems.</>
        )}
      </p>
    </section>
  )
}
