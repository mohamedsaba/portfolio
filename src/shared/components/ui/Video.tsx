import React from 'react';

interface VideoProps {
  src: string;
  caption?: string;
}

const Video: React.FC<VideoProps> = ({ src, caption }) => {
  return (
    <figure className="my-12 space-y-4">
      <div className="relative aspect-video rounded-[2rem] overflow-hidden border border-paper-border bg-paper-code shadow-2xl group">
        <video 
          src={src} 
          autoPlay 
          muted 
          loop 
          playsInline
          controls 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 pointer-events-none border-[12px] border-paper-bg/10 rounded-[2rem]" />
      </div>
      {caption && (
        <figcaption className="text-center text-sm font-serif italic text-paper-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default Video;
