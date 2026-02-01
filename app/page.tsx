import { getSiteSettings, getFeaturedProjects, getBlogPosts } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'
import BlogPostCard from '@/components/BlogPostCard'
import Link from 'next/link'

export default async function HomePage() {
  const [settings, projects, posts] = await Promise.all([
    getSiteSettings(),
    getFeaturedProjects(),
    getBlogPosts(),
  ])

  const recentPosts = posts.slice(0, 2)

  return (
    <div>
      {/* Hero Section */}
      <Hero settings={settings} />

      {/* Featured Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Featured Projects</h2>
              <p className="text-muted">Some of my recent work</p>
            </div>
            <Link
              href="/projects"
              className="text-accent hover:text-accent-hover transition-colors font-medium"
            >
              View all →
            </Link>
          </div>
          
          {projects.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <p className="text-muted text-center py-12">No featured projects yet.</p>
          )}
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Latest Articles</h2>
              <p className="text-muted">Thoughts on TypeScript, web development, and more</p>
            </div>
            <Link
              href="/blog"
              className="text-accent hover:text-accent-hover transition-colors font-medium"
            >
              Read all →
            </Link>
          </div>
          
          {recentPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {recentPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <p className="text-muted text-center py-12">No blog posts yet.</p>
          )}
        </div>
      </section>
    </div>
  )
}