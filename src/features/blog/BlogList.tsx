import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import SEO from '../../shared/components/ui/SEO';
import { getAllPosts } from '../../shared/utils/contentLoader';

const BlogList = () => {
  const posts = getAllPosts().filter((post: any) => post.category === 'blog');

  return (
    <main className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-6 max-w-3xl mx-auto">
      <SEO 
        title="Engineering Insights" 
        description="Deep dives into distributed systems, backend patterns, and the architectural decisions behind my open-source projects."
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-20"
      >
        <span className="text-paper-accent text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Archive</span>
        <h1 className="text-5xl lg:text-7xl font-serif text-paper-text tracking-tightest leading-tight mb-8">
          Systems <span className="italic">Insights</span>.
        </h1>
        <p className="text-xl text-paper-muted leading-relaxed font-serif max-w-2xl">
          Deep dives into distributed systems, backend patterns, and the architectural decisions behind my open-source projects.
        </p>
      </motion.div>

      <div className="space-y-20">
        {posts.map((post: any, i: number) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group"
          >
            <Link to={`/blog/${post.slug}`} className="block space-y-6">
              <div className="flex items-center space-x-6 text-[10px] font-mono text-paper-muted uppercase tracking-[0.2em] font-bold">
                <div className="flex items-center space-x-2">
                  <Calendar size={12} className="text-paper-accent" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={12} className="text-paper-accent" />
                  <span>{post.readingTime || '5 min'}</span>
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-serif text-paper-text group-hover:text-paper-accent transition-colors duration-300 tracking-tight leading-tight">
                {post.title}
              </h2>
              
              <p className="text-paper-muted leading-relaxed text-lg font-serif line-clamp-3">
                {post.description}
              </p>

              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center space-x-3">
                  <Tag size={14} className="text-paper-accent" />
                  <div className="flex space-x-2">
                    {post.tags?.map((tag: string) => (
                      <span key={tag} className="text-[10px] font-mono text-paper-muted/60 uppercase tracking-widest">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-paper-accent font-bold text-sm group-hover:translate-x-2 transition-transform duration-300">
                  <span>Read Article</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </main>
  );
};

export default BlogList;
