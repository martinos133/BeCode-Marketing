import Link from "next/link";

const GOLD = "#ffb400";
const DARK = "#1a1a1a";

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="border-b border-white/5 px-6 py-16 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex-1">
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium"
              style={{ backgroundColor: `${GOLD}20`, color: GOLD }}
            >
              ⚡ Získajte nových klientov
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
              Maximalizujte <span style={{ color: GOLD }}>ROI</span> vašich kampaní.
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/85">
              PPC a performance marketing, ktorý prináša merateľné výsledky. Auditujeme vaše kampane
              a navrhneme stratégiu na mieru.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                className="rounded-lg px-6 py-3 text-sm font-medium"
                style={{ backgroundColor: GOLD, color: DARK }}
              >
                Získať audit kampaní
              </button>
              <button
                type="button"
                className="rounded-lg border border-white/30 bg-transparent px-6 py-3 text-sm font-medium text-white"
              >
                Naše výsledky
              </button>
            </div>
          </div>
          <div className="flex-1">
            <div
              className="rounded-xl p-6"
              style={{ backgroundColor: "#262626" }}
            >
              <p className="text-sm text-white/80">Celkový reklamný rozpočet</p>
              <p className="mt-2 text-3xl font-bold text-white">€524,800.00</p>
              <div className="mt-6 flex items-end justify-between gap-2" style={{ height: "120px" }}>
                {[45, 65, 55, 80, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t"
                    style={{
                      height: `${h}%`,
                      background: `linear-gradient(to top, #1a1a1a, ${GOLD})`,
                      opacity: 0.6 + (i * 0.1),
                    }}
                  />
                ))}
              </div>
              <div className="mt-4 flex justify-between text-sm text-white/90">
                <span>12,402</span>
                <span className="text-emerald-400">€4.12</span>
                <span>98.4%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platformy */}
      <section className="border-b border-white/5 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white md:text-4xl">
            Platformy, ktoré ovládame
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-white/75">
            Pracujeme s hlavnými reklamnými kanálmi a vieme z nich vyťažiť maximum.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: "search",
                title: "Google Ads",
                desc: "Vyhľadávanie, Display a YouTube. Cielené kampane pre váš biznis.",
                bullets: ["Search & Performance Max", "Remarketing", "Konverzie a CRO"],
              },
              {
                icon: "meta",
                title: "Meta Ads",
                desc: "Facebook a Instagram reklamy. Brand awareness aj direct response.",
                bullets: ["Kampane na mieru", "Lookalike audiences", "Lead gen formuláre"],
              },
              {
                icon: "tiktok",
                title: "TikTok Ads",
                desc: "Kreatívne formáty pre mladšie publikum. Viral potential.",
                bullets: ["In-Feed a TopView", "Kreatívna produkcia", "Influencer spolupráca"],
              },
            ].map((card, i) => (
              <div
                key={i}
                className="rounded-xl p-6"
                style={{ backgroundColor: "#262626" }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-lg text-2xl"
                  style={{ backgroundColor: `${GOLD}25`, color: GOLD }}
                >
                  {card.icon === "search" && "🔍"}
                  {card.icon === "meta" && "M"}
                  {card.icon === "tiktok" && "♪"}
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">{card.title}</h3>
                <p className="mt-2 text-sm text-white/80">{card.desc}</p>
                <ul className="mt-4 space-y-2">
                  {card.bullets.map((b, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-white">
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: GOLD }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reálne výsledky */}
      <section className="border-b border-white/5 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Reálne <span style={{ color: GOLD }}>výsledky</span>, nie len reporty.
              </h2>
              <div className="mt-10 space-y-10">
                <div>
                  <h3 className="text-lg font-bold text-white">E-shop s nábytkom</h3>
                  <p className="mt-2 text-sm text-white/80">
                    Nárast tržieb z PPC o 180 % za 12 mesiacov. Cielené kampane na high-intent
                    kľúčové slová a remarketing.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <span className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white">
                      ROAS: <strong>€18.90</strong>
                    </span>
                    <span className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white">
                      CPA: <strong>€11.30</strong>
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">B2B služby</h3>
                  <p className="mt-2 text-sm text-white/80">
                    Zníženie CPA o 40 % a zvýšenie kvality leadov. LinkedIn a Google Search
                    kombinácia.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <span className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white">
                      ROAS: <strong>€12.50</strong>
                    </span>
                    <span className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white">
                      CPA: <strong>€28.00</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl border-8 border-zinc-700 bg-[#262626] shadow-2xl">
                  <div className="flex h-full flex-col p-4">
                    <p className="text-xs text-white/60">Metrics Overview</p>
                    <div className="mt-4 space-y-3">
                      {["Návštevnosť", "Konverzie", "Tržby", "ROAS"].map((label, i) => (
                        <div key={i}>
                          <div className="flex justify-between text-xs text-white/80">
                            <span>{label}</span>
                            <span>{i === 0 ? "12.4k" : i === 1 ? "342" : i === 2 ? "€8.2k" : "4.2x"}</span>
                          </div>
                          <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-zinc-700">
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: `${60 + i * 12}%`,
                                backgroundColor: GOLD,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparentnosť – žlté pozadie */}
      <section className="px-6 py-16 md:py-24" style={{ backgroundColor: GOLD }}>
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium"
                style={{ backgroundColor: "rgba(0,0,0,0.15)", color: "#1a1a1a" }}
              >
                ⚡ Transparent Reporting
              </span>
              <div
                className="mt-6 rounded-xl p-6"
                style={{ backgroundColor: "#262626" }}
              >
                <p className="text-sm text-white/80">Metrics Overview</p>
                <div className="mt-4 flex items-end gap-4" style={{ height: "80px" }}>
                  <div
                    className="flex-1 rounded-t"
                    style={{ height: "70%", backgroundColor: GOLD }}
                  />
                  <div
                    className="flex-1 rounded-t"
                    style={{ height: "100%", backgroundColor: GOLD }}
                  />
                </div>
                <div className="mt-4 flex gap-6 text-sm">
                  <span className="font-semibold text-white">€12,450</span>
                  <span className="font-semibold text-emerald-400">+22.4%</span>
                </div>
                <p className="mt-3 text-sm text-white/75">
                  Všetky výdavky a výnosy máte k dispozícii v reálnom čase.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Transparentnosť v každom eure.
              </h2>
              <p className="mt-4 text-white/90">
                Žiadne čierne skrinky. Pripojte si účty, sledujte metriky a fakturujeme len to, čo
                reálne miniete na reklamu.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center gap-3 text-white">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-black/20 text-xl">
                    🕐
                  </span>
                  Dáta v reálnom čase
                </li>
                <li className="flex items-center gap-3 text-white">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-black/20 text-xl">
                    🔒
                  </span>
                  Žiadne skryté poplatky
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Kontaktný formulár */}
      <section id="kontakt" className="border-b border-white/5 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-3xl font-bold text-white md:text-4xl">
            Pripravení na <span style={{ color: GOLD }}>výsledky</span>?
          </h2>
          <p className="mt-3 text-center text-white/75">
            Zanechajte kontakt a my vám pošleme bezplatný audit vašich kampaní.
          </p>
          <form
            className="mt-10 rounded-xl p-6"
            style={{ backgroundColor: "#262626" }}
            action="#"
            method="post"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="sr-only">
                  Meno a priezvisko
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Jozef Mrkva"
                  className="w-full rounded-lg border border-white/20 bg-black/30 px-4 py-3 text-white placeholder:text-white/50 focus:border-[#ffb400] focus:outline-none focus:ring-1 focus:ring-[#ffb400]"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Firemný e-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jozef@firm.sk"
                  className="w-full rounded-lg border border-white/20 bg-black/30 px-4 py-3 text-white placeholder:text-white/50 focus:border-[#ffb400] focus:outline-none focus:ring-1 focus:ring-[#ffb400]"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="website" className="sr-only">
                Webstránka / doména
              </label>
              <input
                id="website"
                name="website"
                type="url"
                placeholder="https://www.vasafirma.sk"
                className="w-full rounded-lg border border-white/20 bg-black/30 px-4 py-3 text-white placeholder:text-white/50 focus:border-[#ffb400] focus:outline-none focus:ring-1 focus:ring-[#ffb400]"
              />
            </div>
            <button
              type="submit"
              className="mt-6 w-full rounded-lg py-4 text-sm font-bold uppercase tracking-wider transition hover:opacity-90"
              style={{ backgroundColor: GOLD, color: DARK }}
            >
              Získať bezplatný audit
            </button>
            <p className="mt-4 text-center text-xs text-white/50">
              Odoslaním súhlasíte so spracovaním údajov. Vaše údaje nepredávame tretím stranám.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-1">
              <Link href="/" className="text-xl font-bold" style={{ color: GOLD }}>
                BECODE
              </Link>
              <p className="mt-3 text-sm text-white/70">
                Performance marketing a PPC kampane. Výsledky, ktoré hovoria samy za seba.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">
                Služby
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li><Link href="#" className="hover:text-white">Google Ads</Link></li>
                <li><Link href="#" className="hover:text-white">Meta Ads</Link></li>
                <li><Link href="#" className="hover:text-white">TikTok Ads</Link></li>
                <li><Link href="#" className="hover:text-white">A ešte oveľa viac</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">
                Spoločnosť
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li><Link href="#" className="hover:text-white">Tím Cursor</Link></li>
                <li><Link href="#" className="hover:text-white">O nás</Link></li>
                <li><Link href="#" className="hover:text-white">Blog</Link></li>
                <li><Link href="#kontakt" className="hover:text-white">Kontakt</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">
                Sledujte nás
              </h4>
              <div className="mt-3 flex gap-3">
                <a href="#" className="text-white/70 hover:text-white" aria-label="Facebook">f</a>
                <a href="#" className="text-white/70 hover:text-white" aria-label="LinkedIn">in</a>
                <a href="#" className="text-white/70 hover:text-white" aria-label="Instagram">ig</a>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
            <p className="text-xs text-white/50">© 2024 BECODE MARKETING</p>
            <div className="flex gap-6 text-xs text-white/50">
              <Link href="#" className="hover:text-white/70">Privacy Policy</Link>
              <Link href="#" className="hover:text-white/70">Cookies</Link>
              <Link href="#" className="hover:text-white/70">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
