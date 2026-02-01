import { getBlogPosts } from '@/lib/cosmic'
import BlogPostCard from '@/components/BlogPostCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Jack Smith',
  description: 'Technical articles about TypeScript, web development, and software engineering.',
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Blog</h1>
          <p className="text-muted text-lg">
            Thoughts on TypeScript, web development, and lessons learned along the way.
          </p>
        </div>

        {posts.length > 0 ? (
          <div className="space-y-6">
            {posts.map((post) => (
              <BlogPostCard key={post.id} post={post} variant="horizontal" />
            ))}
          </div>
        ) : (
          <p className="text-muted text-center py-12">No blog posts yet.</p>
        )}
      </div>
    </div>
  )
}