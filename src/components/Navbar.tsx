"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

const sections = ["home", "about", "skills", "projects", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const { theme, setTheme } = useTheme();

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + 120;

      sections.forEach((sec) => {
        const el = document.getElementById(sec);
        if (
          el &&
          el.offsetTop <= scrollPos &&
          el.offsetTop + el.offsetHeight > scrollPos
        ) {
          setActive(sec);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        {/* Navigation */}
        <div className="flex gap-1">
          {sections.map((sec) => {
            const isActive = active === sec;

            return (
              <button
                key={sec}
                onClick={() => handleScroll(sec)}
                aria-current={isActive ? "page" : undefined}
                className={`capitalize rounded-md px-3 py-1.5 text-sm font-medium transition-colors
                  ${
                    isActive
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:bg-muted"
                  }`}
              >
                {sec}
              </button>
            );
          })}
        </div>

        {/* Theme Toggle */}
        <Button
          variant="ghost"
          size="icon"
          aria-label="Toggle theme"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-full"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </Button>
      </div>
    </nav>
  );
}
