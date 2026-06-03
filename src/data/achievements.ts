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

export type SelectedPlayer = {
  number: string;
  name: string;
};

export type FeaturedResult = {
  year: string;
  tournament: string;
  tournamentJa: string;
  representativeJa: string;
  result: string;
  resultJa: string;
  body: string;
  images: string[];
  selectedPlayers: SelectedPlayer[];
};

export const featuredResult: FeaturedResult = {
  year: "2026",
  tournament: "Tokyo Metropolitan Tournament",
  tournamentJa: "東京都民大会",
  representativeJa: "江東区代表",
  result: "RUNNER-UP",
  resultJa: "準優勝",
  body: "江東区代表として準優勝。NEIGHBORHOODから6名が出場し、東京2位という結果を残しました。",
  images: [
    "/images/result/tomin-2026-2.jpg",
    "/images/result/tomin-2026-3.jpg",
  ],
  selectedPlayers: [
    { number: "3", name: "Seiya Tsukamoto" },
    { number: "7", name: "Yota Tsuzuki" },
    { number: "8", name: "Masaharu Ishizuka" },
    { number: "10", name: "Yunosuke Hama" },
    { number: "17", name: "Takehiro Fujiwara" },
    { number: "21", name: "Sosuke Yasumura" },
  ],
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
