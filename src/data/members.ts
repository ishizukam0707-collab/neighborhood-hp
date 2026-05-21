// ============================================================
// MEMBERS DATA — メンバー情報の管理ファイル
// ============================================================
//
// 【画像の入れ方】
//   1. 写真を public/images/members/ に保存する
//      ファイル名の例: m01.jpg, m02.jpg ... （IDと合わせると分かりやすい）
//   2. image フィールドを "/images/members/m01.jpg" のように更新する
//   3. 画像がまだない場合は image: "" のままでOK（グレープレースホルダーが表示される）
//
// 【推奨画像サイズ】
//   縦長 3:4（例: 600×800px）、JPG形式、1MB以下推奨
//
// 【ポジション一覧】
//   "PG" = ポイントガード
//   "SG" = シューティングガード
//   "SF" = スモールフォワード
//   "PF" = パワーフォワード
//   "C"  = センター
// ============================================================

export type Position = "PG" | "SG" | "SF" | "PF" | "C";

export type Member = {
  id: string;
  number: number;        // 背番号
  name: string;          // 名前（表示名）
  position: Position;    // ポジション
  height: number;        // 身長 (cm)
  university: string;    // 出身大学
  image: string;         // 画像パス — 未設定の場合は "" でOK
};

export const members: Member[] = [
  // ── 1 ──────────────────────────────────────────────────────
  {
    id: "m01",
    number: 4,
    name: "Kenta Yamamoto",
    position: "PG",
    height: 175,
    university: "Waseda University",
    image: "",            // ← 写真ができたら "/images/members/m01.jpg" に変更
  },
  // ── 2 ──────────────────────────────────────────────────────
  {
    id: "m02",
    number: 7,
    name: "Ryota Tanaka",
    position: "SG",
    height: 182,
    university: "Keio University",
    image: "",
  },
  // ── 3 ──────────────────────────────────────────────────────
  {
    id: "m03",
    number: 11,
    name: "Shota Inoue",
    position: "SF",
    height: 188,
    university: "Hosei University",
    image: "",
  },
  // ── 4 ──────────────────────────────────────────────────────
  {
    id: "m04",
    number: 15,
    name: "Daiki Nakamura",
    position: "PF",
    height: 193,
    university: "Nihon University",
    image: "",
  },
  // ── 5 ──────────────────────────────────────────────────────
  {
    id: "m05",
    number: 21,
    name: "Yuki Sasaki",
    position: "C",
    height: 198,
    university: "Tokai University",
    image: "",
  },
  // ── 6 ──────────────────────────────────────────────────────
  {
    id: "m06",
    number: 23,
    name: "Takumi Ito",
    position: "SG",
    height: 180,
    university: "Senshu University",
    image: "",
  },
  // ── 7 ──────────────────────────────────────────────────────
  {
    id: "m07",
    number: 3,
    name: "Haruki Sato",
    position: "PG",
    height: 172,
    university: "Meiji University",
    image: "",
  },
  // ── 8 ──────────────────────────────────────────────────────
  {
    id: "m08",
    number: 8,
    name: "Kosuke Watanabe",
    position: "SF",
    height: 185,
    university: "Chuo University",
    image: "",
  },
  // ── 9 ──────────────────────────────────────────────────────
  {
    id: "m09",
    number: 13,
    name: "Ryu Kobayashi",
    position: "PF",
    height: 191,
    university: "Rikkyo University",
    image: "",
  },
  // ── 10 ─────────────────────────────────────────────────────
  {
    id: "m10",
    number: 24,
    name: "Sota Kato",
    position: "C",
    height: 196,
    university: "Kokushikan University",
    image: "",
  },
  // ── 11 ─────────────────────────────────────────────────────
  {
    id: "m11",
    number: 6,
    name: "Tomoya Fujita",
    position: "SG",
    height: 179,
    university: "Aoyama Gakuin University",
    image: "",
  },
  // ── 12 ─────────────────────────────────────────────────────
  {
    id: "m12",
    number: 10,
    name: "Yusei Ogawa",
    position: "PG",
    height: 174,
    university: "Toyo University",
    image: "",
  },
  // ── 13 ─────────────────────────────────────────────────────
  {
    id: "m13",
    number: 14,
    name: "Naoto Kimura",
    position: "SF",
    height: 186,
    university: "Nihon University",
    image: "",
  },
  // ── 14 ─────────────────────────────────────────────────────
  {
    id: "m14",
    number: 17,
    name: "Kazuya Nishida",
    position: "PF",
    height: 190,
    university: "Chuo University",
    image: "",
  },
  // ── 15 ─────────────────────────────────────────────────────
  {
    id: "m15",
    number: 22,
    name: "Taisei Hayashi",
    position: "C",
    height: 197,
    university: "Tokai University",
    image: "",
  },
  // ── 16 ─────────────────────────────────────────────────────
  {
    id: "m16",
    number: 30,
    name: "Kosei Yamada",
    position: "SG",
    height: 183,
    university: "Senshu University",
    image: "",
  },
];
