import Link from "next/link";
import Image from "next/image";

const GOLD = "#ffb400";
const DARK = "#1a1a1a";

const CASE_STUDIES = [
  {
    category: "PPC",
    metric: "+200% ROAS",
    title: "Strategické škálovanie Google Ads kampaní pre technologický e-shop.",
    description: "Nárast ROAS o 200 % v priebehu 12 mesiacov vďaka optimalizácii výberu kľúčových slov a remarketingu.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=340&fit=crop",
    slug: "ppc-technologicky-eshop",
  },
  {
    category: "SEO",
    metric: "Top 3 V GOOGLE",
    title: "Dominancia v organickom vyhľadávaní pre kľúčové segmenty nábytku.",
    description: "Presun kľúčových kategórií do top 3 vo vyhľadávaní a výrazný rast organického trafficu.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=340&fit=crop",
    slug: "seo-nabytok",
  },
  {
    category: "Obsah",
    metric: "5X ENGAGEMENT",
    title: "Budovanie komunity cez interaktívny video obsah a sociálne siete.",
    description: "Päťnásobný nárast engagementu vďaka konzistentnému videu a komunikačnej stratégii.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=340&fit=crop",
    slug: "obsah-video-komunita",
  },
  {
    category: "ADS/PPC",
    metric: "+150% LEADS",
    title: "Generovanie kvalifikovaných dopytov pre logistického giganta.",
    description: "Zvýšenie počtu kvalifikovaných leadov o 150 % s optimalizovanými LinkedIn a Google kampanami.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=340&fit=crop",
    slug: "ppc-logistika-leads",
  },
  {
    category: "E-commerce",
    metric: "-45% CPA",
    title: "Zníženie nákladov na akvizíciu pri zachovaní objemu predajov.",
    description: "Optimalizácia kampaní viedla k poklesu CPA o 45 % pri rovnakom objeme konverzií.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=340&fit=crop",
    slug: "ecommerce-cpa",
  },
  {
    category: "Branding",
    metric: "100% BRAND LIFT",
    title: "Kompletný rebranding a nová digitálna identita pre architektonické štúdio.",
    description: "Nová vizuálna identita, web a komunikačná stratégia pre rastúcu architektonickú firmu.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=340&fit=crop",
    slug: "branding-architektura",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="border-b border-white/5 px-6 py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-medium uppercase tracking-wider" style={{ color: GOLD }}>
            DÔKAZ NAŠICH ŠTÚDIÍ
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-white md:text-5xl">
            Naše výsledky <span style={{ color: GOLD }}>hovoria za nás</span>.
          </h1>
          <p className="mt-4 max-w-2xl text-white/85">
            Viac ako 50 úspešných projektov a strategických digitálnych riešení, ktoré pomohli
            našim klientom dosiahnuť merateľný rast.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                className="rounded-lg px-4 py-2.5 text-sm font-medium"
                style={{ backgroundColor: GOLD, color: DARK }}
              >
                Všetko
              </button>
              <button
                type="button"
                className="rounded-lg border border-white/20 bg-transparent px-4 py-2.5 text-sm font-medium text-white hover:bg-white/5"
              >
                PPC Kampane
              </button>
              <button
                type="button"
                className="rounded-lg border border-white/20 bg-transparent px-4 py-2.5 text-sm font-medium text-white hover:bg-white/5"
              >
                SEO & Organika
              </button>
              <button
                type="button"
                className="rounded-lg border border-white/20 bg-transparent px-4 py-2.5 text-sm font-medium text-white hover:bg-white/5"
              >
                Obsahový Marketing
              </button>
            </div>
            <div className="w-full sm:w-auto sm:min-w-[240px]">
              <input
                type="search"
                placeholder="Hľadať projekt..."
                className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/50 focus:border-[#ffb400] focus:outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CASE_STUDIES.map((study, i) => (
              <article
                key={study.slug}
                className="group overflow-hidden rounded-xl transition hover:ring-1 hover:ring-white/20"
                style={{ backgroundColor: "#262626" }}
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-zinc-800">
                  <Image
                    src={study.image}
                    alt=""
                    fill
                    className="object-cover transition group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <span
                    className="absolute left-3 top-3 rounded px-2 py-1 text-xs font-medium"
                    style={{ backgroundColor: GOLD, color: DARK }}
                  >
                    {study.category}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-sm font-semibold" style={{ color: GOLD }}>
                    {study.metric}
                  </p>
                  <h2 className="mt-2 text-lg font-bold leading-snug text-white">
                    {study.title}
                  </h2>
                  <p className="mt-2 line-clamp-2 text-sm text-white/75">{study.description}</p>
                  <Link
                    href="#"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-white hover:underline"
                  >
                    Čítať štúdiu
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA – žlté pozadie */}
      <section
        className="relative overflow-hidden px-6 py-16 md:py-20"
        style={{ backgroundColor: GOLD }}
      >
        <div className="absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 opacity-10">
          <svg viewBox="0 0 100 100" fill="none" className="h-full w-full text-black">
            <path d="M50 80 L50 20 M20 50 L80 50 M35 35 L65 65 M65 35 L35 65" stroke="currentColor" strokeWidth="4" />
            <path d="M50 10 L55 45 L90 50 L55 55 Z" fill="currentColor" opacity="0.5" />
          </svg>
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl" style={{ color: DARK }}>
            Chcete podobné výsledky aj pre váš biznis?
          </h2>
          <p className="mt-4 text-lg" style={{ color: DARK, opacity: 0.85 }}>
            Každý projekt začína auditom a pochopením vašich cieľov. Napíšte nám a pripravíme
            plán rastu na mieru.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              className="rounded-lg px-6 py-3 text-sm font-medium text-white"
              style={{ backgroundColor: DARK }}
            >
              Kontaktovať expertov
            </button>
            <button
              type="button"
              className="rounded-lg border-2 px-6 py-3 text-sm font-medium"
              style={{ borderColor: DARK, color: DARK }}
            >
              Bezplatný audit
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-4">
            <div>
              <p className="text-xl font-bold text-white">BECODE</p>
              <p className="mt-3 text-sm text-white/70">
                Digitálna marketingová agentúra. PPC, SEO a obsahová stratégia s merateľnými
                výsledkami.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                Navigácia
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li><Link href="/" className="hover:text-white">Domov</Link></li>
                <li><Link href="/#sluzby" className="hover:text-white">Služby</Link></li>
                <li><Link href="/#o-nas" className="hover:text-white">O nás</Link></li>
                <li>
                  <Link href="/case-studies" className="font-medium hover:text-white" style={{ color: GOLD }}>
                    Prípadové štúdie
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                Služby
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li><Link href="/marketing" className="hover:text-white">PPC Kampane</Link></li>
                <li><Link href="/seo" className="hover:text-white">SEO Optimalizácia</Link></li>
                <li><Link href="/content" className="hover:text-white">Social Media</Link></li>
                <li><Link href="#" className="hover:text-white">Webová Analytika</Link></li>
              </ul>
            </div>
            <div id="kontakt">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                Kontakt
              </h4>
              <ul className="mt-3 space-y-3 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <span className="text-[#ffb400]">@</span>
                  <a href="mailto:hello@becode.sk" className="hover:text-white">hello@becode.sk</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#ffb400]">📞</span>
                  <a href="tel:+421900000000" className="hover:text-white">+421 900 000 000</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#ffb400]">📍</span>
                  <span>Bratislava, Slovensko</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
            <p className="text-xs text-white/50">
              © 2024 BECODE MARKETING AGENCY. VŠETKY PRÁVA VYHRADENÉ.
            </p>
            <div className="flex gap-6 text-xs font-medium uppercase tracking-wider text-white/70">
              <a href="#" className="hover:text-white">LinkedIn</a>
              <a href="#" className="hover:text-white">Facebook</a>
              <a href="#" className="hover:text-white">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
