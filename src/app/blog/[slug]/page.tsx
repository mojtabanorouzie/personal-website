import Link from 'next/link';
import { getBlogPostBySlug, markdownToHtml, getAllBlogPosts } from '@/lib/markdown';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The blog post you are looking for does not exist.',
    };
  }

  return {
    title: `${post.title} - Mojtaba Norouzi`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const htmlContent = markdownToHtml(post.content);

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <Link href="/blog" className="text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-flex items-center gap-1 font-semibold group">
        <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Blog
      </Link>

      <article>
        <header className="mb-12">
          <h1 className="text-5xl font-bold mb-4 text-slate-900 dark:text-white">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-400 mb-6 font-light">
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
          {post.excerpt && (
            <p className="text-xl text-slate-700 dark:text-slate-300 italic font-light border-l-4 border-blue-600 dark:border-blue-400 pl-4">{post.excerpt}</p>
          )}
        </header>

        <div
          className="prose prose-lg max-w-none text-slate-700 dark:text-slate-300 leading-relaxed font-light [&>p]:text-slate-700 [&>p]:dark:text-slate-300 [&>h2]:text-slate-900 [&>h2]:dark:text-white [&>h3]:text-slate-900 [&>h3]:dark:text-white [&>ul>li]:text-slate-700 [&>ul>li]:dark:text-slate-300 [&>a]:text-blue-600 [&>a]:dark:text-blue-400 [&>a]:hover:underline [&>code]:bg-slate-200 [&>code]:dark:bg-slate-700 [&>code]:px-2 [&>code]:py-1 [&>code]:rounded [&>code]:text-slate-900 [&>code]:dark:text-slate-100"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </article>

      <div className="mt-16 pt-8 border-t border-slate-300 dark:border-slate-700">
        <Link href="/blog" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold inline-flex items-center gap-1 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to all posts
        </Link>
      </div>
    </div>
  );
}
