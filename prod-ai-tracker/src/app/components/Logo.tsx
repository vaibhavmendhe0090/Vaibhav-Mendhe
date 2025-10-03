import React from "react";

export default function Logo({ dark }: { dark?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div className="font-extrabold text-2xl" style={{ color: dark ? "#fff" : "#222" }}>wisr</div>
      <div
        className="w-6 h-6 rounded-full"
        style={{ background: dark ? "#8AE" : "#333" }}
        aria-hidden
      />
    </div>
  );
}

