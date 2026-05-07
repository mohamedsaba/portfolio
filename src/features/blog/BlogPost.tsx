import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';
import SEO from '../../shared/components/ui/SEO';
import { getAllPosts } from '../../shared/utils/contentLoader';
import avatar from '../../assets/images/avatar.jpg';

const BlogPost = () => {
  const { slug } = useParams();
  const post = getAllPosts().find((p: any) => p.slug === slug);

  const [shared, setShared] = React.useState(false);

  if (!post) return <div className="pt-32 px-6 text-center text-paper-muted">Post not found.</div>;

  const handleShareX = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`Read ${post.title} by Mohamed Saba`);
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  };

  const handleShareLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <article className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-6 max-w-3xl mx-auto">
      <SEO 
        title={post.title} 
        description={post.description}
        ogType="article"
        keywords={post.tags}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link to="/blog" className="inline-flex items-center space-x-2 text-paper-muted hover:text-paper-accent transition-colors mb-12 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-bold uppercase tracking-widest">Back to Articles</span>
        </Link>

        <div className="space-y-6 mb-16">
          <div className="flex items-center space-x-6 text-[10px] font-mono text-paper-muted uppercase tracking-[0.2em] font-bold">
            <div className="flex items-center space-x-2">
              <Calendar size={12} className="text-paper-accent" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={12} className="text-paper-accent" />
              <span>{post.readingTime || '5 min read'}</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-paper-text tracking-tightest leading-[1.1]">
            {post.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-paper-muted font-serif italic leading-relaxed border-l-2 border-paper-accent/20 pl-6">
            {post.description}
          </p>
        </div>

        <div className="section-divider mb-16" />

        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-headings:tracking-tightest prose-p:text-paper-muted/90 prose-p:leading-relaxed prose-pre:bg-[#0C0F05] prose-pre:border prose-pre:border-paper-border/30">
          <post.component />
        </div>

        <div className="mt-20 pt-10 border-t border-paper-border/30 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="flex items-center space-x-4">
            <div className="h-12 w-12 rounded-2xl overflow-hidden border border-paper-accent/20">
              <img src={avatar} alt="Mohamed Saba" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-base font-bold text-paper-text tracking-tight">Mohamed Saba</div>
              <div className="text-[10px] text-paper-muted uppercase tracking-[0.2em] font-bold">Backend Engineer</div>
            </div>
          </div>
          
          <div className="flex items-center bg-paper-code p-1.5 rounded-2xl border border-paper-border/40">
            <button 
              onClick={handleShareLinkedIn}
              className="p-3 rounded-xl text-paper-muted hover:text-paper-accent hover:bg-paper-accent/5 transition-all"
              aria-label="Share on LinkedIn"
            >
              <Linkedin size={18} />
            </button>
            <button 
              onClick={handleShareX}
              className="p-3 rounded-xl text-paper-muted hover:text-paper-accent hover:bg-paper-accent/5 transition-all"
              aria-label="Share on X"
            >
              <Twitter size={18} />
            </button>
            <div className="w-px h-4 bg-paper-border/40 mx-1" />
            <button 
              onClick={copyToClipboard}
              className="flex items-center space-x-2 px-4 py-3 rounded-xl text-paper-muted hover:text-paper-accent hover:bg-paper-accent/5 transition-all"
              aria-label="Copy Link"
            >
              {shared ? (
                <span className="text-[10px] font-bold uppercase tracking-widest text-paper-accent animate-in fade-in zoom-in-95">Copied!</span>
              ) : (
                <LinkIcon size={18} />
              )}
            </button>
          </div>
        </div>
      </motion.div>
    </article>
  );
};

export default BlogPost;
