import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiLeetcode, SiReact, SiMongodb, SiCplusplus, SiPython, SiTailwindcss, SiJavascript } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';


const floatingIcons = [
  { Icon: SiReact, className: 'top-12 left-10 text-cyan-400', delay: 0 },
  { Icon: FaNodeJs, className: 'top-1/4 right-12 text-green-500', delay: 1 },
  { Icon: SiMongodb, className: 'bottom-20 left-16 text-emerald-600', delay: 2 },
  { Icon: SiCplusplus, className: 'bottom-1/3 right-16 text-blue-600', delay: 1.5 },
  { Icon: SiPython, className: 'top-16 right-1/3 text-yellow-500', delay: 0.5 },
  { Icon: SiTailwindcss, className: 'bottom-12 left-1/3 text-teal-400', delay: 2.5 },
  { Icon: SiJavascript, className: 'bottom-1/4 left-1/4 text-yellow-400', delay: 0.8 },
];

export default function Hero() {
  const typedEl = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: [
        'Full Stack MERN Developer',
        'AI Enthusiast',
        'Problem Solver',
        'Open Source Contributor'
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-light-bg dark:bg-dark-bg transition-colors"
    >
      {/* Background Glowing Blurs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-brand-purple/20 dark:bg-brand-purple/10 blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-brand-cyan/20 dark:bg-brand-cyan/10 blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Grid Overlay background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0" />

      {/* Floating Tech Icons in Background */}
      <div className="hidden lg:block absolute inset-0 z-10 pointer-events-none">
        {floatingIcons.map(({ Icon, className, delay }, index) => (
          <motion.div
            key={index}
            className={`absolute p-3 rounded-2xl bg-white/40 dark:bg-dark-card/40 border border-gray-200/50 dark:border-white/5 shadow-md glassmorphism text-2xl ${className}`}
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: delay,
            }}
          >
            <Icon />
          </motion.div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="max-w-5xl mx-auto px-6 relative z-20 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-brand-cyan/10 dark:bg-brand-cyan/5 border border-brand-cyan/20 text-brand-cyan shadow-sm animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan inline-block" />
            Open for opportunities
          </span>
        </motion.div>

        {/* Hello Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-gray-600 dark:text-gray-400 font-medium text-lg md:text-xl mb-2"
        >
          Hi there, my name is
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 font-display"
        >
          <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Shriyam Rastogi
          </span>
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-2xl md:text-4xl font-bold font-display text-gray-800 dark:text-gray-200 mb-8 h-10 md:h-12 flex items-center justify-center gap-2"
        >
          I am a <span ref={typedEl} className="text-brand-cyan font-bold" />
        </motion.h2>

        {/* Description paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-2xl text-gray-600 dark:text-gray-400 text-base md:text-lg mb-10 leading-relaxed"
        >
          I specialize in building robust, performant web applications using the MERN stack. Currently exploring AI integrations to build next-generation smart dev tools.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 mb-12 w-full justify-center items-center"
        >
          <button
            onClick={() => handleScrollTo('projects')}
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-brand-purple to-brand-cyan hover:opacity-90 text-white font-semibold rounded-2xl shadow-lg hover:shadow-brand-purple/20 transition-all flex items-center justify-center gap-2 cursor-pointer group hover:-translate-y-0.5"
          >
            View Projects 
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={() => handleScrollTo('contact')}
            className="w-full sm:w-auto px-8 py-3.5 bg-white/60 dark:bg-dark-card/60 text-gray-850 dark:text-white font-semibold rounded-2xl border border-gray-250 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-gray-800/60 transition-all flex items-center justify-center gap-2 shadow-sm hover:-translate-y-0.5 glassmorphism cursor-pointer"
          >
            Hire Me
          </button>

          <a
            href="/resume.pdf"
            download="Shriyam_Rastogi_Resume.pdf"
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent text-gray-700 dark:text-gray-300 font-semibold rounded-2xl border border-dashed border-gray-300 dark:border-gray-700 hover:border-brand-purple hover:text-brand-purple dark:hover:text-brand-cyan transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            Resume <FiDownload />
          </a>
        </motion.div>

        {/* Social Profiles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="flex items-center gap-6"
        >
          <a
            href="https://github.com/Shriyam2k3"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-xl bg-white/50 dark:bg-dark-card/50 border border-gray-200/50 dark:border-white/5 text-gray-700 dark:text-gray-300 hover:text-brand-purple dark:hover:text-brand-cyan hover:scale-110 shadow-sm hover:shadow-md transition-all glassmorphism"
            aria-label="GitHub"
          >
            <FiGithub size={22} />
          </a>
          <a
            href="https://linkedin.com/in/shriyam-rastogi-250857280"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-xl bg-white/50 dark:bg-dark-card/50 border border-gray-200/50 dark:border-white/5 text-gray-700 dark:text-gray-300 hover:text-brand-purple dark:hover:text-brand-cyan hover:scale-110 shadow-sm hover:shadow-md transition-all glassmorphism"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={22} />
          </a>
          <a
            href="https://leetcode.com/u/Shriyam2k3/"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-xl bg-white/50 dark:bg-dark-card/50 border border-gray-200/50 dark:border-white/5 text-gray-700 dark:text-gray-300 hover:text-brand-purple dark:hover:text-brand-cyan hover:scale-110 shadow-sm hover:shadow-md transition-all glassmorphism"
            aria-label="LeetCode"
          >
            <SiLeetcode size={22} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
