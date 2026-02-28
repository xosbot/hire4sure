import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "hire4sure.ai — AI Career Copilot",
  description:
    "Land more interviews with AI that actually understands your career. Tailored resumes, cover letters, interview prep, and skill roadmaps — in minutes.",
  keywords: [
    "AI resume",
    "cover letter generator",
    "interview prep",
    "job search",
    "career AI",
    "ATS resume",
  ],
  openGraph: {
    title: "hire4sure.ai — AI Career Copilot",
    description:
      "Upload your resume. Tell us your dream role. Get a tailored resume, cover letter, interview prep, and skill roadmap — in minutes.",
    type: "website",
    url: "https://hire4sure.ai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white">{children}</body>
    </html>
  );
}
