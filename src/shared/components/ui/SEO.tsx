import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: 'website' | 'article';
  canonical?: string;
}

const SEO = ({ 
  title, 
  description, 
  keywords, 
  ogImage, 
  ogType = 'website',
  canonical 
}: SEOProps) => {
  const siteTitle = 'Mohamed Saba | Systems Architect';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = 'Deep-documentation portfolio of Mohamed Saba, a systems architect specializing in distributed systems, idempotency, and high-reliability backend engineering.';

  useEffect(() => {
    // Update Title
    document.title = fullTitle;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description || defaultDescription);

    // Update Meta Keywords
    if (keywords && keywords.length > 0) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords.join(', '));
    }

    // Update OG tags
    const updateOGTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateOGTag('og:title', fullTitle);
    updateOGTag('og:description', description || defaultDescription);
    updateOGTag('og:type', ogType);
    updateOGTag('og:image', ogImage || 'https://mohamedsaba.com/og-image.jpg');
    
    // Update Canonical
    if (canonical) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', canonical);
    }

    // Add JSON-LD Structured Data
    let schemaScript = document.querySelector('script[type="application/ld+json"]');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schemaScript);
    }

    const schemaData = ogType === 'article' 
      ? {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": title,
          "description": description || defaultDescription,
          "image": ogImage || 'https://mohamedsaba.com/og-image.jpg',
          "author": {
            "@type": "Person",
            "name": "Mohamed Saba",
            "url": "https://mohamedsaba.com"
          }
        }
      : {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Mohamed Saba",
          "url": "https://mohamedsaba.com",
          "jobTitle": "Systems Architect",
          "sameAs": [
            "https://github.com/mohamedsaba",
            "https://linkedin.com/in/mohamedsabea"
          ]
        };

    schemaScript.textContent = JSON.stringify(schemaData);

  }, [title, description, keywords, ogImage, ogType, canonical, fullTitle, defaultDescription]);

  return null;
};

export default SEO;
