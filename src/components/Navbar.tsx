import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-1.5">
          <span className="text-2xl font-bold tracking-tight text-white">
            <span className="inline-block text-[#ffb400]">▾</span> BECODE
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/#sluzby" className="text-sm text-zinc-300 hover:text-white">
            Služby
          </Link>
          <Link href="/content" className="text-sm text-zinc-300 hover:text-white">
            Portfólio
          </Link>
          <Link href="/#ppc" className="text-sm text-zinc-300 hover:text-white">
            PPC & AIS
          </Link>
          <Link href="/seo" className="text-sm text-zinc-300 hover:text-white">
            SEO
          </Link>
          <Link href="/case-studies" className="text-sm text-zinc-300 hover:text-white">
            Prípadové štúdie
          </Link>
          <Link href="/marketing" className="text-sm text-zinc-300 hover:text-white">
            Kampane
          </Link>
        </nav>
        <button
          type="button"
          className="rounded-lg bg-[#ffb400] px-5 py-2.5 text-sm font-medium text-[#1a1a1a] transition hover:bg-[#ffc233]"
        >
          Chcem nezáväznú konzultáciu
        </button>
      </div>
    </header>
  );
}
