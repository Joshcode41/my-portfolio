"use client";

import { motion } from "framer-motion";
import {
  User,
  GraduationCap,
  Wrench,
  FolderGit2,
  Mail,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SkillBadge from "@/components/SkillBadge";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

  const fadeVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6,  ease: [0.16, 1, 0.3, 1]},
    },
  };


export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
       

      

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 gap-12 overflow-hidden"
      


      >
        <div className="absolute top-24 left-10 w-24 h-24 bg-blue-400/20 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/20 rounded-full blur-xl" />

        <motion.div
          className="md:w-1/2 space-y-4 text-center md:text-left"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
           
        >
          <h1 className="text-4xl md:text-6xl font-bold">Joshua Owuonda</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Junior Software Developer
          </p>
          <p className="text-gray-500">Nairobi, Kenya</p>

          <div className="flex gap-4 justify-center md:justify-start mt-4">
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

          <div className="flex gap-4 justify-center md:justify-start mt-6">
            <Button variant="ghost" aria-label="GitHub">
              <Github />
            </Button>
            <Button variant="ghost" aria-label="LinkedIn">
              <Linkedin />
            </Button>
            <Button variant="ghost" aria-label="Twitter">
              <Twitter />
            </Button>
          </div>
        </motion.div>

        <motion.img
          src="/image/profile.jpg"
          alt="Joshua Owuonda"
          loading="lazy"
          className="
    w-40 h-40
    sm:w-48 sm:h-48
    md:w-60 md:h-60
    lg:w-64 lg:h-64
    rounded-full
    object-cover
    border-4 border-gray-200 dark:border-gray-700
    shadow-lg
  "
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          
        />
      </section>

      {/* ================= ABOUT ================= */}
      <motion.section
        id="about"
        className="max-w-4xl mx-auto px-6 py-16"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        
      >
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <User size={20} /> About Me
        </h2>
        <p className="mt-4">
          Detail-oriented IT undergraduate seeking an internship in Software or Web
          Development. Skilled in full-stack development, database design, and
          system implementation with a strong foundation in modern web
          technologies.
        </p>
      </motion.section>

      {/* ================= EDUCATION ================= */}
      <motion.section
        className="max-w-4xl mx-auto px-6 py-12"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
         
      >
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <GraduationCap size={20} /> Education
        </h2>
        <p className="mt-2 font-semibold">
          Bachelor of Business with Information Technology
        </p>
        <p>Strathmore University, Nairobi</p>
        <p>2023 – 2027</p>
      </motion.section>

      {/* ================= SKILLS ================= */}
      <motion.section
        id="skills"
        className="max-w-5xl mx-auto px-6 py-16"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
         
      >
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Wrench size={20} /> Technical Skills
        </h2>

        {[
          {
            title: "Front-End Development",
            skills: ["HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "React.js"],
          },
          {
            title: "Back-End Development",
            skills: ["Node.js", "PHP", "PostgreSQL", "MySQL", "Firebase"],
          },
          {
            title: "Programming Languages",
            skills: [
              "Java",
              "Python",
              "JavaScript",
              "TypeScript",
              "C",
              "C++",
              "C#",
              "Kotlin",
            ],
          },
        ].map((group) => (
          <Card
            key={group.title}
            className="mt-6 p-6 hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            <h3 className="font-semibold mb-3">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </Card>
        ))}
      </motion.section>

      {/* ================= PROJECTS ================= */}
      <motion.section
        id="projects"
        className="max-w-5xl mx-auto px-6 py-16"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
         
      >
        <h2 className="text-2xl font-semibold flex items-center gap-2 mb-8">
          <FolderGit2 size={20} /> Projects
        </h2>

        {/* Project 1 */}
        <Card className="p-6 mb-8 hover:shadow-xl transition">
          <img
            src="/image/uapms.jpg"
            alt="UAPMS Project"
            loading="lazy"
            className="w-full max-h-64 object-cover rounded-md mb-4"
             
          />

          <h3 className="font-semibold text-lg">
            University Academic Performance Management System (UAPMS)
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            React.js | Node.js | PostgreSQL | Chart.js | PHP
          </p>

          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>
              Developed a web-based academic tracking system centralizing GPA,
              attendance, course enrollment, and notifications.
            </li>
            <li>
              Built interactive dashboards with GPA trends, degree progression,
              and personalized alerts.
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

          <a
            href="https://github.com/Joshcode41"
            target="_blank"
            className="inline-flex items-center gap-2 mt-4 text-sm text-blue-600 hover:underline"
          >
            <Github size={16} /> View on GitHub
          </a>
        </Card>

        {/* Project 2 */}
        <Card className="p-6 hover:shadow-xl transition">
          <img
            src="/image/appointments.jpg"
            alt="Appointment Scheduling System"
            loading="lazy"
            className="w-full max-h-64 object-cover rounded-md mb-4"
            
          />

          <h3 className="font-semibold text-lg">
            Online Appointment Scheduling System
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            PHP | MySQL | HTML | CSS | JavaScript
          </p>

          <ul className="list-disc list-inside mt-4 space-y-2">
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
              Optimized performance to support 50+ concurrent users using Git
              for version control.
            </li>
          </ul>

          <a
            href="https://github.com/Joshcode41"
            target="_blank"
            className="inline-flex items-center gap-2 mt-4 text-sm text-blue-600 hover:underline"
          >
            <Github size={16} /> View on GitHub
          </a>
        </Card>
      </motion.section>

      {/* LANGUAGES */}
<motion.section
  id="languages"
  className="max-w-4xl mx-auto px-6 py-12"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.2 }}

>
  <h2 className="text-2xl font-semibold mb-4">Languages</h2>

  <div className="grid sm:grid-cols-2 gap-4">
    <div className="p-4 rounded-lg border bg-white dark:bg-gray-800 dark:border-gray-700">
      <p className="font-semibold">English</p>
      <p className="text-sm text-gray-600 dark:text-gray-400">Fluent</p>
    </div>

    <div className="p-4 rounded-lg border bg-white dark:bg-gray-800 dark:border-gray-700">
      <p className="font-semibold">Kiswahili</p>
      <p className="text-sm text-gray-600 dark:text-gray-400">Fluent</p>
    </div>
  </div>
</motion.section>


      {/* ================= CONTACT ================= */}
      <motion.section
        id="contact"
        className="max-w-4xl mx-auto px-6 py-16"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
         
      >
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Mail size={20} /> Contact
        </h2>
        <p className="mt-2">Email: joshuaowuonda41@gmail.com</p>
        <p>Phone: +254 799 732 318</p>
        <ContactForm />
      </motion.section>

      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Joshua Owuonda
      </footer>
    </main>
  );
}
