const pageUrl = "https://www.facebook.com/AsertoTrzesn";
const pluginUrl = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(pageUrl)}&tabs=timeline&width=500&height=980&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false`;

export function NewsSection() {
  return (
    <section className="panel panel-news" aria-labelledby="news-title">
      <h2 id="news-title">Aktualnosci</h2>

      <div className="embed-wrap embed-wrap-news">
        <iframe
          title="Facebook - Aserto Trzesn aktualnosci"
          src={pluginUrl}
          width="500"
          height="980"
          style={{ border: "none", overflow: "hidden", display: "block" }}
          loading="lazy"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <div className="news-actions">
        <a className="button-link" href={pageUrl} target="_blank" rel="noreferrer">
          Wiecej na Facebooku
        </a>
      </div>
    </section>
  );
}
