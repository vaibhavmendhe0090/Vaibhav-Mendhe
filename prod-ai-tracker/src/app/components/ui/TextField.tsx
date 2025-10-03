"use client";
import React from "react";
import clsx from "clsx";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  dark?: boolean;
};

export default function TextField({ label, className, dark, ...props }: Props) {
  return (
    <label className="block w-full">
      {label && (
        <div className={clsx("mb-2 text-sm", dark ? "text-white/80" : "text-black/70")}>{label}</div>
      )}
      <input
        {...props}
        className={clsx(
          "w-full bg-transparent outline-none h-12 px-1 placeholder:opacity-70",
          dark ? "text-white input-underline-dark" : "text-black input-underline",
          className
        )}
      />
    </label>
  );
}

