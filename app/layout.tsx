import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Segun Olofinsawe | Senior Software Engineer & Architect",
  description:
    "Senior Software Engineer specializing in .NET, Azure, Cloud Native architecture, and enterprise banking solutions. Over 6 years building secure, scalable financial platforms.",
  keywords: [
    "Segun Olofinsawe",
    "Senior Software Engineer",
    "Software Architect",
    ".NET Developer",
    "Azure",
    "Cloud Native",
    "C#",
    "ASP.NET Core",
    "Microservices",
    "DDD",
    "CQRS",
  ],
  authors: [{ name: "Segun Olofinsawe" }],
  openGraph: {
    title: "Segun Olofinsawe | Senior Software Engineer & Architect",
    description:
      "Designing and building secure, scalable, cloud-native enterprise software that powers digital banking and financial platforms.",
    type: "website",
    url: "https://segun-olofinsawe.github.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "Segun Olofinsawe | Senior Software Engineer",
    description:
      "Designing and building secure, scalable, cloud-native enterprise software.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white dark:bg-[#060d1a] text-[#0A2540] dark:text-slate-100 antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
