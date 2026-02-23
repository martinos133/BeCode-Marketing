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
          src={encodeURI("/BeCode Hero Trailer_4K_V2.mp4")}
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

      {/* Premieňame centy na eurá – nadčasovo moderné, výborná čitateľnosť */}
      <section className="border-t border-white/5 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 lg:items-start">
            <div className="max-w-2xl">
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#ffb400]/80">
                PPC
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl md:leading-[1.2]">
                Premieňame centy <span className="text-[#ffb400]">na eurá</span>
              </h2>
              <p className="mt-4 text-base leading-[1.75] text-white/90 md:text-lg">
                PPC stratégie, ktoré nekončia pri kliknutí, ale pri konverzii.
              </p>
              <p className="mt-5 text-[15px] leading-[1.8] text-white/80 md:text-base">
                PPC reklama v našom podaní nie je lotéria. Je to presne kalibrovaný stroj na rast
                vášho biznisu. Či už začínate s rozpočtom v desiatkach eur, alebo spravujete
                tisícové kampane, náš cieľ zostáva rovnaký: maximalizovať návratnosť každej
                investovanej mince (ROAS).
              </p>
              <div className="mt-10 border-t border-white/[0.06] pt-8">
                <h3 className="text-base font-semibold tracking-tight text-white md:text-lg">
                  V čom spočíva naša sila?
                </h3>
                <ul className="mt-6 space-y-7">
                  <li className="flex gap-4">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#ffb400]/90" />
                    <div>
                      <p className="font-medium text-white">Pravidelné výsledky, nie náhody</p>
                      <p className="mt-2 text-[15px] leading-[1.7] text-white/75">
                        Nečakáme na zázrak. Kampane neustále monitorujeme a ladíme v reálnom čase,
                        aby sme eliminovali neefektívne výdavky a posilnili to, čo zarába.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#ffb400]/90" />
                    <div>
                      <p className="font-medium text-white">A/B Testing 2.0</p>
                      <p className="mt-2 text-[15px] leading-[1.7] text-white/75">
                        Testujeme všetko. Od farby tlačidla cez texty headlinov až po cieľové
                        publiká. Naše rozhodnutia sú založené na tvrdých dátach, nie na pocitoch.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#ffb400]/90" />
                    <div>
                      <p className="font-medium text-white">Škálovanie s rozumom</p>
                      <p className="mt-2 text-[15px] leading-[1.7] text-white/75">
                        Keď nájdeme víťaznú kombináciu, vieme ju bezpečne škálovať. Z desiatok eur
                        na tisíce tak, aby efektivita rástla spolu s vaším obratom.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#ffb400]/90" />
                    <div>
                      <p className="font-medium text-white">Transparentnosť nadovšetko</p>
                      <p className="mt-2 text-[15px] leading-[1.7] text-white/75">
                        Presne viete, kam ide každý cent. Reportujeme jasne a zameriavame sa na
                        metriky s reálnym dopadom na váš zisk – nie na „páčiky“.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <blockquote className="mt-10 border-l-2 border-[#ffb400]/70 pl-6 text-[15px] leading-[1.75] italic text-white/85 md:text-base">
                „Vaša reklama by nemala byť nákladom, ale vašou najlepšou investíciou.“ S BeCode
                získate partnera, ktorý stráži váš rozpočet, akoby bol jeho vlastný.
              </blockquote>
            </div>
            <div className="flex w-full max-w-md flex-col gap-6 shrink-0 self-start lg:max-w-sm">
              {/* Case Study */}
              <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-b from-zinc-900/90 to-zinc-900/50 p-7 shadow-xl lg:p-8">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#ffb400]/70">
                  Case Study
                </p>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  E-commerce Klient
                </h3>
                <span className="mt-3 inline-block rounded-full bg-emerald-500/15 px-2.5 py-1 text-[11px] font-medium text-emerald-400">
                  SUCCESS
                </span>
                <p className="mt-4 text-xs text-white/50">2021 → 2023 → 2025</p>
                <div className="mt-6 space-y-5">
                  <div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-white/[0.06]">
                      <div
                        className="h-full rounded-full bg-[#ffb400]/90"
                        style={{ width: "79%" }}
                      />
                    </div>
                    <p className="mt-2 text-sm font-medium text-white/90">ROI 7.9x</p>
                  </div>
                  <div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-white/[0.06]">
                      <div
                        className="h-full rounded-full bg-blue-400/90"
                        style={{ width: "100%" }}
                      />
                    </div>
                    <p className="mt-2 text-sm font-medium text-blue-300/90">Revenue +200%</p>
                  </div>
                </div>
                <div className="mt-6 flex gap-3">
                  <div className="min-w-0 flex-1 rounded-xl border border-white/[0.06] bg-white/[0.03] py-4 text-center">
                    <p className="text-[11px] font-medium uppercase tracking-wider text-white/50">
                      ROAS
                    </p>
                    <p className="mt-1 text-2xl font-semibold tracking-tight text-white">2.1x</p>
                  </div>
                  <div className="min-w-0 flex-1 rounded-xl border border-[#ffb400]/25 bg-[#ffb400]/5 py-4 text-center">
                    <p className="text-[11px] font-medium uppercase tracking-wider text-[#ffb400]/80">
                      ROI
                    </p>
                    <p className="mt-1 text-2xl font-semibold tracking-tight text-[#ffb400]">
                      8.4x
                    </p>
                  </div>
                </div>
              </div>

              {/* PPC v číslach – prehľad metrík */}
              <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-b from-zinc-900/90 to-zinc-900/50 p-7 shadow-xl lg:p-8">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#ffb400]/70">
                  PPC v číslach
                </p>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  Naše kampane v praxi
                </h3>
                <p className="mt-2 text-xs text-white/50">Priemer za posledných 12 mesiacov</p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-4 text-center">
                    <p className="text-[11px] font-medium uppercase tracking-wider text-white/50">
                      Priem. ROAS
                    </p>
                    <p className="mt-1 text-2xl font-semibold tracking-tight text-white">4.2x</p>
                    <p className="mt-0.5 text-[10px] text-emerald-400/90">↑ 0.8x YoY</p>
                  </div>
                  <div className="rounded-xl border border-[#ffb400]/25 bg-[#ffb400]/5 px-4 py-4 text-center">
                    <p className="text-[11px] font-medium uppercase tracking-wider text-[#ffb400]/80">
                      Priem. ROI
                    </p>
                    <p className="mt-1 text-2xl font-semibold tracking-tight text-[#ffb400]">
                      6.1x
                    </p>
                    <p className="mt-0.5 text-[10px] text-emerald-400/90">↑ 1.2x YoY</p>
                  </div>
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-4 text-center">
                    <p className="text-[11px] font-medium uppercase tracking-wider text-white/50">
                      CPC ↓
                    </p>
                    <p className="mt-1 text-2xl font-semibold tracking-tight text-white">0.42 €</p>
                    <p className="mt-0.5 text-[10px] text-emerald-400/90">−18% YoY</p>
                  </div>
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-4 text-center">
                    <p className="text-[11px] font-medium uppercase tracking-wider text-white/50">
                      Konverzie
                    </p>
                    <p className="mt-1 text-2xl font-semibold tracking-tight text-white">+127%</p>
                    <p className="mt-0.5 text-[10px] text-emerald-400/90">vs. baseline</p>
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-3">
                  <span className="text-xs text-white/60">A/B testov za mesiac</span>
                  <span className="text-lg font-semibold text-white">24+</span>
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
            {/* Ľavá sekcia – 3 grafy v štýle GSC */}
            <div className="space-y-6">
              {/* Graf 1: Organický rast návštevnosti */}
              <div className="rounded-xl border border-white/10 bg-[#262626] p-5 shadow-lg">
                <p className="text-[11px] font-medium uppercase tracking-wider text-[#A0A0A0]">
                  Google Search Console
                </p>
                <h3 className="mt-1 text-lg font-bold italic text-white md:text-xl">
                  Organický rast návštevnosti
                </h3>
                <div className="relative mt-4">
                  <div className="absolute right-0 top-0 flex h-7 w-7 items-center justify-center rounded bg-[#ffb400]/20 text-[#ffb400]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                      <polyline points="17 6 23 6 23 12" />
                    </svg>
                  </div>
                  <div className="flex items-end justify-between gap-1" style={{ height: "120px" }}>
                    {[42, 48, 55, 58, 68, 85, 100].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t min-w-0 transition-opacity hover:opacity-90"
                        style={{
                          height: `${h}%`,
                          backgroundColor: i >= 4 ? "#ffb400" : "#3A4D67",
                        }}
                      />
                    ))}
                  </div>
                  <div className="mt-4 grid grid-cols-4 gap-3">
                    <div><p className="text-[10px] text-[#A0A0A0]">IMPRESIE</p><p className="mt-0.5 text-base font-bold text-white">+450%</p></div>
                    <div><p className="text-[10px] text-[#A0A0A0]">KLIKNUTIA</p><p className="mt-0.5 text-base font-bold text-white">+320%</p></div>
                    <div><p className="text-[10px] text-[#A0A0A0]">POZÍCIE 1-3</p><p className="mt-0.5 text-base font-bold text-white">154</p></div>
                    <div><p className="text-[10px] text-[#A0A0A0]">CTR</p><p className="mt-0.5 text-base font-bold text-[#ffb400]">5.2%</p></div>
                  </div>
                </div>
              </div>

              {/* Graf 2: Kľúčové slová a pozície */}
              <div className="rounded-xl border border-white/10 bg-[#262626] p-5 shadow-lg">
                <p className="text-[11px] font-medium uppercase tracking-wider text-[#A0A0A0]">
                  Kľúčové slová
                </p>
                <h3 className="mt-1 text-lg font-bold italic text-white md:text-xl">
                  Pozície v TOP 10
                </h3>
                <div className="relative mt-4">
                  <div className="flex items-end justify-between gap-1" style={{ height: "120px" }}>
                    {[35, 52, 61, 72, 88, 95, 100].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t min-w-0"
                        style={{
                          height: `${h}%`,
                          backgroundColor: i >= 3 ? "#ffb400" : "#4A5568",
                        }}
                      />
                    ))}
                  </div>
                  <div className="mt-4 grid grid-cols-4 gap-3">
                    <div><p className="text-[10px] text-[#A0A0A0]">TOP 3</p><p className="mt-0.5 text-base font-bold text-white">89</p></div>
                    <div><p className="text-[10px] text-[#A0A0A0]">TOP 10</p><p className="mt-0.5 text-base font-bold text-white">247</p></div>
                    <div><p className="text-[10px] text-[#A0A0A0]">NOVÉ KWs</p><p className="mt-0.5 text-base font-bold text-[#ffb400]">+31</p></div>
                    <div><p className="text-[10px] text-[#A0A0A0]">Rast YoY</p><p className="mt-0.5 text-base font-bold text-white">+186%</p></div>
                  </div>
                </div>
              </div>

              {/* Graf 3: Technická zdravotná karta */}
              <div className="rounded-xl border border-white/10 bg-[#262626] p-5 shadow-lg">
                <p className="text-[11px] font-medium uppercase tracking-wider text-[#A0A0A0]">
                  Core Web Vitals
                </p>
                <h3 className="mt-1 text-lg font-bold italic text-white md:text-xl">
                  Rýchlosť a zdravie stránok
                </h3>
                <div className="relative mt-4">
                  <div className="flex items-end justify-between gap-1" style={{ height: "120px" }}>
                    {[70, 78, 85, 88, 92, 96, 100].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t min-w-0"
                        style={{
                          height: `${h}%`,
                          backgroundColor: i >= 4 ? "#22c55e" : "#3B82F6",
                        }}
                      />
                    ))}
                  </div>
                  <div className="mt-4 grid grid-cols-4 gap-3">
                    <div><p className="text-[10px] text-[#A0A0A0]">LCP</p><p className="mt-0.5 text-base font-bold text-white">1.2s</p></div>
                    <div><p className="text-[10px] text-[#A0A0A0]">FID</p><p className="mt-0.5 text-base font-bold text-white">32ms</p></div>
                    <div><p className="text-[10px] text-[#A0A0A0]">CLS</p><p className="mt-0.5 text-base font-bold text-emerald-400">0.04</p></div>
                    <div><p className="text-[10px] text-[#A0A0A0]">SKÓRE</p><p className="mt-0.5 text-base font-bold text-[#ffb400]">94</p></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Pravá sekcia – SEO obsah */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold uppercase leading-tight text-white md:text-4xl">
                VIDITEĽNOSŤ, KTORÁ{" "}
                <span className="text-[#ffb400]">NEKONČÍ</span>{" "}
                VYPNUTÍM KREDITU
              </h2>
              <p className="mt-4 text-lg font-medium text-white/95">
                SEO: Budujte digitálny majetok, ktorý pracuje pre vás 24/7.
              </p>
              <p className="mt-4 text-[15px] leading-[1.75] text-white/85">
                Zatiaľ čo PPC je šprint, ktorý prináša výsledky okamžite, SEO je maratón, ktorý
                ovláda trh. Investícia do organického vyhľadávania je investíciou do dlhodobej
                hodnoty vašej firmy. Naším cieľom je dostať vás na popredné miesta tam, kde vás
                zákazníci prirodzene hľadajú – bez toho, aby ste museli platiť za každý jeden
                preklik.
              </p>
              <h3 className="mt-8 text-base font-semibold text-white md:text-lg">
                Naše SEO piliere pre váš stabilný rast:
              </h3>
              <ul className="mt-4 space-y-5">
                <li>
                  <p className="font-medium text-white">
                    Optimalizácia e-shopov na mieru aj na platformách
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/75">
                    Či už prevádzkujete e-shop na Shoptete, Shopify, alebo máte komplexný systém
                    vyvinutý na mieru, vieme ho nastaviť tak, aby ho algoritmy milovali.
                    Optimalizujeme štruktúru kategórií, produktové karty a proces nákupu pre
                    maximálny výkon.
                  </p>
                </li>
                <li>
                  <p className="font-medium text-white">Technické SEO a Core Web Vitals</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/75">
                    Váš e-shop musí byť bleskovo rýchly a technicky bezchybný. Odstránime chyby v
                    kóde, zrýchlime načítavanie stránok a zabezpečíme, aby technická stránka webu
                    nebrzdila váš predajný potenciál.
                  </p>
                </li>
                <li>
                  <p className="font-medium text-white">Strategický Content Marketing</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/75">
                    Tvoríme obsah, ktorý predáva. Na základe analýzy kľúčových slov zaplníme váš
                    e-shop textami a blogmi, ktoré budujú dôveru, odpovedajú na otázky zákazníkov a
                    dlhodobo priťahujú relevantnú návštevnosť.
                  </p>
                </li>
                <li>
                  <p className="font-medium text-white">Budovanie autority (Linkbuilding)</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/75">
                    Získame pre váš e-shop kvalitné spätné odkazy z relevantných zdrojov. Tým dáme
                    vyhľadávačom jasný signál, že ste lídrom vo svojom odbore, čo vás posunie pred
                    konkurenciu.
                  </p>
                </li>
              </ul>
              <h3 className="mt-8 text-base font-semibold text-white md:text-lg">
                Prečo investovať do SEO s BeCode?
              </h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ffb400] text-xs text-[#1a1a1a]">
                    ✓
                  </span>
                  <span className="text-sm leading-relaxed text-white/90">
                    <strong className="text-white">Trvalý prísun zákazníkov:</strong> Keď raz
                    obsadíte popredné priečky, návštevnosť k vám prúdi prirodzene aj mesiace po tom,
                    čo sme prácu dokončili.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ffb400] text-xs text-[#1a1a1a]">
                    ✓
                  </span>
                  <span className="text-sm leading-relaxed text-white/90">
                    <strong className="text-white">Sila organického rastu:</strong> Znížte svoju
                    závislosť na platených reklamách. SEO zabezpečí, že váš biznis bude rásť, aj keď
                    práve nebeží žiadna kampaň.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ffb400] text-xs text-[#1a1a1a]">
                    ✓
                  </span>
                  <span className="text-sm leading-relaxed text-white/90">
                    <strong className="text-white">Kvalitnejšie konverzie:</strong> Návštevníci z
                    organického vyhľadávania majú často vyššiu mieru dôvery, pretože vás našli na
                    základe vašej odbornosti a relevancie.
                  </span>
                </li>
              </ul>
              <blockquote className="mt-8 border-l-2 border-[#ffb400]/70 pl-5 text-[15px] leading-[1.7] italic text-white/85">
                „PPC vám prinesie návštevníkov na dnes, SEO vám vybuduje silný e-shop na roky
                dopredu.“
              </blockquote>
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
