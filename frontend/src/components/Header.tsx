"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NAV_LINKS = [
  { href: "/", label: "HOME" },
  { href: "/team-pps", label: "TEAM PPS" },
  { href: "/thirukural", label: "THIRUKKURAL-MJ" },
  { href: "/programs", label: "PROGRAMS" },
  { href: "/reviews", label: "REVIEWS" },
  { href: "/gallery", label: "GALLERY" },
];

const MORE_LINKS = [
  { href: "/careers", label: "CAREERS" },
  { href: "/contact", label: "CONTACT" },
];

export default function Header() {
  const pathname = usePathname() || "/";
  const [moreOpen, setMoreOpen] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const isHome = pathname === "/";

  React.useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <>
      {/* ——— Scoped Styles ——— */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
.hdr{position:sticky;top:0;z-index:9999;background:#fff;box-shadow:0 1px 4px rgba(0,0,0,.08)}
.hdr-inner{max-width:100%;margin:0 auto;padding:12px 6%;display:flex;align-items:center;justify-content:space-between}
.hdr-logo img{height:56px;width:auto}

/* Home page logo float animation — only the logo moves */
@keyframes logoFloat{
  0%,100%{transform:translateY(0)}
  50%{transform:translateY(8px)}
}
.hdr-logo-float img{animation:logoFloat 3s ease-in-out infinite}

/* Desktop nav — hidden by default, shown ≥1024px */
.hdr-dnav{display:none;align-items:center;gap:32px;font-size:13px;font-weight:600;letter-spacing:0.5px}
@media(min-width:1024px){.hdr-dnav{display:flex}}

.hdr-dnav a{color:#374151;text-decoration:none;padding:4px 0;border-bottom:2px solid transparent;text-transform:uppercase}
.hdr-dnav a:hover,.hdr-dnav a.on{color:#025a0b;border-bottom-color:#025a0b}

/* More button */
.hdr-more-wrap{position:relative}
.hdr-more-btn{display:inline-flex;align-items:center;gap:4px;font:inherit;font-size:13px;font-weight:600;letter-spacing:0.5px;text-transform:uppercase;color:#374151;background:none;border:none;border-bottom:2px solid transparent;padding:4px 0;cursor:pointer}
.hdr-more-btn:hover,.hdr-more-btn.on{color:#025a0b;border-bottom-color:#025a0b}
.hdr-more-btn svg{width:14px;height:14px;transition:transform .2s}

/* Dropdown */
.hdr-dd{position:absolute;top:calc(100% + 8px);right:0;min-width:180px;background:#fff;border:1px solid #e5e7eb;border-radius:8px;box-shadow:0 8px 30px rgba(0,0,0,.12);overflow:hidden;z-index:99999}
.hdr-dd a{display:block;padding:12px 18px;font-size:13px;font-weight:700;text-transform:uppercase;color:#374151;text-decoration:none;border-bottom:1px solid #f3f4f6}
.hdr-dd a:last-child{border-bottom:none}
.hdr-dd a:hover,.hdr-dd a.on{color:#025a0b;background:#f0fdf4}

/* Mobile hamburger — shown by default, hidden ≥1024px */
.hdr-ham{display:flex;align-items:center;justify-content:center;background:none;border:none;cursor:pointer;padding:6px;color:#374151}
.hdr-ham svg{width:28px;height:28px}
@media(min-width:1024px){.hdr-ham{display:none}}

/* Mobile menu panel */
.hdr-mob{display:flex;flex-direction:column;background:#fff;border-top:1px solid #e5e7eb;box-shadow:0 8px 30px rgba(0,0,0,.1)}
.hdr-mob a{display:block;padding:14px 20px;font-size:14px;font-weight:700;text-transform:uppercase;color:#374151;text-decoration:none;border-bottom:1px solid #f3f4f6}
.hdr-mob a:hover,.hdr-mob a.on{color:#025a0b;background:#f0fdf4}
.hdr-mob-lbl{padding:10px 20px;font-size:10px;font-weight:900;color:#9ca3af;text-transform:uppercase;letter-spacing:2px;background:#f9fafb;border-bottom:1px solid #f3f4f6}
@media(min-width:1024px){.hdr-mob{display:none!important}}
`,
        }}
      />

      <header className="hdr">
        <div className="hdr-inner">
          {/* Logo — always visible */}
          <Link href="/" className={`hdr-logo ${isHome ? 'hdr-logo-float' : ''}`} onClick={() => setMenuOpen(false)}>
            <img alt="PPS Logo" src="/logo.webp" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hdr-dnav">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className={isActive(l.href) ? "on" : ""}>
                {l.label}
              </Link>
            ))}

            {/* More dropdown */}
            <div className="hdr-more-wrap">
              <button
                type="button"
                className={`hdr-more-btn ${pathname === "/careers" || pathname === "/contact" ? "on" : ""}`}
                onClick={() => setMoreOpen((v) => !v)}
              >
                MORE
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ transform: moreOpen ? "rotate(180deg)" : "rotate(0)" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {moreOpen && (
                <div className="hdr-dd">
                  {MORE_LINKS.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className={isActive(l.href) ? "on" : ""}
                      onClick={() => setMoreOpen(false)}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile hamburger button */}
          <button type="button" className="hdr-ham" onClick={() => setMenuOpen((v) => !v)}>
            {menuOpen ? (
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="hdr-mob">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={isActive(l.href) ? "on" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <div className="hdr-mob-lbl">More</div>
            {MORE_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={isActive(l.href) ? "on" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
