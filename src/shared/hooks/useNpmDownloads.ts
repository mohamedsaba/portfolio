import { useState, useEffect } from 'react';
import { getAllPosts } from '../utils/contentLoader';

export function useNpmDownloads() {
  const [totalDownloads, setTotalDownloads] = useState<number | null>(null);

  const allPosts = getAllPosts();
  const npmPackages = allPosts
    .filter((p: any) => p.npmName)
    .map((p: any) => p.npmName as string);

  useEffect(() => {
    if (npmPackages.length === 0) return;

    const fetchDownloads = async () => {
      const results = await Promise.allSettled(
        npmPackages.map(async (pkg) => {
          const res = await fetch(
            `https://api.npmjs.org/downloads/point/last-month/${encodeURIComponent(pkg)}`
          );
          if (!res.ok) return 0;
          const data = await res.json();
          return data.downloads ?? 0;
        })
      );

      const total = results.reduce((sum, r) => {
        if (r.status === 'fulfilled') return sum + r.value;
        return sum;
      }, 0);

      setTotalDownloads(total);
    };

    fetchDownloads();
  }, []);

  return { totalDownloads, packageCount: npmPackages.length };
}

export function usePortfolioStats() {
  const allPosts = getAllPosts();
  const libraries = allPosts.filter((p: any) => p.category === 'library');
  const articles = allPosts.filter((p: any) => p.category === 'blog');
  const { totalDownloads, packageCount } = useNpmDownloads();

  return {
    projectCount: libraries.length,
    articleCount: articles.length,
    npmPackageCount: packageCount,
    totalDownloads,
  };
}
