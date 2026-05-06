import React from 'react';

interface StackBlitzProps {
  repo: string;
  file?: string;
  view?: 'preview' | 'editor';
}

const StackBlitz: React.FC<StackBlitzProps> = ({ repo, file, view = 'preview' }) => {
  const baseUrl = `https://stackblitz.com/github/${repo}`;
  const params = new URLSearchParams({
    embed: '1',
    view,
    hideExplorer: '1',
    hideNavigation: '1',
    theme: 'light',
  });
  
  if (file) params.append('file', file);

  return (
    <div className="w-full aspect-video rounded-xl overflow-hidden border border-paper-border shadow-sm bg-white my-8">
      <iframe
        src={`${baseUrl}?${params.toString()}`}
        className="w-full h-full border-0"
        title={`StackBlitz demo for ${repo}`}
      />
    </div>
  );
};

export default StackBlitz;
