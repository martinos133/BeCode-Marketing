"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const GALERIA_IMAGES = [
  ...[
    "DSC00253.jpg",
    "DSC00274.jpg",
    "DSC00309.jpg",
    "DSC00712.png",
    "DSC00824.jpg",
    "DSC00977.png",
    "DSC03152.jpg",
    "DSC03171.jpg",
    "DSC03616.jpg",
    "DSC03626.jpg",
    "DSC03848.jpg",
    "DSC03889.jpg",
    "DSC04522.jpg",
    "DSC04620.jpg",
    "DSC04647.jpg",
    "DSC04841.jpg",
    "DSC05271.jpg",
    "DSC05403.jpg",
    "DSC05739.jpg",
    "DSC06584.jpg",
    "DSC06604.jpg",
    "DSC06682.jpg",
    "DSC06813.jpg",
    "DSC07308.jpg",
    "DSC09095.jpg",
    "DSC09194.jpg",
  ].map((file) => ({ src: `/Galeria/${file}`, alt: file.replace(/\.[^.]+$/, "") })),
  { src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=800&fit=crop", alt: "Lifestyle záber" },
];

// Bento: každý obrázok má „veľkosť“ pre asymetrický grid
const BENTO_SIZES = [
  "tall", "wide", "default", "default", "wide", "default",
  "default", "tall", "default", "wide", "default", "default",
  "wide", "default", "default", "tall", "default", "default",
  "default", "wide", "default", "default", "default", "tall",
  "default", "default", "default",
] as const;

type Size = (typeof BENTO_SIZES)[number];

export function GaleriaGallery() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxSrc(null);
    };
    if (lightboxSrc) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [lightboxSrc]);

  return (
    <>
      {/* Lightbox */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          onClick={() => setLightboxSrc(null)}
          role="button"
          tabIndex={0}
          aria-label="Zavrieť náhľad"
          onKeyDown={(e) => e.key === "Escape" && setLightboxSrc(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            onClick={() => setLightboxSrc(null)}
            aria-label="Zavrieť"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <div
            className="relative max-h-[90vh] max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lightboxSrc}
              alt="Zväčšený náhľad"
              className="max-h-[90vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Bento grid – netradičný, moderný rozložený layout */}
      <div className="mt-8 grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-4 md:gap-4 md:auto-rows-[minmax(180px,1fr)]">
        {GALERIA_IMAGES.map((img, i) => {
          const size: Size = BENTO_SIZES[i] ?? "default";
          const span = {
            default: "min-h-[140px] md:min-h-[180px]",
            wide: "min-h-[140px] md:col-span-2 md:min-h-[200px]",
            tall: "min-h-[200px] md:row-span-2 md:min-h-0",
          }[size];

          return (
            <button
              key={img.src}
              type="button"
              className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-800/80 shadow-lg transition-all duration-300 hover:z-10 hover:scale-[1.03] hover:border-[#ffb400]/30 hover:shadow-[0_0_50px_-10px_rgba(255,180,0,0.35)] focus:outline-none focus:ring-2 focus:ring-[#ffb400] focus:ring-offset-2 focus:ring-offset-zinc-900 ${span}`}
              onClick={() => setLightboxSrc(img.src)}
            >
              <span className="absolute inset-0 z-[1]" />
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#ffb400] text-black opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
}
