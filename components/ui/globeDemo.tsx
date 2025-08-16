// GlobeDemo.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
  ssr: false,
});

export default function GlobeDemo() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 3,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 7,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];

  const sampleArcs = Array.from({ length: 30 }, (_, i) => ({
    order: (i % 14) + 1,
    startLat: Math.random() * 180 - 90,
    startLng: Math.random() * 360 - 180,
    endLat: Math.random() * 180 - 90,
    endLng: Math.random() * 360 - 180,
    arcAlt: Math.random() * 0.6 + 0.1,
    color: colors[Math.floor(Math.random() * colors.length)],
  }));

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] md:top-[120px] lg:w-[400px] lg:h-[500px] lg:top-[180px] sm:top-[100px] between0_640:top-[100px]">
        <World data={sampleArcs} globeConfig={globeConfig} />
      </div>
    </div>
  );
}
