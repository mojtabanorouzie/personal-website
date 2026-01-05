import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/markdown';

export const metadata = {
  title: 'Blog - Mojtaba Norouzi',
  description: 'Articles on .NET, microservices, Kafka, and software architecture',
};

export default function Blog() {
  const posts = getAllBlogPosts();

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">Blog</h1>
        <p className="text-xl text-slate-700 dark:text-slate-300 font-light">
          Articles about .NET, microservices, Kafka, and software architecture
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-slate-600 dark:text-slate-400 mb-6 font-light">No blog posts yet. Check back soon!</p>
          <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
            Return to home
          </Link>
        </div>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <article className="border-l-4 border-slate-300 dark:border-slate-700 pl-6 py-4 hover:border-blue-600 dark:hover:border-blue-400 transition-colors p-6 rounded-r-lg bg-white dark:bg-slate-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent dark:hover:from-slate-700 dark:hover:to-transparent">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-3">
                  {post.title}
                </h2>
                <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-slate-600 dark:text-slate-400 font-light">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  {post.tags.length > 0 && (
                    <div className="flex gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-slate-700 dark:to-slate-600 text-blue-700 dark:text-blue-300 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-lg font-light">{post.excerpt}</p>
                <div className="mt-4 text-blue-600 dark:text-blue-400 font-semibold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Read more <span>→</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
