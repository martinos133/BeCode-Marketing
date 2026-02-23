import Link from "next/link";
import { GaleriaGallery } from "./GaleriaGallery";
import { IgFeedyGallery } from "./IgFeedyGallery";
import { WorkCategoryRow } from "./WorkCategoryRow";

export default function ContentPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero – tmavé pozadie, siluety, text vľavo */}
      <section className="relative min-h-[70vh] overflow-hidden border-b border-white/5">
        <video
          src={encodeURI("/BeCode Hero Trailer_4K_V2.mp4")}
          className="absolute inset-0 z-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/70 via-black/50 to-black/80" />
        <div className="relative z-20 mx-auto max-w-7xl px-6 py-20 md:py-28">
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
        <div className="relative z-20 mx-auto grid max-w-5xl grid-cols-2 gap-8 border-t border-white/10 px-6 py-12 md:grid-cols-4 md:px-0">
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
                { video: "/Slavia_Drink_01.mp4", alt: "Slavia Drink" },
                { video: "/reelsko_chaos_final.mp4", alt: "Reelsko chaos" },
                { video: "/Platz_DomUmenia_Reel_01.mp4", alt: "Platz Dom Umenia" },
                { video: "/December_BRGR_Final.mp4", alt: "December BRGR" },
                { video: encodeURI("/Prve Video_4.mp4"), alt: "Prvé video" },
                { video: encodeURI("/poke kacka s logom.mp4"), alt: "Poke kačka s logom" },
              ]}
            />
            <WorkCategoryRow
              category="Šport"
              images={[
                { video: encodeURI("/sport/A ako riešiš problém preplnených fitiek ty 🤣💪.mp4"), alt: "Fitky" },
                { video: "/sport/Captions_26E160.MP4", alt: "Šport video" },
                { video: "/sport/Captions_FC6C84.MP4", alt: "Šport video" },
                { video: "/sport/Chlapi_Reel_01.mp4", alt: "Chlapi Reel" },
                { video: encodeURI("/sport/Stále trčíš v tom istom fitku Čo tak zmena 🤔Fitcentrum Šport je obľúbené fitko v centre mesta. .mp4"), alt: "Fitcentrum Šport" },
                { video: encodeURI("/sport/Tento typ ľudí 🤣😤.mp4"), alt: "Fitko" },
              ]}
            />
            <WorkCategoryRow
              category="Zdravie / Beauty"
              images={[
                { video: encodeURI("/beauty / zdravie/CZ scenar 1 -video-export-2025-11-23T19-57-28.477Z.mp4"), alt: "Zdravie video" },
                { video: encodeURI("/beauty / zdravie/Exozomy.MP4"), alt: "Exozomy" },
                { video: encodeURI("/beauty / zdravie/Matka_Galova_1.mp4"), alt: "Matka Galová" },
                { video: encodeURI("/beauty / zdravie/Nada_Opravene_Reel_1.mp4"), alt: "Nada Reel" },
                { video: encodeURI("/beauty / zdravie/SK scenar 2-video-export-2025-11-23T21-18-00.754Z.mp4"), alt: "Zdravie video" },
                { video: encodeURI("/beauty / zdravie/Vianoce SK-video-export-2025-11-23T21-25-18.191Z.mp4"), alt: "Vianoce" },
                { video: encodeURI("/beauty / zdravie/Brand Feature_Reel_1_V2.mp4"), alt: "Brand Feature" },
                { video: encodeURI("/beauty / zdravie/Brand Launch_Reel_V1.mp4"), alt: "Brand Launch" },
                { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop", alt: "Beauty portrét" },
                { src: "https://images.unsplash.com/photo-1522335789203-aabd1f54e983?w=400&h=400&fit=crop", alt: "Kozmetika" },
                { src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop", alt: "Beauty" },
                { src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=400&fit=crop", alt: "Móda a krása" },
              ]}
            />
            <WorkCategoryRow
              category="Ďalšie"
              images={[
                { video: encodeURI("/Dalsie/Aftermovie_Reel_02.mp4"), alt: "Aftermovie" },
                { video: encodeURI("/Dalsie/Brand Feature_Reel_2_V2.mp4"), alt: "Brand Feature" },
                { video: encodeURI("/Dalsie/Brand Launch_Add_Square_3.mp4"), alt: "Brand Launch" },
                { video: encodeURI("/Dalsie/Echt_Reel_Broll_04.mp4"), alt: "Echt Reel" },
                { video: encodeURI("/Dalsie/Lenne_1_Titulky.MP4"), alt: "Lenne" },
                { video: encodeURI("/Dalsie/Lukas_Strih_Reel_0.mp4"), alt: "Lukáš strih" },
                { video: encodeURI("/Dalsie/Selfie_Rooms_Preview_01.mp4"), alt: "Selfie Rooms" },
                { video: encodeURI("/Dalsie/Timeline 1.mp4"), alt: "Timeline" },
                { video: encodeURI("/Dalsie/UGC Interview_1.mp4"), alt: "UGC Interview" },
                { video: encodeURI("/Dalsie/UGC Interviews_23_CZ.mp4"), alt: "UGC Interviews" },
                { video: encodeURI("/Dalsie/What_IF.mp4"), alt: "What IF" },
              ]}
            />

            {/* Podkategória: IG Feedy */}
            <div className="overflow-hidden rounded-2xl border border-[#ffb400]/20 bg-gradient-to-br from-zinc-900 to-zinc-900/80 p-8 md:p-10 shadow-xl shadow-black/30">
              <div className="mb-2 inline-block">
                <h3 className="text-2xl font-bold uppercase tracking-tight text-white md:text-3xl">
                  IG Feedy, ktoré sa nedajú prehliadnuť
                </h3>
                <span className="mt-2 block h-0.5 w-20 bg-[#ffb400]" />
              </div>
              <div className="mt-6 max-w-2xl space-y-4">
                <p className="text-base leading-relaxed text-zinc-300 md:text-lg">
                  Prvý dojem sa nedá zopakovať. Tvoj Instagram nie je len galéria fotiek – je to vizitka
                  tvojej značky, tvoj vibe a tvoj digitálny domov. Chceš, aby tvoj profil pôsobil prémiovo,
                  zjednotene a vyvolal v ľuďoch to známe{" "}
                  <span className="font-semibold text-[#ffb400]">„wow“</span>?
                </p>
                <p className="text-base leading-relaxed text-zinc-300 md:text-lg">
                  Tvoj feed môže žiariť presne takto. Pozri sa, ako meníme chaos na estetický zážitok, od
                  ktorého sa nedá odtrhnúť zrak.
                </p>
              </div>
              <p className="mt-8 text-sm font-medium uppercase tracking-wider text-[#ffb400]/90">
                Ukážky našich feedov
              </p>
              <IgFeedyGallery />
            </div>

            {/* Podkategória: Galéria */}
            <div className="overflow-hidden rounded-2xl border border-[#ffb400]/20 bg-gradient-to-br from-zinc-900 to-zinc-900/80 p-8 md:p-10 shadow-xl shadow-black/30">
              <div className="mb-2 inline-block">
                <h3 className="text-2xl font-bold uppercase tracking-tight text-white md:text-3xl">
                  Galéria: momenty, ktoré hovoria za vás
                </h3>
                <span className="mt-2 block h-0.5 w-20 bg-[#ffb400]" />
              </div>
              <div className="mt-6 max-w-2xl space-y-4">
                <p className="text-base leading-relaxed text-zinc-300 md:text-lg">
                  Fotografia je viac než len statický obraz. Je to emócia zachytená v správnej
                  milisekunde, detail produktu, ktorý vás prinúti dotknúť sa obrazovky, a atmosféra,
                  ktorú netreba popisovať slovami.
                </p>
                <p className="text-base leading-relaxed text-zinc-300 md:text-lg">
                  Od precíznej produktovej fotografie až po autentické lifestyle zábery – tvoríme
                  vizuálny obsah, ktorý dýcha.
                </p>
              </div>
              <GaleriaGallery />
            </div>
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
