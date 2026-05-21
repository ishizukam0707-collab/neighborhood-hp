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
  role?: string;         // 役職 — 例: "Captain" / "Founder" / 省略可
};

export const members: Member[] = [
  // ── 1 ──────────────────────────────────────────────────────
  {
    id: "m01",
    number: 1,
    name: "Kento Yamamoto",
    position: "PG",
    height: 165,
    university: "Waseda University",
    image: "/images/members/m01.jpg",
  },
  // ── 2 ──────────────────────────────────────────────────────
  {
    id: "m02",
    number: 2,
    name: "Masayuki Ishigure",
    position: "SG",
    height: 178,
    university: "Meiji University",
    image: "/images/members/m02.jpg",
  },
  // ── 3 ──────────────────────────────────────────────────────
  {
    id: "m03",
    number: 3,
    name: "Seiya Tsukamoto",
    position: "SF",
    height: 183,
    university: "Hiroshima University",
    image: "/images/members/m03.jpg",
  },
  // ── 4 ──────────────────────────────────────────────────────
  {
    id: "m04",
    number: 5,
    name: "Rio Saito",
    position: "PG",
    height: 177,
    university: "Edogawa University",
    image: "/images/members/m04.jpg",
  },
  // ── 5 ──────────────────────────────────────────────────────
  {
    id: "m05",
    number: 7,
    name: "Yota Tsuzuki",
    position: "C",
    height: 190,
    university: "Kagoshima University",
    image: "/images/members/m05.jpg",
  },
  // ── 6 ──────────────────────────────────────────────────────
  {
    id: "m06",
    number: 8,
    name: "Masaharu Ishizuka",
    position: "SG",
    height: 180,
    university: "Meiji University",
    image: "/images/members/m06.jpg",
    role: "Founder",
  },
  // ── 7 ──────────────────────────────────────────────────────
  {
    id: "m07",
    number: 10,
    name: "Yunosuke Hama",
    position: "PG",
    height: 175,
    university: "Waseda University",
    image: "/images/members/m07.jpg",
  },
  // ── 8 ──────────────────────────────────────────────────────
  {
    id: "m08",
    number: 11,
    name: "Shinga Ino",
    position: "SG",
    height: 165,
    university: "Meiji University",
    image: "/images/members/m08.jpg",
  },
  // ── 9 ──────────────────────────────────────────────────────
  {
    id: "m09",
    number: 14,
    name: "Yosuke Sakai",
    position: "SG",
    height: 177,
    university: "",
    image: "/images/members/m09.jpg",
  },
  // ── 10 ─────────────────────────────────────────────────────
  {
    id: "m10",
    number: 15,
    name: "Ryota Kawafuji",
    position: "SF",
    height: 181,
    university: "Meiji University",
    image: "/images/members/m10.jpg",
  },
  // ── 11 ─────────────────────────────────────────────────────
  {
    id: "m11",
    number: 17,
    name: "Takehiro Fujiwara",
    position: "SF",
    height: 184,
    university: "Waseda University",
    image: "/images/members/m11.jpg",
    role: "Captain",
  },
  // ── 12 ─────────────────────────────────────────────────────
  {
    id: "m12",
    number: 21,
    name: "Sosuke Yasumura",
    position: "PG",
    height: 181,
    university: "University of Tokyo",
    image: "/images/members/m12.jpg",
  },
  // ── 13 ─────────────────────────────────────────────────────
  {
    id: "m13",
    number: 22,
    name: "Yosuke Kikuchihara",
    position: "C",
    height: 192,
    university: "Meiji University",
    image: "",                          // 写真未準備
  },
  // ── 14 ─────────────────────────────────────────────────────
  {
    id: "m14",
    number: 34,
    name: "Yukihiro Ishii",
    position: "SG",
    height: 177,
    university: "Edogawa University",
    image: "",                          // 写真未準備
  },
  // ── 15 ─────────────────────────────────────────────────────
  {
    id: "m15",
    number: 44,
    name: "Sho Tomoi",
    position: "PG",
    height: 175,
    university: "Nihon University",
    image: "/images/members/m15.jpg",
  },
  // ── 16 ─────────────────────────────────────────────────────
  {
    id: "m16",
    number: 75,
    name: "Kento Ikeda",
    position: "C",
    height: 192,
    university: "Waseda University",
    image: "/images/members/m16.jpg",
  },
];
