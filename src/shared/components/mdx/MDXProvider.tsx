import React from 'react';
import { MDXProvider as Provider } from '@mdx-js/react';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';
import Video from '../ui/Video';
import StackBlitz from '../ui/StackBlitz';

interface ComponentProps {
  children?: React.ReactNode;
  className?: string;
}

const H1: React.FC<ComponentProps> = ({ children }) => (
  <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 text-paper-text tracking-tightest leading-hero">
    {children}
  </h1>
);

const H2: React.FC<ComponentProps> = ({ children }) => (
  <h2 className="text-2xl md:text-3xl font-serif mt-12 mb-6 text-paper-text tracking-tighter">
    {children}
  </h2>
);

const H3: React.FC<ComponentProps> = ({ children }) => (
  <h3 className="text-xl md:text-2xl font-serif mt-8 mb-4 text-paper-text tracking-tight">
    {children}
  </h3>
);

const P: React.FC<ComponentProps> = ({ children }) => (
  <p className="text-base md:text-lg text-paper-muted leading-relaxed mb-6">
    {children}
  </p>
);

const Code: React.FC<ComponentProps> = ({ children, className }) => {
  const isInline = !className;
  if (isInline) {
    return (
      <code className="px-1.5 py-0.5 rounded bg-paper-code border border-paper-border text-paper-accent font-mono text-[0.85em] font-medium">
        {children}
      </code>
    );
  }
  return children;
};

export const Highlight: React.FC<ComponentProps> = ({ children }) => (
  <span className="paper-highlight font-medium text-paper-text italic">
    {children}
  </span>
);

const Pre: React.FC<any> = ({ children }) => {
  const [copied, setCopied] = useState(false);
  const code = children.props.children;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-12">
      <div className="flex items-center justify-between px-6 py-3.5 bg-[#DCD0C0] border-t border-l border-r border-paper-border rounded-t-[1.5rem] shadow-sm">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#A67C52] shadow-inner" />
          <div className="w-3 h-3 rounded-full bg-[#6F4E37]/40 shadow-inner" />
          <div className="w-3 h-3 rounded-full bg-[#D3C6B0] shadow-inner" />
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-paper-text/60 ml-4 font-bold">Engine Logs</span>
        </div>
        <button
          onClick={handleCopy}
          className="px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/40 border border-white/10 text-paper-text transition-all duration-300 flex items-center space-x-2"
          title="Copy Code"
        >
          {copied ? <Check size={14} className="text-paper-accent" /> : <Copy size={14} />}
          <span className="text-[10px] font-bold uppercase tracking-widest">{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>
      
      <div className="relative">
        <div className="absolute top-0 left-0 w-1 h-full bg-paper-accent/20" />
        <pre className="p-8 rounded-b-[1.5rem] bg-paper-code border-b border-l border-r border-paper-border overflow-x-auto font-mono text-sm leading-relaxed text-paper-text shadow-inner-soft">
          {children}
        </pre>
      </div>
    </div>
  );
};

export const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  code: Code,
  pre: Pre,
  Highlight,
  Video,
  StackBlitz,
};

export const MDXProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Provider components={components}>{children}</Provider>;
};
