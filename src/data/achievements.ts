export type Achievement = {
  id: string;
  league: string;
  leagueJa: string;
  division: string;
  divisionJa: string;
  result: string;
  resultJa: string;
  detail: string;
  detailJa: string;
  year?: string;
};

export const achievements: Achievement[] = [
  {
    id: "achievement-01",
    league: "Tokyo League",
    leagueJa: "東京都リーグ",
    division: "Division 2",
    divisionJa: "2部所属",
    result: "PROMOTED",
    resultJa: "昇格",
    detail: "Entered Tokyo League in 2025 and earned promotion from Division 3 without a single loss.",
    detailJa: "2025年度より東京都リーグに参入し、3部を無敗で突破・2部昇格。",
    year: "2025",
  },
  {
    id: "achievement-02",
    league: "Koto City League",
    leagueJa: "江東区リーグ",
    division: "Division 1",
    divisionJa: "1部",
    result: "1ST PLACE",
    resultJa: "リーグ1位",
    detail: "Finished 1st in the league for two consecutive tournaments.",
    detailJa: "2大会連続リーグ1位。",
    year: "2024–2025",
  },
  {
    id: "achievement-03",
    league: "Chuo City League",
    leagueJa: "中央区リーグ",
    division: "Division 1",
    divisionJa: "1部",
    result: "RUNNER-UP",
    resultJa: "選手権大会2位",
    detail: "Runner-up in the championship tournament.",
    detailJa: "選手権大会 準優勝。",
    year: "2025",
  },
];
