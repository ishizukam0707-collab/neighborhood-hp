export type Achievement = {
  id: string;
  league: string;
  division: string;
  result: string;
  detail: string;
  year?: string;
};

export const achievements: Achievement[] = [
  {
    id: "achievement-01",
    league: "Tokyo League",
    division: "Division 2",
    result: "PROMOTED",
    detail: "Entered Tokyo League in 2025 and earned promotion from Division 3 without a single loss.",
    year: "2025",
  },
  {
    id: "achievement-02",
    league: "Koto City League",
    division: "Division 1",
    result: "1ST PLACE",
    detail: "Finished 1st in the league for two consecutive tournaments.",
    year: "2024–2025",
  },
  {
    id: "achievement-03",
    league: "Chuo City League",
    division: "Division 1",
    result: "RUNNER-UP",
    detail: "Runner-up in the championship tournament.",
    year: "2025",
  },
];
