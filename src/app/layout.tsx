import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Inter, Playfair_Display } from "next/font/google";

export const metadata = {
  title: "Joshua Owuonda | Software Developer",
  description:
    "Junior Software Developer and IT Undergraduate specializing in full-stack web development and software engineering.",
};

export const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const headingFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${bodyFont.variable} 
          ${headingFont.variable}
          bg-white text-gray-900 
          dark:bg-gray-950 dark:text-gray-100
        `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          storageKey="theme"
        >
          <main className="min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
