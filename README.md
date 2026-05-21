# NEIGHBORHOOD — 公式Webサイト

東京の社会人バスケットボールチーム「NEIGHBORHOOD」の公式HP 兼 リクルートLP。

---

## ローカル起動方法

```bash
# 初回のみ：依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

ブラウザで http://localhost:3000 を開いてください。

---

## フォルダ構成（画像管理）

```
public/
└── images/
    ├── hero/          ← Hero背景画像
    │   └── hero-bg.jpg
    ├── members/       ← メンバー写真
    │   ├── m01.jpg
    │   ├── m02.jpg
    │   └── ...
    ├── activity/      ← 活動・試合写真
    │   ├── 260418.jpg
    │   └── ...
    └── logo/          ← ロゴ画像（将来用）
```

---

## Hero画像の差し替え方法

1. 差し替えたい画像（JPGまたはPNG）を用意する
   - 推奨サイズ：1920×1080px 以上、横長
   - ファイル名：`hero-bg.jpg`（固定）

2. 以下のフォルダに保存する
   ```
   public/images/hero/hero-bg.jpg
   ```

3. 保存するだけで自動的に反映される（コードの変更不要）

> **画像の見え方について**
> Hero画像は透明度（opacity）を下げた状態で表示されます。
> 画像の明るさを調整したい場合は `src/components/sections/Hero.tsx` の
> `opacity: 0.18` の数値を変更してください（0〜1の範囲）。

---

## メンバー情報の更新方法

メンバー情報は `src/data/members.ts` で管理しています。

### 1. メンバー写真を追加する

1. 写真（JPG形式、縦長3:4を推奨）を用意する
   - 推奨サイズ：600×800px、1MB以下
   - ファイル名の例：`m01.jpg`（メンバーIDに合わせると分かりやすい）

2. 以下のフォルダに保存する
   ```
   public/images/members/m01.jpg
   ```

3. `src/data/members.ts` を開き、該当メンバーの `image` フィールドを更新する
   ```ts
   // 変更前
   image: "",

   // 変更後
   image: "/images/members/m01.jpg",
   ```

### 2. メンバー情報を編集する

`src/data/members.ts` を開き、各メンバーのオブジェクトを直接編集する。

```ts
{
  id: "m01",          // 変更しないこと
  number: 4,          // 背番号
  name: "山田 太郎",  // 表示名（英語でも日本語でも可）
  position: "PG",     // PG / SG / SF / PF / C のいずれか
  height: 180,        // 身長（cm）
  university: "早稲田大学",  // 出身大学
  image: "/images/members/m01.jpg",  // 写真パス
},
```

### 3. メンバーを追加する

`src/data/members.ts` の `members` 配列に新しいオブジェクトを追加する。

```ts
{
  id: "m17",          // 連番でユニークなIDをつける
  number: 33,
  name: "Taro Suzuki",
  position: "SF",
  height: 185,
  university: "Meiji University",
  image: "",          // 写真未確定の場合は空文字でOK
},
```

### 4. メンバーを削除する

`src/data/members.ts` から該当するオブジェクトを削除するだけでOK。

---

## 活動情報の更新方法

活動情報は `src/data/activities.ts` で管理しています。

### 1. 新しい活動を追加する

`src/data/activities.ts` を開き、`activities` 配列の **先頭** に追加する。
（先頭に追加すると最新の活動が上に表示される）

**試合の場合（type: "GAME"）**
```ts
{
  id: "activity-03",
  type: "GAME",
  label: "GAME DAY_260502",   // 表示ラベル（YYMMDD形式推奨）
  date: "SAT, MAY 2 2026",    // 表示日付
  title: "92-68 WIN",          // スコア＋結果
  subtitle: "vs. Team Name",   // 対戦相手（省略可）
  result: "92-68",             // スコアのみ
  location: "KOTO, TOKYO",
  image: "/images/activity/260502.jpg",  // 写真なしは ""
},
```

**練習の場合（type: "TRAINING"）**
```ts
{
  id: "activity-04",
  type: "TRAINING",
  label: "TRAINING DAY_260504",
  date: "MON, MAY 4 2026",
  title: "BACK TO WORK.",
  subtitle: "",
  location: "KOTO, TOKYO",
  image: "",
},
```

### 2. 活動写真を追加する

1. 写真（JPG形式）を用意する
   - 推奨サイズ：1200×900px 以上（横長）、2MB以下

2. 以下のフォルダに保存する
   ```
   public/images/activity/260502.jpg
   ```
   （ファイル名は試合日付など分かりやすい名前を推奨）

3. `src/data/activities.ts` の `image` フィールドを更新する
   ```ts
   image: "/images/activity/260502.jpg",
   ```

> **写真表示の仕様**
> `image` が空文字（""）のカードは、テキストのみのカードとして表示されます。
> 写真を設定したカードでは、写真がカード上部に表示されます。

---

## Vercelへのデプロイ手順

### 初回のみ（GitHubと連携する場合）

1. [Vercel](https://vercel.com) にアクセスし、GitHubアカウントでログイン
2. 「Add New → Project」をクリック
3. このリポジトリをインポート
4. 設定はデフォルトのまま「Deploy」をクリック

以後、GitHubのメインブランチにプッシュするたびに自動デプロイされる。

### ビルド確認（デプロイ前の動作チェック）

```bash
npm run build
```

エラーがなければVercelでも正常に動作する。

### コマンドラインから手動デプロイ（任意）

```bash
# Vercel CLIのインストール（初回のみ）
npm install -g vercel

# デプロイ
vercel --prod
```

---

## よくある操作まとめ

| やりたいこと | 編集するファイル |
|---|---|
| メンバー情報を変える | `src/data/members.ts` |
| メンバー写真を変える | `public/images/members/` に写真を置き、`members.ts` のパスを更新 |
| 試合結果を追加する | `src/data/activities.ts` の先頭に追加 |
| 活動写真を追加する | `public/images/activity/` に写真を置き、`activities.ts` のパスを更新 |
| Hero画像を変える | `public/images/hero/hero-bg.jpg` を差し替え |
| チームの実績を更新する | `src/data/achievements.ts` |
| 練習スケジュールを変える | `src/data/practice.ts` |
