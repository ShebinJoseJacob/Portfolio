"use client";

import { Suspense } from "react";
import Spline from "@splinetool/react-spline";

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export default function SplineScene({ scene, className = "" }: SplineSceneProps) {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-text-muted">Loading 3D scene...</div>
          </div>
        }
      >
        <Spline scene={scene} />
      </Suspense>
    </div>
  );
}
