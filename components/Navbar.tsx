"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import styles from "./Navbar.module.css";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "soft-skills", label: "Soft Skills" },
  { id: "languages", label: "Languages" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + 150;
      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (
          el &&
          el.offsetTop <= scrollPos &&
          el.offsetTop + el.offsetHeight > scrollPos
        ) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={styles.navbar}>
      {sections.map(({ id, label }) => (
        <Button
          key={id}
          onClick={() => handleScroll(id)}
          className={active === id ? styles.active : ""}
        >
          {label}
        </Button>
      ))}
    </nav>
  );
}
