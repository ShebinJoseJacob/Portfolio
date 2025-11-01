"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to error reporting service
    console.error("Blog error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-primary-950 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-accent-orange mb-4">Error</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-4">
          Failed to Load Blog
        </h2>
        <p className="text-lg text-text-secondary mb-8">
          We couldn't load the blog content. This might be a temporary issue.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="bg-accent-blue hover:bg-accent-blue-light text-white px-6 py-3 rounded-lg font-medium transition-all hover:scale-[1.02]"
          >
            Try Again
          </button>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-primary-800 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-all hover:scale-[1.02] border border-primary-600"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
