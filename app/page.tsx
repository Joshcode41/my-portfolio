"use client";

import { useEffect, useState } from "react";
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

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SkillBadge from "@/components/SkillBadge";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";

export default function Home() {


 

  // Fade animation variants
  const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Skills
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
    "JavaScript",
    "TypeScript",
    "SQL",
    "C",
    "C++",
    "C#",
    "Kotlin",
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section
        id="home"
        className="relative flex flex-col items-center justify-center text-center px-6 py-16"
      >
        <img
          src="/image/profile.jpg"
          alt="Joshua Owuonda"
          className="w-32 h-32 rounded-full mb-6"
        />
        <h1 className="text-4xl font-bold mb-2">Joshua Owuonda</h1>
        <p className="text-lg mb-4">Junior Software Developer</p>
        <p className="mb-6">0100-Nairobi, Kenya</p>

        <div className="flex gap-4 flex-wrap justify-center">
          
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
            onClick={() => window.open("/Joshua_Owuonda_CV.pdf", "_blank")}
          >
            Download CV
          </Button>
        </div>
      </section>

      {/* ABOUT */}
      <motion.section
        id="about"
        className="max-w-4xl mx-auto px-6 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeVariants}
      >
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <User size={20} /> About Me
        </h2>
        <p className="mt-4">
          Detail-oriented IT undergraduate seeking an internship in Software or Web
          Development. Skilled in full-stack development, database design, and
          system implementation. Proficient in React.js, Node.js, PHP, PostgreSQL,
          REST APIs, and responsive web design. Committed to delivering data-driven
          solutions and continuous learning.
        </p>
      </motion.section>

      {/* EDUCATION */}
      <motion.section
        id="education"
        className="max-w-4xl mx-auto px-6 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeVariants}
      >
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <GraduationCap size={20} /> Education
        </h2>
        <p className="mt-2 font-semibold">Bachelor of Business with Information Technology</p>
        <p>Strathmore University, Nairobi, Kenya</p>
        <p>June 2023 - June 2027 | Year of Study: 3</p>
      </motion.section>

      {/* COURSEWORK */}
      <motion.section
        id="coursework"
        className="max-w-4xl mx-auto px-6 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeVariants}
      >
        <h2 className="text-2xl font-semibold">Relevant Coursework</h2>
        <ul className="list-disc list-inside mt-4 space-y-1">
          <li>Software Engineering</li>
          <li>Database Management Systems</li>
          <li>Object-Oriented Programming</li>
          <li>Web Application Development</li>
          <li>Systems Analysis and Design</li>
        </ul>
      </motion.section>

      {/* TECHNICAL SKILLS */}
      <motion.section
        id="skills"
        className="max-w-4xl mx-auto px-6 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeVariants}
      >
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Wrench size={20} /> Technical Skills
        </h2>

        <div className="mt-6">
          <h3 className="font-semibold mb-2">Front-End Development</h3>
          <div className="flex flex-col gap-2">
            {frontEndTools.map((tool) => (
              <SkillBadge key={tool} skill={tool} />
            ))}
          </div>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold mb-2">Back-End Development</h3>
          <div className="flex flex-col gap-2">
            {backEndTools.map((tool) => (
              <SkillBadge key={tool} skill={tool} />
            ))}
          </div>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold mb-2">Programming Languages</h3>
          <div className="flex flex-col gap-2">
            {programmingLanguages.map((lang) => (
              <SkillBadge key={lang} skill={lang} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* SOFT SKILLS */}
      <motion.section
        id="soft-skills"
        className="max-w-4xl mx-auto px-6 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeVariants}
      >
        <h2 className="text-2xl font-semibold">Soft Skills</h2>
        <ul className="list-disc list-inside mt-4 space-y-1">
          <li>Problem-solving & analytical thinking</li>
          <li>Team collaboration & communication</li>
          <li>Time management & adaptability</li>
          <li>Initiative & eagerness to learn</li>
        </ul>
      </motion.section>

      {/* LANGUAGES */}
      <motion.section
        id="languages"
        className="max-w-4xl mx-auto px-6 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeVariants}
      >
        <h2 className="text-2xl font-semibold">Languages</h2>
        <ul className="list-disc list-inside mt-4 space-y-1">
          <li>English – Fluent</li>
          <li>Kiswahili – Fluent</li>
        </ul>
      </motion.section>

      {/* PROJECTS */}
      <motion.section
        id="projects"
        className="max-w-5xl mx-auto px-6 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeVariants}
      >
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <FolderGit2 size={20} /> Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">

          <Card>
            <img src="/image/uapms.jpg" alt="UAPMS Project" className="rounded-md mb-3" />
            <h3 className="font-semibold">
              University Academic Performance Management System (UAPMS)
            </h3>
            <p className="text-sm mt-1">React.js | Node.js | PostgreSQL | Chart.js | PHP</p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Developed a web-based academic tracking system centralizing GPA, attendance, course enrollment, and notifications.</li>
              <li>Built interactive dashboards with GPA trends, degree progression, and personalized alerts.</li>
              <li>Created backend services for GPA calculation, attendance monitoring, and course registration workflows.</li>
              <li>Integrated PostgreSQL database for secure real-time student data storage and predictive analytics.</li>
              <li>Designed role-specific dashboards for students, lecturers, and administrators.</li>
            </ul>
            <a href="https://github.com/Joshcode41" target="_blank" className="inline-flex items-center gap-2 mt-3">
              <Github size={16} /> GitHub
            </a>
          </Card>

          <Card>
            <img src="/image/appointments.jpg" alt="Appointment System Project" className="rounded-md mb-3" />
            <h3 className="font-semibold">Online Appointment Scheduling System</h3>
            <p className="text-sm mt-1">PHP | MySQL | HTML | CSS | JavaScript</p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Developed a full-stack application for online appointment management with secure authentication and role-based access control.</li>
              <li>Implemented CRUD operations for appointments, users, and schedules.</li>
              <li>Built a responsive front-end interface for desktop and mobile users.</li>
              <li>Integrated a MySQL database for efficient management of user and appointment data.</li>
              <li>Optimized performance to support 50+ concurrent users, using Git for version control.</li>
            </ul>
            <a href="https://github.com/Joshcode41" target="_blank" className="inline-flex items-center gap-2 mt-3">
              <Github size={16} /> GitHub
            </a>
          </Card>

        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section
        id="contact"
        className="max-w-4xl mx-auto px-6 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeVariants}
      >
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Mail size={20} /> Contact
        </h2>
        <p className="mt-2">Phone: +254 799 732 318</p>
        <p>Email: joshuaowuonda41@gmail.com</p>
        <ContactForm />
      </motion.section>

      <footer className="text-center py-6 mt-12">
        © {new Date().getFullYear()} Joshua Owuonda
      </footer>
    </main>
  );
}
