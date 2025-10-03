"use client";
import React from "react";
import TextField from "./TextField";

export default function PasswordField(props: React.ComponentProps<typeof TextField>) {
  const [visible, setVisible] = React.useState(false);
  return (
    <div className="relative">
      <TextField {...props} type={visible ? "text" : "password"} />
      <button
        type="button"
        onClick={() => setVisible((v) => !v)}
        aria-label="Toggle password visibility"
        className="absolute right-1 top-1/2 -translate-y-1/2 text-current/70"
      >
        {visible ? "🙈" : "👁️"}
      </button>
    </div>
  );
}

