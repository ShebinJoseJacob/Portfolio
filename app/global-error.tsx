"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to error reporting service
    console.error("Global error:", error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
          <div className="max-w-2xl w-full text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-red-500 mb-4">500</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Critical Error
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              A critical error occurred. Please refresh the page.
            </p>
            <button
              onClick={() => reset()}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all"
            >
              Refresh Page
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
