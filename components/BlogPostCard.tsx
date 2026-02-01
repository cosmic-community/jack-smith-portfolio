import { BlogPost } from '@/types'
import Link from 'next/link'

interface BlogPostCardProps {
  post: BlogPost
  variant?: 'default' | 'horizontal'
}

export default function BlogPostCard({ post, variant = 'default' }: BlogPostCardProps) {
  const formattedDate = post.metadata.published_date
    ? new Date(post.metadata.published_date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    : null

  if (variant === 'horizontal') {
    return (
      <Link href={`/blog/${post.slug}`}>
        <article className="group flex gap-6 p-6 bg-card border border-border rounded-xl hover:border-accent/50 transition-all">
          {post.metadata.featured_image?.imgix_url && (
            <div className="flex-shrink-0 w-48 h-32 overflow-hidden rounded-lg bg-background">
              <img
                src={`${post.metadata.featured_image.imgix_url}?w=384&h=256&fit=crop&auto=format,compress`}
                alt={post.metadata.title}
                width={192}
                height={128}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          )}
          <div className="flex-1 min-w-0">
            {formattedDate && (
              <time className="text-sm text-muted mb-2 block">{formattedDate}</time>
            )}
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
              {post.metadata.title}
            </h3>
            {post.metadata.excerpt && (
              <p className="text-muted line-clamp-2">{post.metadata.excerpt}</p>
            )}
          </div>
        </article>
      </Link>
    )
  }

  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group bg-card border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-all">
        {post.metadata.featured_image?.imgix_url && (
          <div className="aspect-video overflow-hidden bg-background">
            <img
              src={`${post.metadata.featured_image.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
              alt={post.metadata.title}
              width={400}
              height={225}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        <div className="p-6">
          {formattedDate && (
            <time className="text-sm text-muted mb-2 block">{formattedDate}</time>
          )}
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
            {post.metadata.title}
          </h3>
          {post.metadata.excerpt && (
            <p className="text-muted line-clamp-3">{post.metadata.excerpt}</p>
          )}
        </div>
      </article>
    </Link>
  )
}