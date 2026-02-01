import { getProjects } from '@/lib/cosmic'
import ProjectCard from '@/components/ProjectCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Jack Smith',
  description: 'Explore my portfolio of TypeScript and full-stack development projects.',
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Projects</h1>
          <p className="text-muted text-lg max-w-2xl">
            A collection of projects I&apos;ve built, from open-source libraries to client work.
            Each project represents my passion for clean code and great developer experience.
          </p>
        </div>

        {projects.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-muted text-center py-12">No projects yet.</p>
        )}
      </div>
    </div>
  )
}