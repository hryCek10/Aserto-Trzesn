import type { Metadata } from "next";
import { LeagueSection } from "@/components/league-section";

export const metadata: Metadata = {
  title: "Liga",
  description:
    "Terminarz, tabela i wyniki Aserto Trzesn osadzone bezposrednio z oficjalnego widoku LNP."
};

export default function LeaguePage() {
  return (
    <>
      <LeagueSection />
    </>
  );
}
