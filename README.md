# Jack Smith Portfolio

![Jack Smith Portfolio](https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=300&fit=crop&auto=format,compress)

A modern, performant portfolio website for Jack Smith, TypeScript Engineer & Full-Stack Developer. Built with Next.js 16, TypeScript, and Tailwind CSS, powered by Cosmic CMS.

## Features

- 🎨 **Modern Dark Theme** - Professional developer-focused design
- ⚡ **Blazing Fast** - Server-side rendering with Next.js 16
- 📱 **Fully Responsive** - Looks great on all devices
- 💼 **Project Showcase** - Featured projects with tech stacks and links
- 📝 **Technical Blog** - Markdown support with code syntax highlighting
- 🔗 **Social Integration** - GitHub, LinkedIn, Twitter links
- 🎯 **SEO Optimized** - Meta tags and Open Graph support
- 🔒 **Type-Safe** - Built entirely with TypeScript

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=697f0d077a65a1cabaf8e164&clone_repository=697f12987a65a1cabaf8e17e)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a complete content model for: A web developer portfolio for Jack Smith, TypeScript engineer
> 
> Use the install_content_model action to create ALL object types AND demo content in one step. Include:
> 1. All necessary object types with appropriate metafields
> 2. 2-3 demo objects for each type with realistic content
> 3. Unsplash image URLs for thumbnails and file metafields (use real URLs like https://images.unsplash.com/photo-...)
> 
> Remember to create types that are referenced by others FIRST (e.g., categories and authors before blog posts)."

### Code Generation Prompt

> "A website for TypeScript developer Jack Smith"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Cosmic](https://www.cosmicjs.com/) - Headless CMS
- [React Markdown](https://github.com/remarkjs/react-markdown) - Markdown rendering
- [React Syntax Highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter) - Code highlighting

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with the portfolio content model

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd jack-smith-portfolio
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Add your Cosmic credentials to `.env.local`:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

5. Run the development server:
```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see the portfolio.

## Cosmic SDK Examples

### Fetching Site Settings

```typescript
import { cosmic } from '@/lib/cosmic'

const response = await cosmic.objects
  .findOne({ type: 'site-settings' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

const settings = response.object
```

### Fetching Projects

```typescript
const response = await cosmic.objects
  .find({ type: 'projects' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

const projects = response.objects
```

### Fetching Blog Posts

```typescript
const response = await cosmic.objects
  .find({ type: 'blog-posts' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

const posts = response.objects
```

## Cosmic CMS Integration

This portfolio uses three content types:

### Site Settings (Singleton)
- Name, tagline, bio
- Profile photo
- Social links (GitHub, LinkedIn, Twitter, Email)

### Projects
- Title and description (Markdown)
- Featured image
- Tech stack (comma-separated)
- Live URL and GitHub URL
- Featured flag

### Blog Posts
- Title and excerpt
- Content (Markdown)
- Featured image
- Published date

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Import the project in [Netlify](https://netlify.com)
3. Set build command: `bun run build`
4. Set publish directory: `.next`
5. Add environment variables
6. Deploy!

## License

MIT License - feel free to use this template for your own portfolio!

<!-- README_END -->