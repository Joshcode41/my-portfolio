"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Sun, Moon } from "lucide-react"; // icon import
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
        if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
          setActive(sec);
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} fixed w-full bg-white dark:bg-gray-900 z-50 py-2 px-6 flex justify-between items-center shadow`}>
      <div className="flex gap-3">
        {["home", "about", "skills", "projects", "contact"].map((sec) => (
          <Button
            key={sec}
            variant={active === sec ? "default" : "outline"}
            onClick={() => handleScroll(sec)}
            className="capitalize px-4 py-2 rounded-md"
          >
            {sec}
          </Button>
        ))}
      </div>
      <Button
        variant="outline"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 rounded-full"
      >
        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
      </Button>
    </nav>
  );
}
