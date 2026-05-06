import React, { useState, useEffect } from 'react';
import { Download, Star, Loader2 } from 'lucide-react';

interface DynamicBadgeProps {
  type: 'npm' | 'github';
  name: string;
}

const DynamicBadge: React.FC<DynamicBadgeProps> = ({ type, name }) => {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      setLoading(true);
      try {
        if (type === 'npm') {
          const res = await fetch(`https://registry.npmjs.org/${name}/latest`);
          if (!res.ok) throw new Error('Package not found');
          const json = await res.json();
          if (mounted) setData(`v${json.version}`);
        } else {
          const res = await fetch(`https://api.github.com/repos/${name}`);
          if (!res.ok) {
            if (res.status === 403) throw new Error('Rate limit');
            throw new Error('Repo not found');
          }
          const json = await res.json();
          if (mounted) setData(`${json.stargazers_count.toLocaleString()} ★`);
        }
      } catch (err) {
        console.error(`Failed to fetch ${type} data for ${name}`, err);
        if (mounted) setData(type === 'npm' ? 'NPM' : 'Stars');
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchData();
    return () => { mounted = false; };
  }, [type, name]);

  return (
    <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 bg-paper-code border border-paper-border/60 rounded-lg text-xs font-mono text-paper-muted transition-colors hover:border-paper-accent/20">
      {type === 'npm' ? (
        <Download size={11} className="text-paper-accent" />
      ) : (
        <Star size={11} className="text-paper-warm" />
      )}

      {loading ? (
        <Loader2 size={11} className="animate-spin text-paper-muted/50" />
      ) : (
        <span className="text-paper-text/70">{data}</span>
      )}
    </div>
  );
};

export default DynamicBadge;
