import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Aktualnosci" },
  { href: "/kadra", label: "Kadra" },
  { href: "/historia", label: "Historia" },
  { href: "/liga", label: "Liga" }
];

const facebookUrl = "https://www.facebook.com/AsertoTrzesn";
const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://www.instagram.com/";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo-link">
          <Image
            src="/herb.png"
            alt="Herb Aserto Trzesn"
            width={34}
            height={34}
            className="logo-crest"
            priority
          />
          <span>Aserto Trzesn</span>
        </Link>
        <div className="header-actions">
          <nav aria-label="Nawigacja glowna">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="social-list" aria-label="Media spolecznosciowe">
            <li>
              <a href={facebookUrl} target="_blank" rel="noreferrer" className="social-link">
                <span className="sr-only">Facebook</span>
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M14 9h3V6h-3c-2.8 0-4 1.7-4 4.2V13H8v3h2v5h3v-5h3l1-3h-4v-2.6c0-.9.5-1.4 1.4-1.4Z" />
                </svg>
              </a>
            </li>
            <li>
              <a href={instagramUrl} target="_blank" rel="noreferrer" className="social-link">
                <span className="sr-only">Instagram</span>
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm9.75 1a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
