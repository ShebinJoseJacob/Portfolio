"use client";

import { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function RobotModel() {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.1 : 1}
    >
      {/* Head */}
      <mesh position={[0, 1.5, 0]} castShadow>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial color="#3b82f6" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Eyes */}
      <mesh position={[-0.2, 1.6, 0.41]} castShadow>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#ffffff" emissive="#60a5fa" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0.2, 1.6, 0.41]} castShadow>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#ffffff" emissive="#60a5fa" emissiveIntensity={0.5} />
      </mesh>

      {/* Antenna */}
      <mesh position={[0, 2.1, 0]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 0.4, 8]} />
        <meshStandardMaterial color="#525252" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, 2.4, 0]} castShadow>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.8} />
      </mesh>

      {/* Body */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <boxGeometry args={[1.2, 1.5, 0.8]} />
        <meshStandardMaterial color="#171717" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Chest Panel */}
      <mesh position={[0, 0.6, 0.41]} castShadow>
        <boxGeometry args={[0.6, 0.8, 0.05]} />
        <meshStandardMaterial color="#3b82f6" metalness={0.5} roughness={0.5} />
      </mesh>

      {/* Arms */}
      <mesh position={[-0.8, 0.5, 0]} castShadow>
        <cylinderGeometry args={[0.15, 0.15, 1.2, 8]} />
        <meshStandardMaterial color="#262626" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0.8, 0.5, 0]} castShadow>
        <cylinderGeometry args={[0.15, 0.15, 1.2, 8]} />
        <meshStandardMaterial color="#262626" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Legs */}
      <mesh position={[-0.3, -0.6, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.2, 1.0, 8]} />
        <meshStandardMaterial color="#262626" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0.3, -0.6, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.2, 1.0, 8]} />
        <meshStandardMaterial color="#262626" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Feet */}
      <mesh position={[-0.3, -1.2, 0.15]} castShadow>
        <boxGeometry args={[0.25, 0.1, 0.4]} />
        <meshStandardMaterial color="#3b82f6" metalness={0.6} roughness={0.4} />
      </mesh>
      <mesh position={[0.3, -1.2, 0.15]} castShadow>
        <boxGeometry args={[0.25, 0.1, 0.4]} />
        <meshStandardMaterial color="#3b82f6" metalness={0.6} roughness={0.4} />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#3b82f6" />
      <pointLight position={[-10, -10, -10]} intensity={0.4} color="#60a5fa" />
      <spotLight
        position={[0, 5, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.5}
        castShadow
      />

      <RobotModel />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
    </>
  );
}

export default function Robot3D() {
  const [mounted, setMounted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-primary-900/50 rounded-lg min-h-[400px] md:min-h-[500px]">
        <div className="text-text-muted">Initializing...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-primary-900/30 border border-primary-700/50 rounded-lg min-h-[400px] md:min-h-[500px] p-8 text-center">
        <div className="text-text-muted mb-2">3D Robot unavailable</div>
        <div className="text-text-muted text-sm">{error}</div>
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[400px] md:min-h-[500px] rounded-lg overflow-hidden bg-primary-900/30 border border-primary-700/50">
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-text-muted">Loading 3D scene...</div>
          </div>
        }
      >
        <Canvas
          camera={{ position: [0, 1, 5], fov: 50 }}
          shadows
          onCreated={({ gl }) => {
            gl.setClearColor("#0a0a0a");
          }}
          onError={(error) => {
            console.error("Canvas error:", error);
            setError("WebGL not supported");
          }}
        >
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
}
