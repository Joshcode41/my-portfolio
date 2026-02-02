"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Sun,
  Moon,
  User,
  GraduationCap,
  Wrench,
  FolderGit2,
  Mail,
  Github,
} from "lucide-react";

// Shadcn UI
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Custom Components
import SkillBadge from "@/components/SkillBadge";
import ContactForm from "@/components/ContactForm";

// Styles
import styles from "./page.module.css";

export default function Home() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  /* ================= SKILLS ================= */
  const frontEndTools = [
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Tailwind CSS",
    "React.js",
    "Responsive Web Design",
  ];

  const backEndTools = [
    "Node.js",
    "PHP",
    "MySQL",
    "PostgreSQL",
    "Firebase",
    "REST API Integration",
  ];

  const programmingLanguages = [
    "Java",
    "Python",
    "SQL",
    "JavaScript",
    "TypeScript",
    "Kotlin",
    "C",
    "C++",
    "C#",
  ];

  return (
    <main className={styles.container} id="home">
      {/* ================= THEME TOGGLE ================= */}
      <div
        className={styles.themeToggle}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
      </div>

      {/* ================= HERO ================= */}
      <motion.section
        className={styles.hero}
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.heroText}>
          <h1>Joshua Owuonda</h1>
          <p>Junior Software Developer</p>
          <p>0100 — Nairobi, Kenya</p>

          <div className={styles.heroButtons}>
            <Button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Me
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                window.open("/Joshua_Owuonda_CV.pdf", "_blank")
              }
            >
              Download CV
            </Button>
          </div>
        </div>

        <img
          src="/profile.png"
          alt="Joshua Owuonda"
          className={styles.profileImage}
        />
      </motion.section>

      {/* ================= ABOUT ME ================= */}
      <motion.section
        id="about"
        className={styles.card}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>
          <User size={20} /> About Me
        </h2>
        <p>
          Detail-oriented IT undergraduate seeking an internship in Software or
          Web Development. Skilled in full-stack development, database design,
          and system implementation. Proficient in React.js, Node.js, PHP,
          PostgreSQL, REST APIs, and responsive web design. Committed to
          delivering data-driven solutions and continuous learning.
        </p>
      </motion.section>

      {/* ================= EDUCATION ================= */}
      <motion.section
        className={styles.card}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>
          <GraduationCap size={20} /> Education
        </h2>
        <p>
          <strong>Bachelor of Business with Information Technology</strong> —
          Strathmore University, Nairobi, Kenya
        </p>
        <p>June 2023 - June 2027 | Year of Study: 3</p>
      </motion.section>

      {/* ================= RELEVANT COURSEWORK ================= */}
      <motion.section
        className={styles.card}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Relevant Coursework</h2>
        <ul>
          <li>Software Engineering</li>
          <li>Database Management Systems</li>
          <li>Object-Oriented Programming</li>
          <li>Web Application Development</li>
          <li>Systems Analysis and Design</li>
        </ul>
      </motion.section>

      {/* ================= TECHNICAL SKILLS ================= */}
      <motion.section
        id="skills"
        className={`${styles.skills} ${styles.card}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>
          <Wrench size={20} /> Technical Skills
        </h2>

        <TooltipProvider>
          <h3>Front-End Development</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {frontEndTools.map((tool) => (
              <Tooltip key={tool}>
                <TooltipTrigger>
                  <SkillBadge skill={tool} />
                </TooltipTrigger>
                <TooltipContent>{tool}</TooltipContent>
              </Tooltip>
            ))}
          </div>

          <h3>Back-End Development</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {backEndTools.map((tool) => (
              <Tooltip key={tool}>
                <TooltipTrigger>
                  <SkillBadge skill={tool} />
                </TooltipTrigger>
                <TooltipContent>{tool}</TooltipContent>
              </Tooltip>
            ))}
          </div>

          <h3>Programming Languages</h3>
          <div className="flex flex-wrap gap-2">
            {programmingLanguages.map((lang) => (
              <Tooltip key={lang}>
                <TooltipTrigger>
                  <SkillBadge skill={lang} />
                </TooltipTrigger>
                <TooltipContent>{lang}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      </motion.section>

      {/* ================= PROJECTS ================= */}
      <motion.section
        id="projects"
        className={styles.card}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>
          <FolderGit2 size={20} /> Projects
        </h2>

        <div className={styles.projectGrid}>
          {/* ===== PROJECT 1 ===== */}
          <Card className={styles.projectCard}>
            <img src="/uapms.png" alt="UAPMS Project" />
            <h3>University Academic Performance Management System (UAPMS)</h3>
            <p className={styles.techStack}>
              React.js | Node.js | PostgreSQL | Chart.js | PHP
            </p>
            <ul>
              <li>
                Developed a web-based academic tracking system centralizing GPA,
                attendance, course enrollment, and notifications.
              </li>
              <li>
                Built interactive dashboards with GPA trends, degree
                progression, and personalized alerts.
              </li>
              <li>
                Created backend services for GPA calculation, attendance
                monitoring, and course registration workflows.
              </li>
              <li>
                Integrated PostgreSQL database for secure real-time student data
                storage and predictive analytics.
              </li>
              <li>
                Designed role-specific dashboards for students, lecturers, and
                administrators.
              </li>
            </ul>
            <a href="https://github.com/Joshcode41" target="_blank">
              <Github size={18} /> GitHub
            </a>
          </Card>

          {/* ===== PROJECT 2 ===== */}
          <Card className={styles.projectCard}>
            <img src="/appointments.png" alt="Appointment System Project" />
            <h3>Online Appointment Scheduling System</h3>
            <p className={styles.techStack}>
              PHP | MySQL | HTML | CSS | JavaScript
            </p>
            <ul>
              <li>
                Developed a full-stack application for online appointment
                management with secure authentication and role-based access
                control.
              </li>
              <li>
                Implemented CRUD operations for appointments, users, and
                schedules.
              </li>
              <li>
                Built a responsive front-end interface for desktop and mobile
                users.
              </li>
              <li>
                Integrated a MySQL database for efficient management of user and
                appointment data.
              </li>
              <li>
                Optimized performance to support 50+ concurrent users, using Git
                for version control.
              </li>
            </ul>
            <a href="https://github.com/Joshcode41" target="_blank">
              <Github size={18} /> GitHub
            </a>
          </Card>
        </div>
      </motion.section>

      {/* ================= CONTACT ================= */}
      <motion.section
        id="contact"
        className={styles.card}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>
          <Mail size={20} /> Contact & Availability
        </h2>
        <p>Available for internship, attachment, or entry-level IT roles</p>
        <p>
          Phone: +254 799 732 318 | Email: joshuaowuonda41@gmail.com
        </p>

        <ContactForm />

        <div className={styles.socialLinks}>
          <a href="https://github.com/Joshcode41" target="_blank">
            GitHub
          </a>
          <a href="https://linkedin.com/in/joshuaowuonda" target="_blank">
            LinkedIn
          </a>
          <a href="https://twitter.com/joshuaowuonda" target="_blank">
            Twitter
          </a>
        </div>
      </motion.section>

      <footer className={styles.footer}>
        © {new Date().getFullYear()} Joshua Owuonda. All rights reserved.
      </footer>
    </main>
  );
}
