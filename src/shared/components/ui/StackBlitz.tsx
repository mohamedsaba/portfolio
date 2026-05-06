import React from 'react';
import { ExternalLink, Terminal } from 'lucide-react';

interface StackBlitzProps {
  repo: string;
  file?: string;
  view?: 'editor' | 'preview' | 'both';
  terminal?: boolean;
}

const StackBlitz: React.FC<StackBlitzProps> = ({ 
  repo, 
  file = 'src/index.ts', 
  view = 'editor',
  terminal = true 
}) => {
  const embedUrl = `https://stackblitz.com/github/${repo}?embed=1&file=${file}&view=${view}${terminal ? '&terminal=1' : ''}&theme=dark`;

  return (
    <div className="my-12 space-y-6">
      <div className="relative group overflow-hidden rounded-[2rem] border border-paper-border bg-paper-code shadow-2xl">
        {/* Browser Header */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-[#DCD0C0] border-b border-paper-border">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#A67C52] shadow-inner" />
            <div className="w-3 h-3 rounded-full bg-[#6F4E37]/40 shadow-inner" />
            <div className="w-3 h-3 rounded-full bg-[#D3C6B0] shadow-inner" />
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-paper-text/60 ml-4 font-bold">
              Live Environment
            </span>
          </div>
          <a 
            href={`https://stackblitz.com/github/${repo}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-paper-text hover:text-paper-accent transition-colors"
          >
            <span>Open Sandbox</span>
            <ExternalLink size={12} />
          </a>
        </div>

        {/* Iframe */}
        <div className="aspect-[16/10] w-full bg-paper-code">
          <iframe
            src={embedUrl}
            className="w-full h-full border-0"
            title={`StackBlitz: ${repo}`}
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          />
        </div>
      </div>

      <div className="flex items-center justify-center space-x-3 text-paper-muted">
        <Terminal size={14} className="text-paper-accent" />
        <span className="text-xs font-serif italic">
          Fully interactive sandbox. Edits are local to your browser session.
        </span>
      </div>
    </div>
  );
};

export default StackBlitz;
