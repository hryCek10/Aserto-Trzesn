import { LeagueSection } from "@/components/league-section";
import { NewsSection } from "@/components/news-section";

export default function HomePage() {
  return (
    <>
      <section className="hero hero-banner" aria-label="Baner Aserto Trzesn">
        <h1 className="sr-only">Aserto Trzesn</h1>
      </section>

      <div className="home-layout">
        <div className="home-main">
          <NewsSection />
        </div>
        <aside className="home-side" aria-label="Tabela i liga">
          <LeagueSection />
        </aside>
      </div>
    </>
  );
}
