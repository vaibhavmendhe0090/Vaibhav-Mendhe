"use client";
import React from "react";

type Props = {
  percentage?: number; // 0-100
};

export default function Donut({ percentage = 72 }: Props) {
  const radius = 88;
  const stroke = 18;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative" style={{ width: 220, height: 220 }}>
      <svg height={220} width={220} className="-rotate-90">
        <defs>
          <linearGradient id="donutGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9EEAF9" />
            <stop offset="100%" stopColor="#3BB4E7" />
          </linearGradient>
        </defs>
        <circle
          stroke="#1b1b22"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={110}
          cy={110}
        />
        <circle
          stroke="url(#donutGradient)"
          fill="transparent"
          strokeLinecap="round"
          strokeWidth={stroke}
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset: offset, transition: "stroke-dashoffset 0.5s ease" }}
          r={normalizedRadius}
          cx={110}
          cy={110}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-sm text-white/60">remaining time</div>
        </div>
      </div>
    </div>
  );
}

