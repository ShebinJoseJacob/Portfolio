"use client";

import { Suspense, useEffect, useState, useRef } from "react";

interface SplineSceneProps {
  scene: string;
  className?: string;
}

// Spline API interface based on @splinetool/react-spline
interface SplineAPI {
  setFPS?: (fps: number) => void;
  [key: string]: unknown;
}

type SplineComponentType = React.ComponentType<{
  scene: string;
  onLoad?: (spline: SplineAPI) => void;
  onError?: () => void;
  style?: React.CSSProperties;
}>;

export default function SplineScene({ scene, className = "" }: SplineSceneProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [SplineComponent, setSplineComponent] = useState<SplineComponentType | null>(null);
  const splineRef = useRef<SplineAPI | null>(null);

  useEffect(() => {
    // Dynamically import Spline only on client - load immediately for better performance
    import("@splinetool/react-spline")
      .then((mod) => {
        setSplineComponent(() => mod.default as unknown as SplineComponentType);
      })
      .catch((err) => {
        console.error("Failed to load Spline:", err);
        setHasError(true);
      });

    // Detect mobile devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Reduce frame rate on mobile for better scroll performance
  const onLoad = (spline: SplineAPI) => {
    splineRef.current = spline;
    if (isMobile && spline) {
      // Limit frame rate to 30fps on mobile
      try {
        spline.setFPS?.(30);
      } catch (e) {
        console.log('Could not set FPS');
      }
    }
  };

  const onError = () => {
    setHasError(true);
  };

  if (hasError) {
    return (
      <div className={`relative w-full h-full ${className} flex items-center justify-center bg-primary-900/30 rounded-lg border border-primary-700/50`}>
        <div className="text-text-muted text-sm">3D scene unavailable</div>
      </div>
    );
  }

  if (!SplineComponent) {
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
        <SplineComponent
          scene={scene}
          onLoad={onLoad}
          onError={onError}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </Suspense>
    </div>
  );
}
