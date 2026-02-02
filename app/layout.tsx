import "./globals.css";
import styles from "./layout.module.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Joshua Owuonda | Software Developer",
  description:
    "Junior Software Developer and IT Undergraduate specializing in full-stack web development and software engineering.",
  metadataBase: new URL("https://my-portfolio-wine-chi-45.vercel.app"), // fixes Open Graph warning
  openGraph: {
    title: "Joshua Owuonda | Software Developer",
    description:
      "Portfolio of Joshua Owuonda, a junior software developer specializing in modern web applications.",
    url: "https://my-portfolio-wine-chi-45.vercel.app",
    siteName: "Joshua Owuonda Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Joshua Owuonda Portfolio",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={styles.body}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true} // respects system preference
          storageKey="theme" // persists user preference
        >
          <Navbar />
          <div className={styles.container}>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
