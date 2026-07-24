import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle button visibility
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-12 bg-gray-50 dark:bg-dark-bg border-t border-light-border dark:border-dark-border text-gray-600 dark:text-gray-400 transition-colors">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo and short bio */}
        <div className="text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-brand-purple to-brand-cyan flex items-center justify-center text-white font-bold text-sm font-display">
              SR
            </div>
            <span className="font-display font-bold text-lg text-gray-950 dark:text-white">
              Shriyam Rastogi
            </span>
          </div>
          <p className="text-xs text-gray-400 max-w-xs leading-normal">
            Full Stack Developer specialized in React, Node.js, and crafting intelligent web solutions.
          </p>
        </div>

        {/* Quick Social profiles links */}
        <div className="flex gap-4">
          <a
            href="https://github.com/Shriyam2k3"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-white dark:bg-dark-card/50 border border-gray-200/50 dark:border-white/5 text-gray-600 dark:text-gray-400 hover:text-brand-purple dark:hover:text-brand-cyan transition-all hover:scale-105"
            aria-label="GitHub"
          >
            <FiGithub size={18} />
          </a>
          <a
            href="https://linkedin.com/in/shriyam-rastogi-250857280"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-white dark:bg-dark-card/50 border border-gray-200/50 dark:border-white/5 text-gray-600 dark:text-gray-400 hover:text-brand-purple dark:hover:text-brand-cyan transition-all hover:scale-105"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={18} />
          </a>
          <a
            href="https://leetcode.com/u/Shriyam2k3/"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-white dark:bg-dark-card/50 border border-gray-200/50 dark:border-white/5 text-gray-600 dark:text-gray-400 hover:text-brand-purple dark:hover:text-brand-cyan transition-all hover:scale-105"
            aria-label="LeetCode"
          >
            <SiLeetcode size={18} />
          </a>
          <a
            href="mailto:shriyam.rastogi2003@gmail.com"
            className="p-2.5 rounded-xl bg-white dark:bg-dark-card/50 border border-gray-200/50 dark:border-white/5 text-gray-600 dark:text-gray-400 hover:text-brand-purple dark:hover:text-brand-cyan transition-all hover:scale-105"
            aria-label="Email"
          >
            <FiMail size={18} />
          </a>
        </div>

        {/* Copyright notice */}
        <div className="text-center md:text-right text-xs text-gray-450 dark:text-gray-500 font-medium">
          <p>© {new Date().getFullYear()} Shriyam Rastogi.</p>
          <p className="mt-1">All rights reserved.</p>
        </div>
      </div>

      {/* Floating Back to Top button with circular progress */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-white dark:bg-dark-card border border-gray-250 dark:border-white/10 flex items-center justify-center shadow-lg cursor-pointer z-30 focus:outline-none hover:shadow-brand-purple/20 transition-shadow duration-300"
            aria-label="Scroll to top"
          >
            {/* Circular Progress Path */}
            <svg className="absolute inset-0 w-full h-full transform -rotate-90">
              <circle
                cx="24"
                cy="24"
                r="21"
                stroke="currentColor"
                strokeWidth="2.5"
                className="text-gray-200 dark:text-gray-800"
                fill="transparent"
              />
              <circle
                cx="24"
                cy="24"
                r="21"
                stroke="url(#scrollTopGradient)"
                strokeWidth="2.5"
                strokeDasharray={2 * Math.PI * 21}
                strokeDashoffset={2 * Math.PI * 21 * (1 - scrollProgress / 100)}
                fill="transparent"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="scrollTopGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>
            <FiArrowUp size={18} className="text-gray-700 dark:text-gray-250 hover:text-brand-purple transition-colors relative z-10" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
