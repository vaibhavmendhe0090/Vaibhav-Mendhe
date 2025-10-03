"use client";
import React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  fullWidth?: boolean;
};

export default function Button({ className, fullWidth = true, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "bg-[#3B3941] text-white rounded-md h-12 px-5 font-semibold tracking-wide active:translate-y-[1px]",
        fullWidth && "w-full",
        className
      )}
    />
  );
}

