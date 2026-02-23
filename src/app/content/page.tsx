import Image from "next/image";
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

      {/* Naše Služby – nadpriemerne moderný blok */}
      <section className="relative px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#ffb400]/90">
            Čo ponúkame
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Naše Služby
          </h2>
          <div className="mt-3 h-px w-14 bg-[#ffb400]" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {[
              {
                icon: "play",
                title: "Short-form Video Produkcia",
                description:
                  "Tvoríme obsah, ktorý nezapadne prachom. Reels a TikToky, ktoré zastavia scrollovanie a premenia divákov na komunitu.",
                bullets: [
                  "Kreatívny koncept & Skripty: Navrhneme nápady, ktoré majú virálny potenciál.",
                  "Profesionálny strih: Dynamika, zvukové efekty a titulky optimalizované pre pozornosť.",
                  "Hook & Retention stratégia: Zabezpečíme, aby diváci dopozerali video až do konca.",
                ],
              },
              {
                icon: "chart",
                title: "Strategický Social Management",
                description:
                  "Vaše sociálne siete už nebudú len o náhodných príspevkoch. Postavíme vám základy, na ktorých sa dá rásť.",
                bullets: [
                  "Content Audit: Analýza toho, čo vo vašom odvetví skutočne funguje.",
                  "Editoriálny kalendár: Jasný plán príspevkov, ktorý vám ušetrí čas a stres.",
                  "Vizuálna identita feedu: Estetika, ktorá na prvý pohľad kričí profesionalitou.",
                ],
              },
              {
                icon: "community",
                title: "Community & Growth",
                description:
                  "Budujeme vzťahy, nielen čísla. Postaráme sa o to, aby váš profil žil a komunikoval.",
                bullets: [
                  "Aktívna moderácia: Odpovede na komentáre a správy v tóne vašej značky.",
                  "Engagement stratégia: Proaktívne vyhľadávanie vašej cieľovej skupiny.",
                  "UGC Kampane: Využitie obsahu od používateľov pre maximálnu dôveryhodnosť.",
                ],
              },
              {
                icon: "ads",
                title: "Výkonnostný Content (Ads)",
                description:
                  "Kreatíva, ktorá neprináša len lajky, ale predaje. Optimalizujeme obsah pre platenú reklamu.",
                bullets: [
                  "Ad-creative špeciál: Videá navrhnuté špeciálne pre Meta a TikTok Ads.",
                  "A/B Testovanie: Hľadáme víťazné formáty s najlepším konverzným pomerom.",
                  "Analýza dát: Každé euro investované do reklamy musí dávať zmysel.",
                ],
              },
            ].map((card, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.04] to-transparent p-8 shadow-lg transition-all duration-300 hover:border-[#ffb400]/20 hover:shadow-[0_0_40px_-12px_rgba(255,180,0,0.15)] md:p-9"
              >
                <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#ffb400]/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#ffb400]/20 bg-[#ffb400]/5 text-[#ffb400] transition-colors duration-300 group-hover:border-[#ffb400]/40 group-hover:bg-[#ffb400]/10">
                  {card.icon === "play" && <PlayIcon />}
                  {card.icon === "chart" && <ChartIcon />}
                  {card.icon === "community" && <CommunityIcon />}
                  {card.icon === "ads" && <AdsIcon />}
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-white md:text-[1.35rem]">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/90 md:text-base md:leading-[1.75]">
                  {card.description}
                </p>
                <ul className="mt-6 space-y-4 border-t border-white/[0.06] pt-6">
                  {card.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm leading-relaxed text-white/90 md:text-base md:leading-[1.7]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ffb400]" />
                      <span>{b}</span>
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

            {/* Podkategória: Výsledky – nadštandardný, luxusný blok */}
            <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-zinc-900/95 to-black/40 px-8 py-12 shadow-2xl md:px-14 md:py-16">
              <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#ffb400]/90">
                Výsledky
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white md:text-3xl md:tracking-tight md:leading-tight">
                Keď čísla tvoria príbeh
              </h3>
              <div className="mt-8 max-w-xl">
                <p className="text-[15px] leading-[1.7] text-zinc-400 md:text-base">
                  Kvalitný obsah je východisko. Úspech znamená, že sa dostane k ľuďom a skutočne
                  zapôsobí – dosah, zapojenie, konverzie. Cieľavedomé umiestnenie obsahu tam, kde
                  vaše publikum žije.
                </p>
              </div>
              <ul className="mt-10 space-y-6 border-t border-white/[0.06] pt-10 md:mt-14 md:space-y-7 md:pt-14">
                {[
                  "Organický dosah v rádoch stoviek percent, merateľný a udržateľný.",
                  "Komunita, ktorá so značkou skutočne žije a reaguje.",
                  "Efektivita premieňajúca pozornosť na zákazníkov.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-5">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#ffb400]/50 bg-[#ffb400]/10 text-[11px] font-semibold tracking-wide text-[#ffb400]">
                      {i + 1}
                    </span>
                    <span className="text-[15px] leading-[1.65] text-white/95 md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-12 border-t border-white/[0.06] pt-8 text-[11px] font-medium uppercase tracking-[0.25em] text-[#ffb400]/70 md:mt-14 md:pt-10">
                Ukážky z praxe
              </p>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-8">
                <div className="relative overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02]">
                  <Image
                    src="/vysledky/Vysledky.png"
                    alt="Ukážka výsledkov – metriky a dosah"
                    width={800}
                    height={600}
                    className="w-full object-contain"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="relative overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02]">
                  <Image
                    src="/vysledky/vysledok.png"
                    alt="Ukážka výsledkov – metriky dosahu, interakcie, sledovania a kliknutia"
                    width={800}
                    height={600}
                    className="w-full object-contain"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ako Tvoríme Obsah – zigzag, veľké čísla, netradičný flow */}
      <section className="border-t border-white/5 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#ffb400]">
            Proces
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-[3.25rem]">
            Ako tvoríme obsah, ktorý zaberá
          </h2>
          <p className="mt-5 max-w-xl text-lg text-white/80 md:text-xl">
            Žiadna vata, len výsledky. Štyri fázy k dokonalosti.
          </p>

          <div className="mt-16 space-y-0">
            {[
              { num: "01", title: "Analýza a ciele", desc: "Poznáme váš stav aj ambície. Nastavíme systém, ktorý má hlavu a pätu." },
              { num: "02", title: "Kreatíva a vibe", desc: "Navrhneme vizuál a tón, ktorý sedí vašej DNA. Pred produkciou máte vo všetkom jasno." },
              { num: "03", title: "Realizácia", desc: "Kamery bežia, strih dodáva energiu. Tvoríme formáty, ktoré na sociálnych sieťach vyčnievajú." },
              { num: "04", title: "Dáta a rast", desc: "Sledujeme, čo funguje, a výkonnosť neustále stupňujeme. Každé rozhodnutie opierame o čísla." },
            ].map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`group relative flex flex-col gap-6 py-10 md:flex-row md:items-center md:gap-12 md:py-14 ${!isLeft ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Obsah – title + desc */}
                  <div className={`flex-1 md:max-w-[55%] ${isLeft ? "md:pr-8" : "md:pl-8 md:text-right"}`}>
                    <span className="inline-block text-xs font-bold tracking-[0.25em] text-[#ffb400]">
                      FÁZA {step.num}
                    </span>
                    <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-white/90 md:text-lg">
                      {step.desc}
                    </p>
                  </div>
                  {/* Veľké číslo ako vizuál */}
                  <div className={`relative flex shrink-0 items-center justify-center md:w-[44%] ${isLeft ? "md:justify-end" : "md:justify-start"}`}>
                    <span
                      className="select-none text-[4rem] font-bold leading-none text-[#ffb400]/[0.12] transition-colors group-hover:text-[#ffb400]/[0.18] md:text-[5rem]"
                      aria-hidden
                    >
                      {step.num}
                    </span>
                  </div>
                </div>
              );
            })}
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

function AdsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}
