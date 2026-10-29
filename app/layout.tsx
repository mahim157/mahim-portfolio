import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Mahim Islam | Full-Stack Web Developer", template: "%s | Mahim Islam" },
  description: "Portfolio of Mahim Islam, a full-stack web developer building responsive web applications with Next.js, React, TypeScript and modern web technologies.",
  metadataBase: new URL("https://mahim-portfolio.vercel.app"),
  openGraph: { title: "Mahim Islam | Full-Stack Web Developer", description: "Selected projects, skills and contact information.", type: "website" },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
