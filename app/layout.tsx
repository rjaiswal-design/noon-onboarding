import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "noon design — onboarding",
  description:
    "Two weeks for new designers joining noon — context, language, exposure, belonging. Built on the Plot UI kit.",
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
