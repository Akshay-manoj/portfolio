"use client";

import { useState } from "react";
import { social } from "@/lib/data";

export function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  return (
    <button
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(social.email);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch {
          /* clipboard unavailable */
        }
      }}
      className="rounded-2xl border border-outline bg-surface px-10 py-5 font-bold text-on-surface transition-all hover:bg-surface-container-low"
    >
      {copied ? "Copied!" : "Copy Email Address"}
    </button>
  );
}
