"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

type MediaItem = { src: string; alt: string } | { video: string; alt: string };

type WorkCategoryRowProps = {
  category: string;
  images: MediaItem[];
};

export function WorkCategoryRow({ category, images }: WorkCategoryRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [expandedVideo, setExpandedVideo] = useState<string | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpandedVideo(null);
    };
    if (expandedVideo) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [expandedVideo]);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const items = el.querySelectorAll<HTMLElement>("[data-carousel-item]");
    if (items.length === 0) return;

    const gap = 16;
    const itemWidth = items[0].offsetWidth + gap;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) return;

    const currentIndex = Math.min(
      Math.floor((el.scrollLeft + 10) / itemWidth),
      items.length - 1
    );
    let targetIndex = dir === "right" ? currentIndex + 1 : currentIndex - 1;

    if (targetIndex >= items.length) targetIndex = 0;
    else if (targetIndex < 0) targetIndex = items.length - 1;

    const targetScroll = Math.min(targetIndex * itemWidth, maxScroll);
    el.scrollTo({ left: targetScroll, behavior: "smooth" });
  };

  return (
    <div className="group">
      {expandedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setExpandedVideo(null)}
          role="button"
          tabIndex={0}
          aria-label="Zavrieť video"
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute -top-12 right-0 rounded-lg bg-white/10 px-4 py-2 text-white hover:bg-white/20"
              onClick={() => setExpandedVideo(null)}
            >
              ✕ Zavrieť
            </button>
            <video
              src={expandedVideo}
              className="max-h-[90vh] w-full rounded-lg object-contain"
              controls
              autoPlay
              playsInline
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <h3 className="mb-4 text-lg font-semibold text-white">{category}</h3>
      <div className="relative flex items-center gap-4">
        <div
          ref={scrollRef}
          className="flex flex-1 min-w-0 gap-4 overflow-x-auto scroll-smooth py-2 scrollbar-hide"
          style={{ scrollSnapType: "x mandatory", scrollSnapStop: "always" } as React.CSSProperties}
        >
          {images.map((item, i) => (
            <div
              key={i}
              data-carousel-item
              className={`relative h-80 w-80 shrink-0 overflow-hidden rounded-lg bg-zinc-800 md:h-96 md:w-96 ${"video" in item ? "cursor-pointer" : ""}`}
              style={{ scrollSnapAlign: "start" }}
              onClick={() => "video" in item && setExpandedVideo(item.video)}
              onKeyDown={(e) => "video" in item && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), setExpandedVideo(item.video))}
              role={"video" in item ? "button" : undefined}
              tabIndex={"video" in item ? 0 : undefined}
            >
              {"video" in item ? (
                <video
                  src={item.video}
                  className="h-full w-full object-cover"
                  playsInline
                  muted
                  loop
                  autoPlay
                  onEnded={(e) => {
                    e.currentTarget.currentTime = 0;
                    e.currentTarget.play();
                  }}
                />
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="384px"
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex shrink-0 flex-col gap-2">
          <button
            type="button"
            onClick={() => scroll("left")}
            className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-white/30 bg-black/80 text-lg text-white transition-all hover:scale-110 hover:bg-white/20 hover:border-white/60 active:scale-95"
            aria-label={`${category} – predchádzajúci`}
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-white/30 bg-black/80 text-lg text-white transition-all hover:scale-110 hover:bg-white/20 hover:border-white/60 active:scale-95"
            aria-label={`${category} – ďalší`}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
