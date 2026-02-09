'use client';

import Image from 'next/image';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useActiveSection } from '@/hooks/useActiveSection';


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Sidebar() {

     const active = useActiveSection([
    'about',
    'skills',
    'projects',
    'education',
  ]);

  return (
    <aside className="w-full md:w-80 bg-slate-900 p-6 rounded-2xl shadow-lg md:sticky md:top-6 flex flex-col h-[calc(100vh-48px)] overflow-y-auto">
      
    {/* Profile Image (Floating Over Hero with Hover Glow) */}
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.7 }}
  className="flex flex-col items-center space-y-4"
>
  <div className="relative group">
    {/* Halo / Shadow effect */}
   <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-xl scale-100 group-hover:scale-110 transition-transform duration-500 -z-10"></div>
    
    <Image
      src="/images/profile.jpg"
      alt="Joshua Owuonda"
      width={160}
      height={160}
      className="rounded-full object-cover border-4 border-slate-700 shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
      priority
    />
  </div>
</motion.div>


      {/* Hero Info */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
        className="text-center space-y-4 mt-20"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-center">Joshua Owuonda</h1>
        <p className="text-sm md:text-base text-slate-600 text-center">
          Junior Software Engineer 
        </p>
        <div className="flex items-center justify-center gap-2 text-slate-300">
          <MapPin size={16} /> Nairobi, Kenya
        </div>
        <div className="flex flex-col w-full space-y-2 mt-2">
          <Button asChild className="w-full">
            <a href="mailto:joshuaowuonda41@gmail.com">Contact Me</a>
          </Button>
          <Button variant="outline" asChild className="w-full">
            <a
              href="/Joshua_Owuonda_CV.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </Button>
        </div>
      
     <div className="text-xs text-center mt-4 text-slate-300">
          <p>Fun Fact:</p>
          <p>I'm from Nairobi — but my code runs everywhere.</p>
        </div>
      </motion.div>

     {/* Section Navigation */}
      <nav className="mt-8 space-y-2 w-full">
        {[
          { id: 'about', label: 'Career Profile' },
          { id: 'skills', label: 'Skills' },
          { id: 'projects', label: 'Projects' },
          { id: 'education', label: 'Education' },
        ].map(item => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`
              block px-4 py-2 rounded-lg transition  w-full text-center
              ${
                active === item.id
                  ? 'bg-white/20 font-semibold'
                  : 'hover:bg-white/10'
              }
            `}
          >
            {item.label}
          </a>
        ))}
      </nav>


      {/* Contact & Social Links (Scrollable) */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full  mt-6"
      >
        <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>

        <div className="flex flex-col space-y-2">
          <a
            href="mailto:joshuaowuonda41@gmail.com"
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <Mail size={18} /> joshuaowuonda41@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/joshuaowuonda/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <Linkedin size={18} /> Joshua Owuonda
          </a>

          <a
            href="https://github.com/Joshcode41"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <Github size={18} /> Joshcode41
          </a>

          <a
            href="https://twitter.com/JoshuaOwuonda"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <Twitter size={18} /> @JoshuaOwuonda
          </a>

          <a
            href="https://wa.me/254799732318"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-green-400 transition"
          >
            <Phone size={18} /> +254 799 732 318
          </a>
        </div>
      </motion.div>
    </aside>
  );
}
