"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
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

  return (
    <div className="min-h-screen bg-black">
      {/* Lightbox pre video */}
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

      {/* Hero */}
      <section className="relative min-h-[500px] overflow-hidden px-6 pb-20 pt-12 md:pt-16 md:min-h-[600px]">
        <video
          src={encodeURI("/BeCode Hero Trailer_4K_V2.mov")}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-block rounded-lg border border-[#ffb400] px-4 py-2">
            <span className="text-xs font-medium uppercase tracking-wider text-zinc-300">
              Agentúra pre B2B marketing roku 2024
            </span>
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            <span className="text-white">Výsledky, ktoré </span>
            <span className="text-[#ffb400] italic">hovoria </span>
            <span className="text-white">samy za seba</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">
            Máme šťastie pracovať s radom klientov, doručiť im viac než len čísla. Pozrite sa, ako
            vyzerajú ich výsledky v podobe, ktorá hovorí sama za seba.
          </p>
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-[#ffb400]/50 bg-[#262626] p-6 text-center">
              <p className="text-sm text-zinc-400">Dosiahnuté ciele</p>
              <p className="mt-2 text-3xl font-bold text-white">2 450 000+</p>
              <p className="mt-1 text-sm text-[#ffb400]">+32% vs minulý mesiac</p>
            </div>
            <div className="rounded-lg border border-[#ffb400]/50 bg-[#262626] p-6 text-center">
              <p className="text-sm text-zinc-400">PPCK-kliknutia</p>
              <p className="mt-2 text-3xl font-bold text-white">15 230</p>
              <p className="mt-1 text-sm text-[#ffb400]">+25.40% medziročne</p>
            </div>
            <div className="rounded-lg border border-[#ffb400]/50 bg-[#262626] p-6 text-center">
              <p className="text-sm text-zinc-400">ROI</p>
              <p className="mt-2 text-3xl font-bold text-white">8.4x</p>
              <p className="mt-1 text-sm text-[#ffb400]">+1.2x zlepšenie</p>
            </div>
          </div>
        </div>
      </section>

      {/* Robíme obsah */}
      <section className="border-t border-white/5 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
                ROBÍME OBSAH, PRI KTOROM ĽUDIA NEPRESTANÚ SKROLOVAŤ
              </h2>
              <p className="mt-4 max-w-xl text-zinc-400">
                Naša organická stratégia sa prejavuje na pozíciách, ktoré nemáme. Ak hľadáte v
                oblasti, ktorá je pre vás dôležitá, radi vám pomôžeme.
              </p>
            </div>
            <Link
              href="#studie"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#ffb400] px-4 py-2.5 text-sm font-medium text-[#1a1a1a]"
            >
              Pozrite naše prípadové štúdie
              <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { views: "618k+", clicks: "12 400k", shares: "2.1k", gradient: "from-amber-900/80 to-zinc-800", video: encodeURI("/Naše croissanty sú jednoducho závislosť 🤣🤤.mp4") },
              { views: "80k+", clicks: "7.2k", shares: "5.4k", gradient: "from-zinc-600 to-zinc-800", video: encodeURI("/❤️ Sme v tom spolu. A je nás viac, než sme čakali 🙏Naša vianočná výzva dospela do finále a výsl.mp4") },
              { views: "1.2M", clicks: "4.8k", shares: "7.0k", gradient: "from-slate-700 to-zinc-800", video: encodeURI("/Nestíhaš, ale nechceš vynechať tréning👉 Supersérie sú riešenie.✔️ šetria čas✔️ zvyšujú intenzit.mp4") },
              { views: "210k+", clicks: "1.9k", shares: "1.9k", gradient: "from-zinc-700 to-amber-900/30", video: "/Opravene_02.mp4" },
            ].map((card, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-lg bg-[#262626] ${card.video ? "cursor-pointer" : ""}`}
                onClick={() => card.video && setExpandedVideo(card.video)}
                onKeyDown={(e) => {
                  if (card.video && (e.key === "Enter" || e.key === " ")) {
                    e.preventDefault();
                    setExpandedVideo(card.video);
                  }
                }}
                role={card.video ? "button" : undefined}
                tabIndex={card.video ? 0 : undefined}
              >
                <div className={`relative aspect-[4/5] bg-gradient-to-b ${card.gradient}`}>
                  {card.video ? (
                    <video
                      src={card.video}
                      className="absolute inset-0 h-full w-full object-cover"
                      playsInline
                      muted
                      loop
                      autoPlay
                      onEnded={(e) => {
                        e.currentTarget.currentTime = 0;
                        e.currentTarget.play();
                      }}
                    />
                  ) : null}
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-4">
                    <div className="flex w-full flex-wrap gap-3 text-sm text-white">
                      <span className="flex items-center gap-1.5">
                        <span className="text-[#ffb400]">👁</span> Views: {card.views}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="text-[#ffb400]">🖱</span> Clicks: {card.clicks}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="text-[#ffb400]">↗</span> Shares: {card.shares}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premieňame centy na eurá */}
      <section className="border-t border-white/5 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
                PREMIEŇAME CENTY <span className="text-[#ffb400]">NA EURA</span>
              </h2>
              <p className="mt-4 text-zinc-400">
                PPC nie je len o tom, koľko miniete, ale o tom, ako efektívne. Naše kampane sú od
                začiatočníkov po profíkov. Od desiatok eur po tisíce eur, naše kampane vám prinášajú
                výsledky, ktoré hovoria samy za seba.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-2 text-white">
                  <span className="h-2 w-2 shrink-0 rounded-sm bg-[#ffb400]" /> Pravidelné výsledky
                </li>
                <li className="flex items-center gap-2 text-white">
                  <span className="h-2 w-2 shrink-0 rounded-sm bg-[#ffb400]" /> A/B Testing 2.0
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-[#ffb400]/30 bg-[#262626] p-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-zinc-400">Case Study: E-commerce Klient</span>
                <span className="rounded bg-emerald-600/20 px-2 py-1 text-xs font-medium text-emerald-400">
                  SUCCESS
                </span>
              </div>
              <p className="mt-4 text-xs text-zinc-500">TIME | 2021 | 2023 | 2025</p>
              <div className="mt-4 space-y-4">
                <div>
                  <div className="h-3 w-full overflow-hidden rounded-full bg-zinc-700">
                    <div
                      className="h-full rounded-full bg-[#ffb400]"
                      style={{ width: "79%" }}
                    />
                  </div>
                  <p className="mt-1 text-sm text-[#ffb400]">ROI | 7.9x</p>
                </div>
                <div>
                  <div className="h-3 w-full overflow-hidden rounded-full bg-zinc-700">
                    <div
                      className="h-full rounded-full bg-blue-500"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <p className="mt-1 text-sm text-blue-400">Revenue | +200%</p>
                </div>
              </div>
              <div className="mt-6 flex gap-4">
                <div className="flex-1 rounded-lg border border-white/10 bg-zinc-800/50 p-4 text-center">
                  <p className="text-xs text-zinc-400">ROAS</p>
                  <p className="text-2xl font-bold text-white">2.1x</p>
                </div>
                <div className="flex-1 rounded-lg border border-[#ffb400]/50 bg-zinc-800/50 p-4 text-center">
                  <p className="text-xs text-zinc-400">ROI</p>
                  <p className="text-2xl font-bold text-[#ffb400]">8.4x</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Viditeľnosť */}
      <section className="border-t border-white/5 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            {/* Ľavá sekcia – graf a metriky */}
            <div className="rounded-xl border border-white/10 bg-[#262626] p-6 shadow-lg">
              <p className="text-xs font-medium uppercase tracking-wider text-[#A0A0A0]">
                GOOGLE SEARCH CONSOLE
              </p>
              <h3 className="mt-1 text-xl font-bold italic text-white md:text-2xl">
                Organický rast návštevnosti
              </h3>
              <div className="relative mt-6">
                {/* Ikona trendu vpravo hore */}
                <div className="absolute right-0 top-0 flex h-8 w-8 items-center justify-center rounded bg-[#ffb400]/20 text-[#ffb400]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                </div>
                {/* Pruhový graf: 4 modré + 3 žlté (výška rastie) */}
                <div className="flex items-end justify-between gap-1.5" style={{ height: "160px" }}>
                  {[
                    { h: 45, color: "#3A4D67" },
                    { h: 50, color: "#3A4D67" },
                    { h: 48, color: "#3A4D67" },
                    { h: 52, color: "#3A4D67" },
                    { h: 65, color: "#ffb400" },
                    { h: 82, color: "#ffb400" },
                    { h: 100, color: "#ffb400" },
                  ].map((bar, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t min-w-0"
                      style={{
                        height: `${bar.h}%`,
                        backgroundColor: bar.color,
                      }}
                    />
                  ))}
                </div>
                {/* Metriky pod grafom */}
                <div className="mt-6 grid grid-cols-4 gap-4">
                  <div>
                    <p className="text-xs text-[#A0A0A0]">IMPRESIE</p>
                    <p className="mt-0.5 text-lg font-bold text-white">+450%</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#A0A0A0]">KLIKNUTIA</p>
                    <p className="mt-0.5 text-lg font-bold text-white">+320%</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#A0A0A0]">POZÍCIE 1-3</p>
                    <p className="mt-0.5 text-lg font-bold text-white">154</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#A0A0A0]">NÁVRATNOSŤ</p>
                    <p className="mt-0.5 text-lg font-bold text-white">∞ ROAS</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Pravá sekcia – nadpis a zoznam */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold uppercase leading-tight text-white md:text-4xl">
                VIDITEĽNOSŤ, KTORÁ{" "}
                <span className="text-[#ffb400]">NEKONČÍ</span>{" "}
                VYPNUTÍM KREDITU
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white">
                Zatiaľ čo PPC vám prináša okamžité výsledky, SEO buduje váš digitálny majetok.
                Investícia do organického rastu sa vám bude vracať roky po tom, čo sme prácu
                dokončili.
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  "E-commerce optimalizácia pre Shoptet & Shopify",
                  "Technické SEO a Core Web Vitals",
                  "Strategický Content Marketing",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ffb400] text-xs text-[#1a1a1a]"
                      aria-hidden
                    >
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Absolútna transparentnosť */}
      <section className="border-t border-white/5 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            ABSOLÚTNA TRANSPARENTNOSŤ
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            Naše riešenia sú na mieru ušité. Žiadne skratky, výsledky sa ukážu.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-[#262626] p-8 text-left">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#ffb400]/20 text-2xl">
                📄
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">MESAČNÝ REPORT</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Naši klienti dostávajú 24/7 podrobný mesačný report
              </p>
              <button
                type="button"
                className="mt-6 rounded-lg bg-[#ffb400] px-4 py-2.5 text-sm font-medium text-[#1a1a1a]"
              >
                Stiahnuť report
              </button>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#262626] p-8 text-left">
              <div className="relative aspect-video overflow-hidden rounded-lg bg-zinc-700">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ffb400] text-3xl text-[#1a1a1a]">
                    ▶
                  </span>
                </div>
              </div>
              <p className="mt-4 text-sm italic text-zinc-400">
                „Becode nám pomohlo získať vyššie pozície vo vyhľadávaní a zároveň znížiť náklady.“
              </p>
              <p className="mt-2 text-sm font-medium text-[#ffb400]">Marek Zlatý | CEO BRAVO</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#ffb400] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-[#1a1a1a] md:text-4xl">
            STE PRIPRAVENÍ NA VÁŠ RAST?
          </h2>
          <p className="mt-4 text-[#1a1a1a]/80">
            Nečakajte. Stavte na dáta a overenú stratégiu, ktorá funguje.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              className="rounded-lg bg-[#262626] px-6 py-3 text-sm font-medium text-white"
            >
              CHCEM ONLINE PORADENSTVO
            </button>
            <button
              type="button"
              className="rounded-lg border-2 border-[#1a1a1a] bg-transparent px-6 py-3 text-sm font-medium text-[#1a1a1a]"
            >
              POZRITE NAŠE VÝSLEDKY
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <Link href="/" className="flex items-center gap-1.5 text-xl font-bold text-white">
              <span className="text-[#ffb400]">▾</span> BECODE
            </Link>
            <p className="mt-2 text-xs text-zinc-500">© 2023 Becode. Všetky práva vyhradené.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-400">
            <Link href="#" className="hover:text-white">Instagram</Link>
            <Link href="#" className="hover:text-white">Facebook</Link>
            <Link href="#" className="hover:text-white">TikTok</Link>
            <Link href="#" className="hover:text-white">Linkedin</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
