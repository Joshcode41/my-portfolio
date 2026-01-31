"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function Home() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <main className="container">
      {/* THEME TOGGLE */}
      <div className="themeToggle" onClick={() => setDark(!dark)}>
        {dark ? <Sun /> : <Moon />}
      </div>

      {/* HERO + BIO */}
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="bio">
          <div>
            <h1>Joshua Owuonda</h1>
            <p>Junior Software Developer </p>
            <p> 0100 Nairobi, Kenya</p>
            

            <div className="buttons">
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact Me
              </button>

              <button
                onClick={() =>
                  window.open("/Joshua_Owuonda_CV.pdf", "_blank")
                }
              >
                Download CV
              </button>
            </div>
          </div>

          <img src="/images/profile.jpg" alt="Joshua Owuonda" className="profileImage" />
        </div>
      </motion.section>

      {/* PROFESSIONAL SUMMARY */}
      <section>
        <h2>Professional Summary</h2>
        <p>
          Detail-oriented IT undergraduate seeking an internship in Software or Web Development.
          Skilled in full-stack development, database design, and system implementation.
          Proficient in React.js, Node.js, PHP, PostgreSQL, REST APIs, and responsive web design.
          Committed to delivering data-driven solutions and continuous learning.
        </p>
      </section>

      {/* EDUCATION */}
      <section>
        <h2>Education</h2>
        <p><strong>Bachelor of Business with Information Technology</strong></p>
        <p>Strathmore University, Nairobi, Kenya</p>
        <p>Expected Graduation: June 2027 | Year of Study: 3</p>
      </section>

      {/* COURSEWORK */}
      <section>
        <h2>Relevant Coursework</h2>
        <ul>
          <li>Software Engineering</li>
          <li>Database Management Systems</li>
          <li>Object-Oriented Programming</li>
          <li>Web Application Development</li>
          <li>Systems Analysis and Design</li>
        </ul>
      </section>

      {/* TECHNICAL SKILLS */}
      <section>
        <h2>Technical Skills</h2>
        <ul>
          <li>Programming Languages: PHP, Java, Python, SQL, JavaScript, TypeScript, Kotlin, C, C++, C#</li>
          <li>Web & Application Development: HTML5, CSS3, Bootstrap, React.js, Node.js, REST APIs</li>
          <li>Databases & Cloud: MySQL, PostgreSQL, Firebase, OracleDB, phpMyAdmin</li>
          <li>Tools & Platforms: Git, GitHub, GitLab, VS Code, NetBeans, Android Studio, XAMPP</li>
          <li>Systems & Networking: Basic networking, system configuration, troubleshooting</li>
        </ul>
      </section>

      {/* PROJECTS */}
      <section>
        <h2>Projects</h2>

        <div className="project">
          <h3>University Academic Performance Management System (UAPMS)</h3>
          <p>React.js | Node.js | PostgreSQL | Chart.js | PHP</p>
          <ul>
            <li>Developed a web-based academic tracking system centralizing GPA, attendance, course enrollment, and notifications.</li>
            <li>Built interactive dashboards with GPA trends and personalized alerts.</li>
            <li>Created backend services for GPA calculation and course registration workflows.</li>
            <li>Integrated PostgreSQL for secure real-time data storage and analytics.</li>
            <li>Designed role-specific dashboards for students, lecturers, and administrators.</li>
          </ul>
          <img src="/images/uapms.jpg" alt="UAPMS project" />
        </div>

        <div className="project">
          <h3>Online Appointment Scheduling System</h3>
          <p>PHP | MySQL | HTML | CSS | JavaScript</p>
          <ul>
            <li>Developed a full-stack appointment management system with authentication.</li>
            <li>Implemented CRUD operations for users and schedules.</li>
            <li>Built a responsive interface for desktop and mobile users.</li>
            <li>Integrated MySQL for efficient data management.</li>
            <li>Optimized performance to support 50+ concurrent users.</li>
          </ul>
          <img src="/images/appointments.jpg" alt="Appointment system project" />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <h2>Contact</h2>
        <p>Phone: +254 799 732 318</p>
        <p>Email: joshuaowuonda41@gmail.com</p>

        <div className="socials">
          <a href="https://github.com/Joshcode41" target="_blank">GitHub</a>
          <a href="https://linkedin.com" target="_blank">LinkedIn</a>
        </div>
      </section>

      <footer>
        © {new Date().getFullYear()} Joshua Owuonda. All rights reserved.
      </footer>
    </main>
  );
}
