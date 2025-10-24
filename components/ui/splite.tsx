"use client";

import { Suspense, useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export default function SplineScene({ scene, className = "" }: SplineSceneProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Detect mobile devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Delay loading slightly to prioritize critical content
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 100);

    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timer);
    };
  }, []);

  if (!shouldLoad) {
    return (
      <div className={`relative w-full h-full ${className} flex items-center justify-center`}>
        <div className="w-16 h-16 border-4 border-accent-blue/20 border-t-accent-blue rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full ${className}`}>
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-accent-blue/20 border-t-accent-blue rounded-full animate-spin"></div>
          </div>
        }
      >
        <Spline
          scene={scene}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </Suspense>
    </div>
  );
}
