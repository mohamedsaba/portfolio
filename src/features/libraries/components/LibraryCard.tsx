import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Box } from 'lucide-react';
import { Link } from 'react-router-dom';
import DynamicBadge from '../../../shared/components/ui/DynamicBadge';

interface LibraryCardProps {
  title: string;
  description: string;
  slug: string;
  npmName?: string;
  githubRepo?: string;
  tags: string[];
  articleSlug?: string;
}

const MotionLink = motion.create(Link);

const LibraryCard: React.FC<LibraryCardProps> = ({ title, description, slug, npmName, githubRepo, tags, articleSlug }) => {
  const destination = articleSlug ? `/blog/${articleSlug}` : (githubRepo ? `https://github.com/${githubRepo}` : `/blog/${slug}`);
  const isExternal = !articleSlug;

  return (
    <MotionLink
      to={destination}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="group relative bg-paper-code border border-paper-border p-6 sm:p-8 lg:p-10 rounded-3xl flex flex-col h-full overflow-hidden block"
    >
      {/* Left accent bar */}
      <div className="absolute top-0 left-0 w-[3px] h-full bg-paper-accent transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-out" />

      {/* Hover glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-paper-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl pointer-events-none" />

      <div className="flex justify-between items-start mb-8 relative">
        <div className="p-3.5 bg-paper-bg rounded-2xl border border-paper-border/50 group-hover:bg-paper-accent group-hover:border-paper-accent group-hover:text-paper-bg transition-all duration-500 group-hover:shadow-lg group-hover:shadow-paper-accent/20 text-paper-accent">
          <Box size={24} />
        </div>
        <div
          className="p-2.5 rounded-xl text-paper-muted/40 group-hover:text-paper-accent group-hover:bg-paper-bg transition-all duration-300"
          aria-label={`View ${title}`}
        >
          <ArrowUpRight size={20} />
        </div>
      </div>

      <h3 className="text-2xl lg:text-3xl font-serif mb-3 text-paper-text group-hover:text-paper-accent transition-colors duration-300" style={{ letterSpacing: '-0.04em' }}>
        {title}
      </h3>

      <p className="text-paper-muted text-base mb-8 line-clamp-3 leading-relaxed flex-grow">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {tags?.map(tag => (
          <span
            key={tag}
            className="px-3 py-1 bg-paper-bg border border-paper-border/60 rounded-lg text-[10px] uppercase tracking-[0.15em] text-paper-muted font-semibold"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center space-x-3 pt-6 border-t border-paper-border/50 mt-auto">
        {npmName && <DynamicBadge type="npm" name={npmName} />}
        {githubRepo && <DynamicBadge type="github" name={githubRepo} />}
      </div>
    </MotionLink>
  );
};

export default LibraryCard;
