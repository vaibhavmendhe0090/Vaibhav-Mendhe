"use client";
import React from "react";

// Minimal custom radar using simple SVG polygon for a lightweight UI
export default function RadarChart() {
  const size = 280;
  const center = size / 2;
  const radius = 110;
  const axes = 5; // 6am-10am etc. 5 areas like mock

  const getPoint = (i: number, r: number) => {
    const angle = (Math.PI * 2 * i) / axes - Math.PI / 2;
    return [center + r * Math.cos(angle), center + r * Math.sin(angle)];
  };

  const ringPath = (r: number) =>
    Array.from({ length: axes }, (_, i) => getPoint(i, r))
      .map(([x, y]) => `${x},${y}`)
      .join(" ");

  const dataScale = [0.7, 0.9, 0.8, 0.85, 0.75];

  return (
    <svg width={size} height={size}>
      {[1, 0.7, 0.4].map((t, idx) => (
        <polygon key={idx} points={ringPath(radius * t)} fill="none" stroke="#2b2b36" />
      ))}
      {/* average */}
      <polygon points={ringPath(radius * 0.8)} fill="#4cc6ff22" stroke="#4cc6ff33" />
      {/* today */}
      <polygon points={ringPath(radius)} fill="#53d6ff22" stroke="#53d6ff" />
    </svg>
  );
}

