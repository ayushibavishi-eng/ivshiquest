"use client";

import { IvshiMark } from "@/components/companion";
import { useIvshiPresence } from "@/components/ivshi/ivshi-presence";
import "./breakthrough-moment.css";

export function BreakthroughLayer() {
  const { breakthroughNonce } = useIvshiPresence();

  if (!breakthroughNonce) {
    return null;
  }

  return <BreakthroughMoment key={breakthroughNonce} />;
}

function BreakthroughMoment() {
  return (
    <div
      className="ivshi-breakthrough"
      aria-hidden="true"
      data-ivshi-breakthrough="travel"
    >
      <span className="ivshi-breakthrough-fly">
        <IvshiMark state="celebrating" size={32} decorative />
      </span>
      <span className="ivshi-breakthrough-bloom">
        <BreakthroughBloom />
      </span>
    </div>
  );
}

function BreakthroughBloom() {
  return (
    <svg width="40" height="46" viewBox="-10 -12 20 24">
      <path
        d="M0 10 C0 4 0 1 0 -2"
        fill="none"
        stroke="#4d7a5e"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M0 4 C-5 2 -6 -1 -2.5 -1"
        fill="#7eab7c"
        stroke="#3a2418"
        strokeWidth="0.5"
      />
      <path
        d="M0 -1.2 C-3.4 -6.5 0 -10.5 0 -3.2 C0 -10.5 3.4 -6.5 0 -1.2Z"
        fill="#e7b7c8"
        stroke="#8a5a3c"
        strokeWidth="0.55"
      />
      <path
        d="M0 -1.2 C-5.2 -3.2 -5.8 2.4 -1.2 1.6 C-5.8 2.4 -2.2 6.2 0 1.4 C2.2 6.2 5.8 2.4 1.2 1.6 C5.8 2.4 5.2 -3.2 0 -1.2Z"
        fill="#f0c9d4"
        stroke="#8a5a3c"
        strokeWidth="0.45"
      />
      <circle cx="0" cy="-0.2" r="1.55" fill="#f7e7c6" />
    </svg>
  );
}
