import React, { useState } from 'react';
import { Copy, Check, Terminal } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language, filename }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative my-8 bg-paper-code border border-paper-border rounded-2xl overflow-hidden shadow-inner-soft">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-paper-border/60 bg-white/40 backdrop-blur-sm">
        <div className="flex items-center space-x-3">
          <Terminal size={14} className="text-paper-accent" />
          {filename && (
            <span className="text-[11px] font-mono text-paper-muted uppercase tracking-wider">
              {filename}
            </span>
          )}
          {language && !filename && (
            <span className="text-[11px] font-mono text-paper-muted uppercase tracking-wider">
              {language}
            </span>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-lg border border-transparent hover:border-paper-border hover:bg-white transition-all text-paper-muted hover:text-paper-accent"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>

      {/* Code */}
      <pre className="p-6 overflow-x-auto font-mono text-sm leading-relaxed text-paper-text">
        <code>{code}</code>
      </pre>

      {/* Decorative accent */}
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-paper-accent/5 rounded-full blur-3xl pointer-events-none -mr-12 -mb-12 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
};

export default CodeBlock;
