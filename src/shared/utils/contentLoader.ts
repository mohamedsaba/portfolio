// utils/contentLoader.ts
// This utility uses Vite's import.meta.glob to dynamically load MDX files and their frontmatter

interface PostMetadata {
  title: string;
  description: string;
  date: string;
  tags: string[];
  slug: string;
  category: 'blog' | 'library';
  npmName?: string;
  githubRepo?: string;
  readingTime?: string;
  demoUrl?: string;
  articleSlug?: string;
}

interface MDXModule {
  metadata?: PostMetadata;
  Metadata?: { meta: PostMetadata };
  default: React.ComponentType;
}

export const loadContent = async (category: 'blog' | 'libraries') => {
  const modules = import.meta.glob('/src/features/**/*.mdx', { eager: true }) as Record<string, MDXModule>;
  
  const items = Object.entries(modules)
    .filter(([path]) => path.includes(`/src/features/${category}/content/`))
    .map(([path, module]) => {
      const fileName = path.split('/').pop()?.replace('.mdx', '');
      return {
        ...(module.Metadata?.meta || module.metadata),
        slug: (module.Metadata?.meta?.slug || module.metadata?.slug) || fileName || '',
        component: module.default
      };
    });

  return items.sort((a, b) => new Date(b.date || '1970-01-01').getTime() - new Date(a.date || '1970-01-01').getTime());
};

// Synchronous version for simple filtering in components
export const getAllPosts = () => {
  const modules = import.meta.glob('/src/features/**/*.mdx', { eager: true }) as Record<string, MDXModule>;
  
  return Object.entries(modules).map(([path, module]) => {
    const fileName = path.split('/').pop()?.replace('.mdx', '');
    return {
      ...(module.Metadata?.meta || module.metadata),
      slug: (module.Metadata?.meta?.slug || module.metadata?.slug) || fileName || '',
      component: module.default
    };
  }).sort((a, b) => new Date(b.date || '1970-01-01').getTime() - new Date(a.date || '1970-01-01').getTime());
};

export const loadSingleContent = async (category: 'blog' | 'libraries', slug: string) => {
  const all = await loadContent(category);
  return all.find(item => item.slug === slug);
};
