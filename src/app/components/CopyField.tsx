"use client";

import { useState } from "react";

type CopyFieldProps = {
  label: string;
  value: string;
};

export default function CopyField({ label, value }: CopyFieldProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-300">
        <span className="font-semibold">{label}:</span> {value}
      </span>

      <button
        onClick={handleCopy}
        className="rounded-md border border-white/20 px-2 py-1 text-xs text-white/80 transition hover:border-orange-300 hover:text-white"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}
