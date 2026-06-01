import Link from "next/link";

const navLinks = [
  { href: "/danh-muc", label: "Danh mục" },
  { href: "/danh-muc#combo", label: "Combo quà tặng" },
  { href: "/b2b", label: "B2B" },
  { href: "/gio-hang", label: "Giỏ hàng" },
];

export function SiteHeader() {
  return (
    <header className="relative z-10">
      <div className="bg-pine text-cream">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-sm">
          <span className="font-medium uppercase tracking-[0.18em]">
            Studio văn phòng phẩm GGCloud
          </span>
          <span className="text-cream/80">
            Quà tặng doanh nghiệp theo ngân sách
          </span>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-tangerine/20">
            <span className="text-xl font-serif text-pine">GG</span>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-charcoal/70">
              Stationery lab
            </p>
            <p className="text-xl font-semibold text-ink">
              GGCloud Stationery
            </p>
          </div>
        </div>
        <nav className="flex flex-wrap items-center gap-4 text-sm font-medium text-charcoal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 transition hover:bg-sand/70"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/b2b"
            className="rounded-full bg-ink px-5 py-2 text-cream transition hover:bg-charcoal"
          >
            Tư vấn B2B
          </Link>
        </nav>
      </div>
    </header>
  );
}
