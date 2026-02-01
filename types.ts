export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  metadata: Record<string, unknown>;
  type: string;
}

export interface SiteSettings extends CosmicObject {
  type: 'site-settings';
  metadata: {
    name: string;
    tagline?: string;
    bio?: string;
    profile_photo?: {
      url: string;
      imgix_url: string;
    };
    email?: string;
    github_url?: string;
    linkedin_url?: string;
    twitter_url?: string;
  };
}

export interface Project extends CosmicObject {
  type: 'projects';
  metadata: {
    title: string;
    description?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    tech_stack?: string;
    live_url?: string;
    github_url?: string;
    featured?: boolean;
  };
}

export interface BlogPost extends CosmicObject {
  type: 'blog-posts';
  metadata: {
    title: string;
    excerpt?: string;
    content?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    published_date?: string;
  };
}