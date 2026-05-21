import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEIGHBORHOOD — Tokyo Social Basketball Team",
  description:
    "NEIGHBORHOOD is a competitive social basketball team based in Tokyo. Built for players who still compete.",
  keywords: ["basketball", "tokyo", "social team", "neighborhood", "recruit", "competitive"],
  openGraph: {
    title: "NEIGHBORHOOD — Tokyo Social Basketball Team",
    description: "Built for players who still compete.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
