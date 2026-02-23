"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const FEED_IMAGES = [
  { src: encodeURI("/ig feedy/Kahn Clinic.png"), alt: "Kahn Clinic" },
  { src: encodeURI("/ig feedy/brgr2.jpg"), alt: "BRGR" },
  { src: encodeURI("/ig feedy/fitko.png"), alt: "Fitko" },
  { src: encodeURI("/ig feedy/modelha.jpg"), alt: "Modelha" },
];

export function IgFeedyGallery() {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpandedImage(null);
    };
    if (expandedImage) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [expandedImage]);

  return (
    <>
      {expandedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setExpandedImage(null)}
          role="button"
          tabIndex={0}
          aria-label="Zavrieť obrázok"
        >
          <div
            className="relative max-h-[90vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute -top-12 right-0 rounded-lg bg-white/10 px-4 py-2 text-white hover:bg-white/20"
              onClick={() => setExpandedImage(null)}
            >
              ✕ Zavrieť
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={expandedImage}
              alt="Zväčšený náhľad"
              className="max-h-[90vh] w-auto max-w-full rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-5 md:gap-6">
        {FEED_IMAGES.map((img, i) => (
          <button
            key={i}
            type="button"
            className="group relative aspect-square overflow-hidden rounded-xl bg-zinc-800 shadow-lg ring-1 ring-white/5 transition-all duration-300 hover:scale-[1.02] hover:ring-[#ffb400]/50 hover:shadow-xl hover:shadow-[#ffb400]/10 focus:outline-none focus:ring-2 focus:ring-[#ffb400] focus:ring-offset-2 focus:ring-offset-zinc-900"
            onClick={() => setExpandedImage(img.src)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, 45vw"
            />
          </button>
        ))}
      </div>
    </>
  );
}
