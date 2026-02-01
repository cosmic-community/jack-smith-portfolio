import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl text-foreground hover:text-accent transition-colors">
          JS
        </Link>
        
        <nav className="flex items-center gap-8">
          <Link 
            href="/projects" 
            className="text-muted hover:text-foreground transition-colors font-medium"
          >
            Projects
          </Link>
          <Link 
            href="/blog" 
            className="text-muted hover:text-foreground transition-colors font-medium"
          >
            Blog
          </Link>
        </nav>
      </div>
    </header>
  )
}