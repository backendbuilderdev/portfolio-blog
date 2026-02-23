import { BlogPosts } from 'app/components/posts'
import { site, linkedInArticles } from 'app/site-config'
import { getMediumPosts } from 'app/blog/medium'
import { formatDate } from 'app/blog/utils'

function ExternalLinkIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="ml-1 inline opacity-70"
      aria-hidden
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Blog',
  description: `Read ${site.name}'s blog.`,
}

export default async function Page() {
  const mediumPosts = await getMediumPosts()

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Blog</h1>
      <BlogPosts />
      {(mediumPosts.length > 0 || linkedInArticles.length > 0) && (
        <div id="writing-elsewhere" className="mt-16 scroll-mt-6">
          <h2 className="font-semibold text-xl mb-6 tracking-tighter">
            Writing elsewhere
          </h2>
          {mediumPosts.length > 0 && (
            <div className="mb-8">
              <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-3">
                On Medium
              </h3>
              <div className="flex flex-col space-y-1">
                {mediumPosts.map((post) => (
                  <a
                    key={post.link}
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col space-y-1 mb-4 group"
                  >
                    <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2 items-baseline">
                      <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums shrink-0">
                        {formatDate(post.pubDate, false)}
                      </p>
                      <p className="text-neutral-900 dark:text-neutral-100 tracking-tight group-hover:underline">
                        {post.title}
                        <ExternalLinkIcon />
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
          {linkedInArticles.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-3">
                On LinkedIn
              </h3>
              <div className="flex flex-col space-y-1">
                {linkedInArticles.map((article) => (
                  <a
                    key={article.url}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col space-y-1 mb-4 group"
                  >
                    <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2 items-baseline">
                      <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums shrink-0">
                        {article.publishedAt
                          ? formatDate(article.publishedAt, false)
                          : '—'}
                      </p>
                      <p className="text-neutral-900 dark:text-neutral-100 tracking-tight group-hover:underline">
                        {article.title}
                        <ExternalLinkIcon />
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  )
}
