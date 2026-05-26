import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "noon design onboarding · a note from Rahul",
  description:
    "Hey, this is Rahul. A note for whoever joins the squad next: the first two weeks at noon, and how we go about making it the best commerce app from a consumer's point of view.",
  authors: [{ name: "Rahul Jaiswal" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
