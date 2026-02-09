'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Skill from "@/components/skill";
import Sidebar from "@/components/sidebar";
import { useScroll, motion } from 'framer-motion';

import {
  User,
  Mail,
  Github,
  Phone,
  MapPin,
  Book,
  Code,
  Layers,
  FolderGit2,
  GraduationCap,
  Languages
} from 'lucide-react';


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};
const iconAnim = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

// Projects data
const projects = [
  {
    img: '/images/uapms.jpg',
    title: 'University Appointment Management System',
    desc: 'A system for managing and scheduling appointments between students and university staff.',
  },
  {
    img: '/images/appointments.jpg',
    title: 'Appointment Booking System',
    desc: 'A web-based appointment booking platform with scheduling and management features.',
  },
];

// Skills data
const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'MongoDB',
  'Tailwind CSS',
  'Git & GitHub',
];

export default function Home() {
   const { scrollYProgress } = useScroll();
  return (
    
      
      <main className="min-h-screen bg-slate-100 px-4 py-10 relative">

      {/* SCROLL PROGRESS BAR */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-teal-600 origin-left z-50"
      />

      {/* PAGE GRID: LEFT CONTENT + RIGHT SIDEBAR */}
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-[1fr_320px] gap-10">
         <div className="space-y-16"></div>
      </div>
        {/* ================= LEFT CONTENT ================= */}
        <div className="bg-white rounded-xl shadow-md p-8 space-y-16">
    <Sidebar />

</div>


      {/* ABOUT */}
      <motion.section
        id="about"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-3xl"
      >
         <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2  text-teal-700"></h2>
          <motion.span variants={iconAnim}></motion.span>
            <Book size={22} /> about me 
             
        <p className="text-slate-600 leading-relaxed">
          Results-driven Junior Software Developer with hands-on experience designing, developing, and deploying full-stack web applications. Proficient in React.js, Next.js, Node.js, PHP, PostgreSQL, MongoDB, RESTful APIs, and responsive web design. Skilled in building scalable, maintainable, and user-friendly applications while adhering to software development best practices. Strong background in database design, system implementation, and debugging. Committed to delivering data-driven solutions, optimizing performance, and continuously learning emerging technologies in software development.
        </p>
      </motion.section>


{/* PROJECTS */}
<motion.section
 id="projects"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="space-y-6"
>
  <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-blue-700">
          <motion.span variants={iconAnim}>
            <Layers size={22} />
            </motion.span>
             Projects
          </h2>

  <div className="grid md:grid-cols-2 gap-8">

    {/* UAPMS */}
    <motion.div
      whileHover={{ y: -6 }}
      className="card p-6 space-y-4"
    >
      <Image
        src="/images/uapms.jpg"
        alt="University Academic Performance Management System"
        width={500}
        height={280}
        className="rounded-lg object-cover w-full h-44"
      />

      <div className="space-y-2">
        <h3 className="text-xl font-semibold">
          University Academic Performance Management System (UAPMS)
        </h3>

        <p className="text-sm text-slate-600">
          React.js · Node.js · PostgreSQL · Chart.js · PHP
        </p>

        <ul className="list-disc list-inside text-slate-600 text-sm space-y-1">
          <li>
            Developed a web-based academic tracking system centralizing GPA,
            attendance, course enrollment, and notifications.
          </li>
          <li>
            Built interactive dashboards displaying GPA trends, degree progression,
            and personalized alerts.
          </li>
          <li>
            Created backend services for GPA calculation, attendance monitoring,
            and course registration workflows.
          </li>
          <li>
            Integrated PostgreSQL for secure real-time student data storage and
            predictive analytics.
          </li>
          <li>
            Designed role-specific dashboards for students, lecturers,
            and administrators.
          </li>
        </ul>

        <a
          href="https://github.com/Joshcode41"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm font-medium text-blue-400 hover:underline"
        >
          View on GitHub →
        </a>
      </div>
    </motion.div>

    {/* APPOINTMENT SYSTEM */}
    <motion.div
      whileHover={{ y: -6 }}
      className="card p-6 space-y-4"
    >
      <Image
        src="/images/appointments.jpg"
        alt="Online Appointment Scheduling System"
        width={500}
        height={280}
        className="rounded-lg object-cover w-full h-44"
      />

      <div className="space-y-2">
        <h3 className="text-xl font-semibold">
          Online Appointment Scheduling System
        </h3>

        <p className="text-sm text-slate-600">
          PHP · MySQL · HTML · CSS · JavaScript
        </p>

        <ul className="list-disc list-inside text-slate-600 text-sm space-y-1">
          <li>
            Developed a full-stack web application for online appointment
            management with secure authentication and role-based access control.
          </li>
          <li>
            Implemented CRUD operations for appointments, users, and schedules.
          </li>
          <li>
            Built a responsive front-end interface optimized for desktop
            and mobile users.
          </li>
          <li>
            Integrated a MySQL database for efficient management of user
            and appointment data.
          </li>
          <li>
            Optimized performance to support 50+ concurrent users and used
            Git for version control.
          </li>
        </ul>

        <a
          href="https://github.com/Joshcode41"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm font-medium text-blue-400 hover:underline"
        >
          View on GitHub →
        </a>
      </div>
    </motion.div>

  </div>
</motion.section>


{/* EDUCATION */}
<motion.section
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="max-w-3xl space-y-4"
>
 <h2 className="text-3xl font-semibold flex items-center gap-2">
            <Book size={24} /> Education
          </h2>

  <div className="card p-6 space-y-4">
    <div>
      <h3 className="text-xl font-semibold">
        Bachelor of Business with Information Technology
      </h3>
      <p className="text-slate-300">
        Strathmore University, Nairobi, Kenya
      </p>
    </div>

    <div className="text-sm text-slate-400 space-y-1">
      <p>
        <span className="font-medium text-slate-300">
          Duration:
        </span>{" "}
        June 2023-June 2027
      </p>
      <p>
        <span className="font-medium text-slate-300">
          Year of Study:
        </span>{" "}
        3
      </p>
    </div>

    {/* ACHIEVEMENTS / CERTIFICATIONS */}
    <div>
      <h4 className="text-lg font-semibold mt-4 mb-2">
        Achievements & Certifications
      </h4>
      <ul className="list-disc list-inside text-slate-300 space-y-1">
        <li>Completed multiple full-stack academic and personal projects</li>
        <li>Strong academic focus on software development and systems design</li>
        <li>Hands-on experience with modern web technologies through coursework</li>
      </ul>
    </div>
  </div>
</motion.section>



     {/* RELEVANT COURSEWORK */}
<motion.section
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="max-w-3xl space-y-4"
>
 <h2 className="text-3xl font-semibold flex items-center gap-2"><Book size={24} /> Relevant Coursework</h2>

  <div className="card p-6">
    <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-slate-300 list-disc list-inside">
      <li>Web Application Development</li>
      <li>Database Management Systems</li>
      <li>Software Engineering Principles</li>
      <li>Object-Oriented Programming</li>
      <li>Systems Analysis & Design</li>
      <li>Information Systems Security</li>
    </ul>
  </div>
</motion.section>

{/* SKILLS */}
<motion.section
  id="skills"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="space-y-8"
>
  <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-purple-700">
    <motion.span variants={iconAnim}>
      <Code size={24} />
    </motion.span>
    Technical Skills
  </h2>

  <div className="grid md:grid-cols-2 gap-8">

    {/* PROGRAMMING LANGUAGES */}
    <div className="card p-6 space-y-4 bg-white rounded-xl shadow-md">
      <h3 className="text-xl font-semibold mb-2">Programming Languages</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-3">
        {[
          "PHP", "Java", "Python", "JavaScript", "TypeScript",
          "Kotlin", "C", "C++", "C#", "SQL"
        ].map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm text-center"
            title={skill}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* WEB & APPLICATION DEVELOPMENT */}
    <div className="card p-6 space-y-4 bg-white rounded-xl shadow-md">
      <h3 className="text-xl font-semibold mb-2">Web & Application Development</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-3">
        {[
          "HTML5","CSS3","Bootstrap","React.js","Node.js",
          "REST APIs","Responsive Web Design"
        ].map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded bg-slate-800/60 text-white text-sm text-center hover:bg-slate-700 transition"
            title={skill}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* DATABASES & CLOUD */}
    <div className="card p-6 space-y-4 bg-white rounded-xl shadow-md">
      <h3 className="text-xl font-semibold mb-2">Databases & Cloud</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-3">
        {["MySQL","PostgreSQL","Firebase","OracleDB","phpMyAdmin"].map(skill => (
          <span
            key={skill}
            className="px-3 py-1 rounded bg-slate-800/60 text-white text-sm text-center hover:bg-slate-700 transition"
            title={skill}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* TOOLS & PLATFORMS */}
    <div className="card p-6 space-y-4 bg-white rounded-xl shadow-md">
      <h3 className="text-xl font-semibold mb-2">Tools & Platforms</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-3">
        {[
          "Git","GitHub","GitLab","VS Code","NetBeans",
          "Android Studio","XAMPP","Draw.io","StarUML"
        ].map(skill => (
          <span
            key={skill}
            className="px-3 py-1 rounded bg-slate-800/60 text-white text-sm text-center hover:bg-slate-700 transition"
            title={skill}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

  </div>
</motion.section>



        
      {/* LANGUAGES */}
      <div className="space-y-16">
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-3xl"
      >
        <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
            <Book size={24} /> Languages
          </h2>
        <ul className="list-disc list-inside text-slate-300 space-y-2">
          <li>English – Fluent</li>
          <li>Swahili – Fluent</li>
        </ul>
      </motion.section>
</div>
    <div>
      {/* FOOTER */}
      <footer className="pt-10 border-t text-sm text-slate-400 text-center">
        © {new Date().getFullYear()} Joshua Owuonda. All rights reserved.
      </footer>
      
      </div>

       sss

    </main>
  );
  
}
