// app/blog/[slug]/page.tsx
import { getBlogPost, getBlogPosts } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import MarkdownContent from '@/components/MarkdownContent'
import Link from 'next/link'
import type { Metadata } from 'next'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)
  
  if (!post) {
    return { title: 'Post Not Found' }
  }

  return {
    title: `${post.metadata.title} | Jack Smith`,
    description: post.metadata.excerpt || '',
  }
}

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const formattedDate = post.metadata.published_date
    ? new Date(post.metadata.published_date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null

  return (
    <article className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center text-muted hover:text-foreground transition-colors mb-8"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to blog
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            {post.metadata.title}
          </h1>
          {formattedDate && (
            <time className="text-muted">{formattedDate}</time>
          )}
        </header>

        {post.metadata.featured_image?.imgix_url && (
          <div className="mb-12 rounded-xl overflow-hidden">
            <img
              src={`${post.metadata.featured_image.imgix_url}?w=1400&h=600&fit=crop&auto=format,compress`}
              alt={post.metadata.title}
              width={700}
              height={300}
              className="w-full"
            />
          </div>
        )}

        {post.metadata.content && (
          <div className="prose max-w-none">
            <MarkdownContent content={post.metadata.content} />
          </div>
        )}
      </div>
    </article>
  )
}