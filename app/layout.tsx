import { ThemeProvider } from "@/components/common/ThemeProvider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Yesniel - Full-Stack Developer",
  description:
    "Portfolio of Yesniel, a full-stack developer passionate about creating elegant, efficient, and user-friendly web applications",
  openGraph: {
    title: "Yesniel - Full-Stack Developer",
    description:
      "Portfolio of Yesniel, a full-stack developer passionate about creating elegant, efficient, and user-friendly web applications.",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "Yesniel Portfolio",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/yesniel-profile.jpeg`,
        alt: "Yesniel's profile picture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  keywords: [
    "Full-Stack Developer",
    "Backend Developer",
    "Frontend Developer",
    "Web Developer",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
    "Portfolio",
    "Yesniel",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
