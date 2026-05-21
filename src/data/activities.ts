// ============================================================
// ACTIVITIES DATA — 活動情報の管理ファイル
// ============================================================
//
// 【新しい活動を追加する方法】
//   1. 以下のテンプレートを activities 配列の先頭にコピーして追加する
//      ※ 先頭に追加すると最新が上に表示される
//
//   2. 試合の場合（type: "GAME"）
//      {
//        id: "activity-03",
//        type: "GAME",
//        label: "GAME DAY_260502",  // YYMMDD形式推奨
//        date: "SAT, MAY 2 2026",
//        title: "92-68 WIN",        // スコア＋結果
//        subtitle: "vs. Team Name", // 対戦相手（省略可）
//        result: "92-68",
//        location: "KOTO, TOKYO",
//        image: "/images/activity/260502.jpg", // 画像なしの場合は "" でOK
//      }
//
//   3. 練習の場合（type: "TRAINING"）
//      {
//        id: "activity-04",
//        type: "TRAINING",
//        label: "TRAINING DAY_260504",
//        date: "MON, MAY 4 2026",
//        title: "BACK TO WORK.",
//        subtitle: "",
//        location: "KOTO, TOKYO",
//        image: "",
//      }
//
// 【画像の入れ方】
//   1. 写真を public/images/activity/ に保存する（例: 260502.jpg）
//   2. image フィールドを "/images/activity/260502.jpg" に設定する
//   3. 推奨サイズ: 1200×900px 以上（横長）、JPG形式、2MB以下
//
// 【type一覧】
//   "GAME"     — 公式戦・練習試合
//   "TRAINING" — 練習
//   "EVENT"    — イベント・その他
// ============================================================

export type ActivityType = "GAME" | "TRAINING" | "EVENT";

export type Activity = {
  id: string;
  type: ActivityType;
  label: string;       // 表示ラベル (例: "GAME DAY_260418")
  date: string;        // 表示日付  (例: "SAT, APR 18 2026")
  title: string;       // メイン表示テキスト (スコアや練習テーマなど)
  subtitle?: string;   // サブテキスト (対戦相手など、省略可)
  result?: string;     // 試合スコアのみ (例: "81-74")  ※ GAME のみ
  location?: string;   // 場所
  image: string;       // 画像パス — 未設定の場合は "" でOK
};

export const activities: Activity[] = [
  // ── 最新の活動を先頭に追加してください ─────────────────────

  {
    id: "activity-01",
    type: "GAME",
    label: "GAME DAY_260418",
    date: "SAT, APR 18 2026",
    title: "81-74 WIN",
    subtitle: "",
    result: "81-74",
    location: "KOTO, TOKYO",
    image: "",            // ← 写真ができたら "/images/activity/260418.jpg" に変更
  },
  {
    id: "activity-02",
    type: "TRAINING",
    label: "TRAINING DAY_260419",
    date: "SUN, APR 19 2026",
    title: "BACK TO WORK.",
    subtitle: "",
    location: "KOTO, TOKYO",
    image: "",
  },
];
