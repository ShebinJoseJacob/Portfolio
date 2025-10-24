"use client";

import { Suspense, useEffect, useState, useRef } from "react";
import Spline from "@splinetool/react-spline";

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export default function SplineScene({ scene, className = "" }: SplineSceneProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const splineRef = useRef<any>(null);

  useEffect(() => {
    // Detect mobile devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Delay loading more on mobile to prioritize scroll performance
    const delay = isMobile ? 500 : 100;
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, delay);

    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timer);
    };
  }, [isMobile]);

  // Reduce frame rate on mobile for better scroll performance
  const onLoad = (spline: any) => {
    splineRef.current = spline;
    if (isMobile && spline) {
      // Limit frame rate to 30fps on mobile
      try {
        spline.setFPS && spline.setFPS(30);
      } catch (e) {
        console.log('Could not set FPS');
      }
    }
  };

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
          onLoad={onLoad}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </Suspense>
    </div>
  );
}
