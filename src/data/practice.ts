export type PracticeSession = {
  id: string;
  day: string;
  time?: string;
  location: string;
  note?: string;
};

export const practiceSessions: PracticeSession[] = [
  {
    id: "session-01",
    day: "Sunday",
    time: "19:00 – 21:00",
    location: "Koto, Tokyo",
  },
  {
    id: "session-02",
    day: "Saturday (Irregular)",
    location: "Minato or Bunkyo, Tokyo",
    note: "Schedule varies",
  },
];

export const practiceInfo = {
  frequency: "Around 5–6 sessions per month",
  games: "Official games and practice games on weekends or holidays depending on entries.",
};
