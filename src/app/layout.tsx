import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deepak Timlapur | AI & Software Developer",
  description:
    "Explore the portfolio of Deepak Timlapur — Computer Science and Data Science student, AI enthusiast and software developer building intelligent digital experiences.",
  keywords: [
    "Deepak Timlapur",
    "AI Developer",
    "Software Engineer",
    "Data Science",
    "Python",
    "Machine Learning",
    "Portfolio",
  ],
  authors: [{ name: "Deepak Timlapur" }],
  openGraph: {
    title: "Deepak Timlapur | Beyond the Code",
    description: "Building intelligence. Creating impact.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
