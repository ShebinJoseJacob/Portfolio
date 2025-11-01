import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary-950 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-text-primary mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-4">
          Blog Post Not Found
        </h2>
        <p className="text-lg text-text-secondary mb-8">
          The blog post you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 bg-accent-blue hover:bg-accent-blue-light text-white px-6 py-3 rounded-lg font-medium transition-all hover:scale-[1.02]"
        >
          <ArrowLeft size={20} />
          Back to Blog
        </Link>
      </div>
    </div>
  );
}
