import Link from "next/link";

const GOLD = "#ffb400";
const DARK = "#1a1a1a";

export default function SeoPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="border-b border-white/5 px-6 py-16 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex-1">
            <p className="text-sm font-medium uppercase tracking-wider" style={{ color: GOLD }}>
              DLHODOBÝ ORGANICKÝ RAST
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
              Dlhodobý organický rast, ktorý premení váš web na{" "}
              <span style={{ color: GOLD }}>stroj na konverzie</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/85">
              SEO nie je o rýchlych trikoch. Budujeme trvalú viditeľnosť vo vyhľadávačoch a
              kvalitný organický traffic, ktorý konvertuje.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                className="rounded-lg px-6 py-3 text-sm font-medium text-white"
                style={{ backgroundColor: GOLD }}
              >
                Zistiť viac o našich službách
              </button>
              <button
                type="button"
                className="rounded-lg border px-6 py-3 text-sm font-medium text-white"
                style={{ borderColor: GOLD }}
              >
                Kalkulačky
              </button>
            </div>
          </div>
          <div className="flex-1">
            <div
              className="rounded-xl p-6"
              style={{ backgroundColor: "#262626" }}
            >
              <p className="text-sm text-white/80">Organic Traffic Growth</p>
              <div className="mt-6 flex items-end justify-between gap-2" style={{ height: "140px" }}>
                {[35, 50, 65, 78, 90, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t"
                    style={{
                      height: `${h}%`,
                      backgroundColor: GOLD,
                    }}
                  />
                ))}
              </div>
              <div className="mt-3 flex justify-between text-xs text-white/60">
                <span>2020</span>
                <span>2021</span>
                <span>2022</span>
                <span>2023</span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Štatistiky */}
      <section className="border-b border-white/5 py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
          {[
            { value: "150+", label: "spokojných klientov" },
            { value: "85%", label: "klientov nás odporúča" },
            { value: "12k+", label: "kľúčových slov v top 10" },
            { value: "4.8/5", label: "priemerné hodnotenie" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl font-bold text-white md:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technický SEO Audit */}
      <section className="border-b border-white/5 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Technický SEO Audit – Odhaľte skryté chyby vášho webu.
          </h2>
          <p className="mt-4 max-w-2xl text-white/80">
            Analýza indexovateľnosti, rýchlosti, štruktúry a Core Web Vitals. Dostanete konkrétny
            akčný plán na opravu.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: "{}", title: "Implementácia a Crawling", desc: "Kontrola sitemap, robots.txt a indexácie dôležitých stránok." },
              { icon: "🛒", title: "E-shop a štruktúra", desc: "Produktové kategórie, canonical URL a duplicate content." },
              { icon: "🔒", title: "Bezpečnosť a HTTPS", desc: "SSL certifikát, zmiešaný obsah a bezpečnostné hlavičky." },
            ].map((card, i) => (
              <div
                key={i}
                className="rounded-xl p-6"
                style={{ backgroundColor: "#262626" }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-lg text-xl"
                  style={{ backgroundColor: `${GOLD}25`, color: GOLD }}
                >
                  {card.icon}
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">{card.title}</h3>
                <p className="mt-2 text-sm text-white/75">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analýza kľúčových slov */}
      <section className="border-b border-white/5 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Analýza kľúčových slov: Strategické cielenie.
              </h2>
              <p className="mt-4 text-white/80">
                Vyberieme kľúčové slová podľa zámeru, objemu a konkurencie. Žiadne „prázdne“
                návštevnosti – len traffic, ktorý má potenciál konvertovať.
              </p>
              <ul className="mt-8 space-y-6">
                <li className="flex gap-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[#ffb400]" style={{ backgroundColor: `${GOLD}25` }}>✓</span>
                  <div>
                    <p className="font-semibold text-white">Nadviazanie na „čo na výber“</p>
                    <p className="mt-1 text-sm text-white/75">Cielené na užívateľov v rozhodovacej fáze nákupu.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[#ffb400]" style={{ backgroundColor: `${GOLD}25` }}>✓</span>
                  <div>
                    <p className="font-semibold text-white">Long-tail a lokálne kľúčové slová</p>
                    <p className="mt-1 text-sm text-white/75">Menej konkurencie, vyššia relevancia pre váš biznis.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="overflow-hidden rounded-xl" style={{ backgroundColor: "#262626" }}>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[400px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="p-4 font-semibold text-white">Kľúčové slovo</th>
                      <th className="p-4 font-semibold text-white">Hlasitosť</th>
                      <th className="p-4 font-semibold text-white">CPC</th>
                      <th className="p-4 font-semibold text-white">Konkurencia</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/85">
                    <tr className="border-b border-white/5">
                      <td className="p-4">SEO optimalizácia pre e-shop</td>
                      <td className="p-4">1.2k</td>
                      <td className="p-4">€2.40</td>
                      <td className="p-4">
                        <div className="h-2 w-16 rounded-full bg-red-500/80" />
                      </td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="p-4">SEO na prvú stranu Google</td>
                      <td className="p-4">890</td>
                      <td className="p-4">€3.10</td>
                      <td className="p-4">
                        <div className="h-2 w-16 rounded-full bg-amber-500/80" />
                      </td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="p-4">Technický SEO audit a optimalizácia</td>
                      <td className="p-4">420</td>
                      <td className="p-4">€4.20</td>
                      <td className="p-4">
                        <div className="h-2 w-16 rounded-full bg-emerald-500/80" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO pre E-shopy */}
      <section className="border-b border-white/5 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Kategórie a filtrovanie", icon: "📁", active: false },
                { title: "Produktová štúdia", icon: "🛒", active: true },
                { title: "Content a blog", icon: "✏️", active: false },
                { title: "Technická optimalizácia", icon: "⚙️", active: false },
              ].map((card, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center rounded-xl p-6 text-center"
                  style={{
                    backgroundColor: card.active ? GOLD : "#262626",
                    color: card.active ? DARK : "white",
                  }}
                >
                  <span className="text-2xl">{card.icon}</span>
                  <p className="mt-2 text-sm font-semibold">{card.title}</p>
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                SEO pre E-shopy: Dominujte a predávajte viac.
              </h2>
              <p className="mt-4 text-white/80">
                Špecifické prístupy pre e-commerce: kategórie, produktové stránky, filtrovanie a
                štruktúrované dáta. Zvýšime organický traffic a konverzie z vyhľadávania.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Optimalizácia kategórií a produktových stránok",
                  "Štruktúrované dáta (Schema) pre produkty a recenzie",
                  "Riešenie duplicate content a canonical URL",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-white">
                    <span className="text-[#ffb400]">✓</span> {item}
                  </li>
                ))}
              </ul>
              <Link
                href="#"
                className="mt-6 inline-flex items-center gap-2 text-white hover:underline"
              >
                Zistiť viac o e-commerce SEO
                <span style={{ color: GOLD }}>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reálne výsledky klientov */}
      <section className="border-b border-white/5 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Reálne výsledky našich klientov
          </h2>
          <p className="mt-3 max-w-2xl text-white/80">
            Konkrétne prípadové štúdie a zmeny organického trafficu po spolupráci.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-xl p-6" style={{ backgroundColor: "#262626" }}>
              <p className="text-sm font-semibold text-white/90">Klient: Lifestyle Magazín</p>
              <p className="mt-2 text-sm text-white/70">
                Content stratégia, technické SEO a interné prepojenie. Rast organického trafficu za 18 mesiacov.
              </p>
              <div className="relative mt-6 h-32">
                <svg className="h-full w-full" viewBox="0 0 200 80" preserveAspectRatio="none">
                  <path
                    d="M 0 60 Q 40 55 80 45 T 160 25 T 200 15"
                    fill="none"
                    stroke={GOLD}
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <p className="mt-4 text-2xl font-bold" style={{ color: GOLD }}>+340%</p>
              <p className="text-sm text-white/60">organický traffic</p>
            </div>
            <div className="rounded-xl p-6" style={{ backgroundColor: "#262626" }}>
              <p className="text-sm font-semibold text-white/90">Klient: Sorti Partners</p>
              <p className="mt-2 text-sm text-white/70">
                E-shop s nábytkom. Optimalizácia kategórií, produktových stránok a rýchlosti.
              </p>
              <div className="mt-6 flex items-end justify-between gap-2" style={{ height: "80px" }}>
                {[40, 55, 70, 85, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t"
                    style={{ height: `${h}%`, backgroundColor: GOLD }}
                  />
                ))}
              </div>
              <p className="mt-4 text-2xl font-bold" style={{ color: GOLD }}>+185%</p>
              <p className="text-sm text-white/60">konverzie z organického vyhľadávania</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-white/5 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Pripravení na <span style={{ color: GOLD }}>dominanciu</span> v Google?
          </h2>
          <p className="mt-4 text-white/80">
            Získajte bezplatný SEO audit a konkrétny plán, ako zlepšiť viditeľnosť a traffic.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              className="rounded-lg px-6 py-3 text-sm font-medium text-white"
              style={{ backgroundColor: GOLD }}
            >
              Chcem bezplatnú SEO audit
            </button>
            <button
              type="button"
              className="rounded-lg border px-6 py-3 text-sm font-medium text-white"
              style={{ borderColor: GOLD }}
            >
              Poslať dopyt
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-4">
            <div>
              <p className="text-xl font-bold text-white">BECODE</p>
              <p className="mt-3 text-sm text-white/70">
                SEO a organický rast. Dlhodobé výsledky namiesto rýchlych trikov.
              </p>
              <div className="mt-4 flex gap-4 text-white/70">
                <a href="#" className="hover:text-white" aria-label="Instagram">IG</a>
                <a href="#" className="hover:text-white" aria-label="Facebook">FB</a>
                <a href="#" className="hover:text-white" aria-label="LinkedIn">IN</a>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                Služby
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li><Link href="#" className="hover:text-white">Technický SEO audit</Link></li>
                <li><Link href="#" className="hover:text-white">Analýza kľúčových slov</Link></li>
                <li><Link href="#" className="hover:text-white">SEO pre e-shopy</Link></li>
                <li><Link href="#" className="hover:text-white">Content stratégia</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                Kontakty
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li><Link href="#" className="hover:text-white">Kontakt</Link></li>
                <li><Link href="#" className="hover:text-white">Cenník</Link></li>
                <li><Link href="#" className="hover:text-white">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                Newsletter
              </h4>
              <form className="mt-3 flex gap-2" action="#" method="post">
                <input
                  type="email"
                  placeholder="Váš e-mail"
                  className="flex-1 rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/50 focus:border-[#ffb400] focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-lg px-4 py-2.5 text-sm font-medium"
                  style={{ backgroundColor: GOLD, color: DARK }}
                >
                  Odoslať
                </button>
              </form>
            </div>
          </div>
          <p className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/50">
            © 2023 BeCode. Všetky práva vyhradené.
          </p>
        </div>
      </footer>
    </div>
  );
}
