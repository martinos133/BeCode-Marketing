import Link from "next/link";
import { WorkCategoryRow } from "./WorkCategoryRow";

export default function ContentPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero – tmavé pozadie, siluety, text vľavo */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-black" />
        <div className="absolute left-0 bottom-0 h-[70%] w-[40%] max-w-md opacity-20">
          <PlantSilhouette />
        </div>
        <div className="absolute right-0 top-1/4 h-[50%] w-[35%] max-w-sm opacity-20">
          <StudioSilhouette />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wider text-[#ffb400]">
              O Content & Social Media
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Tvoríme obsah, ktorý
              <br />
              <span className="text-[#ffb400]">nezapadne prachom.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/90">
              Špičková video produkcia na svetovej úrovni. Kvalita na prvom mieste, kreativita a nad
              20 rokov skúseností. Sme tu pre teba, keď potrebuješ obsah, ktorý zaujme.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-lg bg-[#ffb400] px-5 py-3 text-sm font-medium text-white"
              >
                Chcem nakopnúť svoj dosah
                <span aria-hidden>&gt;</span>
              </button>
              <button
                type="button"
                className="inline-flex items-center rounded-lg border border-[#ffb400] bg-transparent px-5 py-3 text-sm font-medium text-white"
              >
                Naskoč na prvý call.
              </button>
            </div>
          </div>
        </div>
        {/* Metriky – 4 stĺpce */}
        <div className="relative mx-auto grid max-w-5xl grid-cols-2 gap-8 border-t border-white/10 px-6 py-12 md:grid-cols-4 md:px-0">
          <div className="text-center">
            <p className="text-3xl font-bold text-white md:text-4xl">15M+</p>
            <p className="mt-1 text-sm text-white/70">Zobrazení</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white md:text-4xl">200%</p>
            <p className="mt-1 text-sm text-white/70">Rast engagement</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white md:text-4xl">500+</p>
            <p className="mt-1 text-sm text-white/70">Projektov</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white md:text-4xl">24/7</p>
            <p className="mt-1 text-sm text-white/70">Podpora</p>
          </div>
        </div>
      </section>

      {/* Naše Služby */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="inline-block text-3xl font-bold text-white">
            Naše Služby
            <span className="mt-2 block h-1 w-16 bg-[#ffb400]" />
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: "play",
                title: "Short-form video",
                description:
                  "TikTok, Reels, Shorts – formáty, ktoré držia pozornosť. Od nápadu po finálny strih a optimalizáciu pre platformy.",
                bullets: ["Kreatívny koncept", "Produkcia a strih", "A/B titulky a thumbnaily"],
              },
              {
                icon: "chart",
                title: "Stratégia na mieru",
                description:
                  "Dátami riadený obsahový plán a content pillar stratégia. Vieme, čo funguje vo vašom odvetví.",
                bullets: ["Content audit", "Editoriálny kalendár", "KPI a reporty"],
              },
              {
                icon: "community",
                title: "Community Management",
                description:
                  "Budovanie komunity okolo značky. Od moderácie po konverzačné kampane a UGC.",
                bullets: ["Moderácia", "Odpovede a DM", "UGC kampane"],
              },
            ].map((card, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-[#1a1a1a] p-6 transition hover:border-[#ffb400]/30"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ffb400]/20 text-[#ffb400]">
                  {card.icon === "play" && <PlayIcon />}
                  {card.icon === "chart" && <ChartIcon />}
                  {card.icon === "community" && <CommunityIcon />}
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80">{card.description}</p>
                <ul className="mt-4 space-y-2">
                  {card.bullets.map((b, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-white">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#ffb400]" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Naša Práca – galéria podľa kategórií */}
      <section className="border-t border-white/5 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-white">NAŠA PRÁCA</h2>
          <p className="mt-2 text-white/70">Projekty, na ktorých sme pracovali.</p>
          <div className="mt-12 space-y-14">
            <WorkCategoryRow
              category="Gastro"
              images={[
                { video: "/InFestaConTavolo_Reels_Prew_01.mp4", alt: "Gastro video" },
                { video: "/Burrata_Recept_Reel_03.mp4", alt: "Burrata recept" },
                { video: encodeURI("/🤩 TIRAMISU DI PISTACCHIO PODĽA TAVOLO 🔥👉 Potrebuješ-500g mascarpone 5-6 žĺtkov 3-4 lyžice kry.mp4"), alt: "Tiramisu di Pistacchio" },
                { src: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=400&h=400&fit=crop", alt: "Gastro projekt" },
                { video: "/reelsko_chaos_final.mp4", alt: "Reelsko chaos" },
                { video: "/Platz_DomUmenia_Reel_01.mp4", alt: "Platz Dom Umenia" },
              ]}
            />
            <WorkCategoryRow
              category="Sport"
              images={[
                { src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=400&fit=crop", alt: "Fitness tréning" },
                { src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop", alt: "Cvičenie" },
                { src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=400&fit=crop", alt: "Posilňovňa" },
                { src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=400&fit=crop", alt: "Šport" },
              ]}
            />
            <WorkCategoryRow
              category="Zdravie"
              images={[
                { src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop", alt: "Príroda, wellness" },
                { src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=400&fit=crop", alt: "Jóga" },
                { src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop", alt: "Meditácia" },
                { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop", alt: "Zdravý životný štýl" },
              ]}
            />
            <WorkCategoryRow
              category="Beauty"
              images={[
                { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop", alt: "Beauty portrét" },
                { src: "https://images.unsplash.com/photo-1522335789203-aabd1f54e983?w=400&h=400&fit=crop", alt: "Kozmetika" },
                { src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop", alt: "Beauty" },
                { src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=400&fit=crop", alt: "Móda a krása" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Ako Pracujeme – timeline */}
      <section className="border-t border-white/5 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="inline-block text-3xl font-bold text-white">
            Ako Pracujeme
            <span className="mt-2 block h-1 w-16 bg-[#ffb400]" />
          </h2>
          <p className="mt-2 text-white/70">Proces od prvého kontaktu po spustené kampane.</p>
          <div className="relative mt-12 pl-8 md:pl-10">
            <div className="absolute left-[11px] top-0 bottom-0 w-0.5 bg-[#ffb400] md:left-[13px]" />
            {[
              { num: "01", title: "Audit & Setup", desc: "Analýza vášho účtu, cieľov a konkrencie. Nastavenie nástrojov a baseline metrík." },
              { num: "02", title: "Kreatívny koncept", desc: "Návrh vizuálneho štýlu, tónu a formátov. Schválenie s vami pred produkciou." },
              { num: "03", title: "Produkcia", desc: "Natáčanie a tvorba obsahu. Strih, grafika, titulky a prispôsobenie pre platformy." },
              { num: "04", title: "Optimalizácia", desc: "Publikovanie, A/B testy a neustála optimalizácia na základe dát." },
            ].map((step, i) => (
              <div key={i} className="relative pb-12 last:pb-0">
                <div className="absolute -left-8 flex h-6 w-6 items-center justify-center rounded-full bg-[#ffb400] text-xs font-bold text-black md:-left-10 md:h-7 md:w-7">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-1 text-sm text-white/80">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA – žlté pozadie */}
      <section className="bg-[#ffb400] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-black md:text-4xl">
            Ste pripravení na explóziu vášho dosahu?
          </h2>
          <p className="mt-4 text-black/80">
            Nečakajte. Povieme si o vašich cieľoch a navrhneme prvý krok.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              className="rounded-lg bg-black px-6 py-3 text-sm font-medium text-white"
            >
              Chcem bezplatnú konzultáciu
            </button>
            <button
              type="button"
              className="rounded-lg border-2 border-black bg-transparent px-6 py-3 text-sm font-medium text-black"
            >
              Pozrieť cenník
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white">
            <span className="text-[#ffb400]">
              <LightningIcon />
            </span>
            BECODE
          </Link>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80">
            <Link href="#" className="hover:text-white">Instagram</Link>
            <Link href="#" className="hover:text-white">TikTok</Link>
            <Link href="#" className="hover:text-white">LinkedIn</Link>
            <Link href="#" className="hover:text-white">YouTube</Link>
          </div>
          <p className="text-xs text-white/60">© 2023 Becode Slovakia. Všetky práva vyhradené.</p>
        </div>
      </footer>
    </div>
  );
}

function LightningIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function PlantSilhouette() {
  return (
    <svg viewBox="0 0 200 300" fill="currentColor" className="text-zinc-800">
      <path d="M100 20c-20 0-40 30-40 70 0 20 10 40 25 50v80h30v-80c15-10 25-30 25-50 0-40-20-70-40-70z" />
      <path d="M60 140c-15 20-25 50-25 80 0 30 10 50 30 60v20h70v-20c20-10 30-30 30-60 0-30-10-60-25-80-5 5-15 10-25 10s-20-5-25-10z" />
    </svg>
  );
}

function StudioSilhouette() {
  return (
    <svg viewBox="0 0 200 200" fill="currentColor" className="text-zinc-800">
      <rect x="85" y="40" width="30" height="120" rx="4" />
      <rect x="70" y="155" width="60" height="8" rx="2" />
      <rect x="40" y="50" width="80" height="50" rx="4" opacity="0.8" />
      <circle cx="100" cy="75" r="15" opacity="0.9" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

function CommunityIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
