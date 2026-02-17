import type { Metadata } from "next";
import squad from "@/data/squad.json";

export const metadata: Metadata = {
  title: "Kadra",
  description: "Kadra Aserto Trzesn - imie i nazwisko, pozycja i rocznik."
};

type SquadPlayer = {
  name?: string;
  position?: string;
  birthYear?: number | null;
};

function normalizeForCompare(value: string): string {
  return value
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

const positionGroups = [
  { id: "goalkeepers", label: "Bramkarze", matcher: /bram/ },
  { id: "defenders", label: "Obro\u0144cy", matcher: /obro|def/ },
  { id: "midfielders", label: "Pomocnicy", matcher: /pomoc|mid/ },
  { id: "forwards", label: "Napastnicy", matcher: /napast|atak|forw/ }
] as const;

export default function SquadPage() {
  const players = (squad as SquadPlayer[]).map((player) => ({
    name: (player.name ?? "").trim(),
    position: (player.position ?? "").trim(),
    birthYear: player.birthYear ?? null
  }));

  const groupedPlayers = positionGroups
    .map((group) => ({
      ...group,
      players: players.filter((player) =>
        group.matcher.test(normalizeForCompare(player.position))
      )
    }))
    .filter((group) => group.players.length > 0);

  return (
    <section className="panel">
      <h1>Kadra Aserto Trześń 2025/2026</h1>

      <div className="squad-groups">
        {groupedPlayers.map((group) => (
          <section key={group.id} className="squad-group" aria-labelledby={`group-${group.id}`}>
            <h2 id={`group-${group.id}`}>{group.label}</h2>
            <table className="data-table squad-table">
              <colgroup>
                <col className="squad-col-player" />
                <col className="squad-col-year" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">Zawodnik</th>
                  <th scope="col">Rocznik</th>
                </tr>
              </thead>
              <tbody>
                {group.players.map((player, index) => (
                  <tr key={`${group.id}-${index}-${player.name}`}>
                    <td>{player.name}</td>
                    <td>{player.birthYear ?? "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        ))}
      </div>
    </section>
  );
}
