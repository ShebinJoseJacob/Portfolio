import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import { PortableTextComponents } from "@portabletext/react";

// Helper function to convert YouTube/Vimeo URLs to embed URLs with validation
const getEmbedUrl = (url: string): string => {
  try {
    // Validate URL format
    const urlObj = new URL(url);
    const hostname = urlObj.hostname.replace('www.', '');

    // Validate allowed video platforms
    const allowedHosts = ['youtube.com', 'youtu.be', 'vimeo.com'];
    if (!allowedHosts.includes(hostname)) {
      console.error('Invalid video source:', hostname);
      return '';
    }

    // YouTube
    if (hostname === 'youtube.com' && url.includes('/watch')) {
      const videoId = urlObj.searchParams.get('v');
      if (!videoId || !/^[a-zA-Z0-9_-]{11}$/.test(videoId)) {
        return '';
      }
      return `https://www.youtube.com/embed/${videoId}`;
    }

    if (hostname === 'youtu.be') {
      const videoId = urlObj.pathname.split('/')[1];
      if (!videoId || !/^[a-zA-Z0-9_-]{11}$/.test(videoId)) {
        return '';
      }
      return `https://www.youtube.com/embed/${videoId}`;
    }

    // Vimeo
    if (hostname === 'vimeo.com') {
      const videoId = urlObj.pathname.split('/')[1];
      if (!videoId || !/^\d+$/.test(videoId)) {
        return '';
      }
      return `https://player.vimeo.com/video/${videoId}`;
    }

    return '';
  } catch (error) {
    console.error('Invalid video URL:', error);
    return '';
  }
};

export const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      const imageUrl = urlFor(value).width(1200).url();
      return (
        <figure className="my-8">
          <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden border border-primary-700/30">
            <Image
              src={imageUrl}
              alt={value.alt || "Blog image"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
          {value.caption && (
            <figcaption className="text-center text-sm text-text-muted mt-3">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    videoEmbed: ({ value }) => {
      const embedUrl = getEmbedUrl(value.url);
      return (
        <figure className="my-8">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-primary-700/30 bg-primary-900">
            <iframe
              src={embedUrl}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={value.caption || "Embedded video"}
            />
          </div>
          {value.caption && (
            <figcaption className="text-center text-sm text-text-muted mt-3">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    callout: ({ value }) => {
      const typeStyles = {
        info: 'border-accent-blue/30 bg-accent-blue/5',
        warning: 'border-yellow-500/30 bg-yellow-500/5',
        success: 'border-green-500/30 bg-green-500/5',
        error: 'border-red-500/30 bg-red-500/5',
        tip: 'border-purple-500/30 bg-purple-500/5',
      };
      const typeIcons = {
        info: 'ℹ️',
        warning: '⚠️',
        success: '✓',
        error: '✗',
        tip: '💡',
      };
      return (
        <div className={`my-6 p-4 rounded-lg border ${typeStyles[value.type as keyof typeof typeStyles]}`}>
          <div className="flex items-start gap-3">
            <span className="text-xl flex-shrink-0 mt-0.5">{typeIcons[value.type as keyof typeof typeIcons]}</span>
            <div className="flex-1">
              {value.title && (
                <h4 className="text-text-primary font-semibold mb-2">{value.title}</h4>
              )}
              <p className="text-text-secondary text-sm leading-relaxed whitespace-pre-wrap">{value.content}</p>
            </div>
          </div>
        </div>
      );
    },
    divider: ({ value }) => {
      const styles = {
        solid: 'border-t',
        dashed: 'border-t border-dashed',
        dotted: 'border-t border-dotted',
      };
      return (
        <hr className={`my-8 border-primary-700/30 ${styles[value.style as keyof typeof styles]}`} />
      );
    },
    code: ({ value }) => {
      return (
        <div className="my-6">
          {value.filename && (
            <div className="bg-primary-900/60 px-4 py-2 rounded-t-lg border border-b-0 border-primary-700/30 flex items-center justify-between">
              <span className="text-xs text-text-muted font-mono">{value.filename}</span>
              {value.language && (
                <span className="text-xs px-2 py-0.5 bg-accent-blue/10 text-accent-blue border border-accent-blue/20 rounded font-mono">
                  {value.language}
                </span>
              )}
            </div>
          )}
          <pre className={`p-4 bg-primary-900/40 overflow-x-auto border border-primary-700/30 ${value.filename ? 'rounded-t-none rounded-b-lg' : 'rounded-lg'}`}>
            <code className="text-sm text-text-primary font-mono leading-relaxed">
              {value.code}
            </code>
          </pre>
        </div>
      );
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl md:text-5xl font-bold text-text-primary mt-12 mb-6">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-10 mb-5">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl md:text-3xl font-bold text-text-primary mt-8 mb-4">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl md:text-2xl font-bold text-text-primary mt-6 mb-3">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-lg text-text-secondary mb-6 leading-relaxed">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-accent-blue/50 bg-primary-900/30 pl-6 pr-4 py-4 my-6 italic text-text-secondary">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      return (
        <a
          href={value.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-blue hover:text-accent-blue-light underline transition-colors"
        >
          {children}
        </a>
      );
    },
    internalLink: ({ children, value }) => {
      const slug = value?.reference?.slug?.current;
      return (
        <a
          href={`/blog/${slug}`}
          className="text-accent-blue hover:text-accent-blue-light underline transition-colors"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }) => (
      <strong className="font-bold text-text-primary">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-primary-800 text-accent-blue px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
    highlight: ({ children }) => (
      <mark className="bg-yellow-500/20 text-text-primary px-1 rounded">
        {children}
      </mark>
    ),
    underline: ({ children }) => (
      <span className="underline">{children}</span>
    ),
    'strike-through': ({ children }) => (
      <span className="line-through text-text-muted">{children}</span>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="space-y-2 mb-6 text-text-secondary list-disc pl-6">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="space-y-2 mb-6 text-text-secondary list-decimal pl-6">
        {children}
      </ol>
    ),
    checklist: ({ children }) => (
      <ul className="space-y-2 mb-6 text-text-secondary">
        {children}
      </ul>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="leading-relaxed">
        {children}
      </li>
    ),
    number: ({ children }) => (
      <li className="leading-relaxed">
        {children}
      </li>
    ),
    checklist: ({ children }) => (
      <li className="flex items-start gap-2 leading-relaxed">
        <span className="text-accent-blue mt-1">☐</span>
        <span className="flex-1">{children}</span>
      </li>
    ),
  },
};
