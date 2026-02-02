"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const { theme, setTheme } = useTheme();

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "contact"];

    const onScroll = () => {
      const scrollPos = window.scrollY + 150;
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (
          el &&
          el.offsetTop <= scrollPos &&
          el.offsetTop + el.offsetHeight > scrollPos
        ) {
          setActive(sec);
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`${styles.navbar} fixed w-full bg-white dark:bg-gray-900 z-50 py-2 px-6 flex gap-3 shadow`}
    >
      {["home", "about", "skills", "projects", "contact"].map((sec) => (
        <Button
          key={sec}
          variant={active === sec ? "default" : "outline"}
          onClick={() => handleScroll(sec)}
        >
          {sec.charAt(0).toUpperCase() + sec.slice(1)}
        </Button>
      ))}

      {/* REAL DARK MODE TOGGLE */}
      <Button
        variant="outline"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </Button>
    </nav>
  );
}
