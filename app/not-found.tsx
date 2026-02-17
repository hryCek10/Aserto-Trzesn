import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="panel">
      <h1>404 - Nie znaleziono strony</h1>
      <p>Sprawdz adres albo wroc na strone glowna.</p>
      <Link href="/">Wroc do strony glownej</Link>
    </section>
  );
}
