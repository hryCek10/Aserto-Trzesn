const leagueUrl =
  "https://www.laczynaspilka.pl/rozgrywki?season=e9d66181-d03e-4bb3-b889-4da848f4831d&leagueGroup=e978c8e5-d903-4a89-b6b5-8d5da6c567ee&leagueId=337bb869-0b42-484f-8eca-0c8842a13ec9&subLeague=63d04023-727a-4c0c-a8c6-4154fe1104b7&enumType=ZpnAndLeagueAndPlay&group=e461a216-41f1-4342-a9ae-1978a713c38e&voivodeship=b1c48bc7-ffe2-4afd-a855-c64f82e3354f&isAdvanceMode=false&genderType=Male";

const iframeUrl = leagueUrl;

export function LeagueSection() {
  return (
    <section className="panel" aria-labelledby="league-title">
      <h2 id="league-title">Terminarz / Tabela / Wyniki</h2>

      <div className="embed-wrap embed-wrap-league">
        <iframe
          title="Rozgrywki LNP"
          src={iframeUrl}
          width="100%"
          height="980"
          style={{ border: "1px solid #f0d6d6", borderRadius: "12px" }}
          loading="lazy"
        />
      </div>
      <a className="button-link" href={leagueUrl} target="_blank" rel="noreferrer">
        Otworz LNP w nowej karcie
      </a>
    </section>
  );
}
