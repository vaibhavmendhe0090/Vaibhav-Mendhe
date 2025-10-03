"use client";
import React from "react";

export default function StreakGrid() {
  const days = 30;
  const data = React.useMemo(() => Array.from({ length: days }, (_, i) => (i % 7 === 0 ? 0 : (i * 7) % 4)), []);
  const colors = ["#3a3a45", "#2d8f4d", "#26a35a", "#1bb56a"];
  return (
    <div className="grid grid-cols-7 gap-2">
      {data.map((v, i) => (
        <div key={i} className="w-8 h-8 rounded-md" style={{ background: colors[v] }} />
      ))}
    </div>
  );
}

