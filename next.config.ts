import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  experimental: {
    // Optimize for production
    optimizePackageImports: ['lucide-react', 'framer-motion', '@splinetool/react-spline'],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'], // AVIF first for better compression
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    qualities: [75, 85], // Support both default (75) and high quality (85)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },

  // Remove console logs in production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  // Security and performance headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              // Note: unsafe-eval required for Spline 3D WebGL, unsafe-inline for Next.js hydration
              // Consider using nonces in the future for better security
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://prod.spline.design https://unpkg.com https://www.googletagmanager.com https://www.google-analytics.com",
              "script-src-attr 'none'", // Prevent inline event handlers (e.g., onclick)
              // Note: unsafe-inline required for Framer Motion and styled components
              "style-src 'self' 'unsafe-inline'",
              "style-src-attr 'unsafe-inline'", // Allow inline styles on elements
              "img-src 'self' data: blob: https://images.unsplash.com https://prod.spline.design https://img.youtube.com https://i.ytimg.com https://cdn.sanity.io https://www.google-analytics.com https://www.googletagmanager.com",
              "font-src 'self' data:",
              "connect-src 'self' https://prod.spline.design https://unpkg.com https://*.sanity.io https://*.apicdn.sanity.io https://www.google-analytics.com https://analytics.google.com https://*.analytics.google.com",
              "media-src 'self' data: blob: https://prod.spline.design",
              "frame-src 'self' https://www.youtube.com https://player.vimeo.com",
              "worker-src 'self' blob:", // For web workers (Spline may use these)
              "child-src 'self' blob:", // Fallback for older browsers
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'", // Prevent clickjacking
              "manifest-src 'self'", // For PWA manifest
              // Only upgrade to HTTPS in production
              ...(process.env.NODE_ENV === 'production' ? ["upgrade-insecure-requests"] : []),
            ].join('; '),
          },
        ],
      },
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
