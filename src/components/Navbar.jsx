import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX, FiGithub, FiLinkedin, FiCode } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Stats', href: '#stats' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Check if user scrolled
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check which section is in view
      const scrollPosition = window.scrollY + 120;
      for (const link of navLinks) {
        const targetId = link.href.substring(1);
        const el = document.getElementById(targetId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(targetId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.substring(1);
    const el = document.getElementById(targetId);
    if (el) {
      const offset = 80; // height of sticky nav
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
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'py-4 bg-white/70 dark:bg-dark-bg/70 shadow-lg border-b border-light-border dark:border-dark-border glassmorphism' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavLinkClick(e, '#home')}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-brand-purple to-brand-cyan flex items-center justify-center text-white font-bold text-lg font-display transition-transform group-hover:scale-105 shadow-md">
            SR
          </div>
          <span className="font-display font-bold text-xl tracking-tight bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Shriyam<span className="text-brand-cyan">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => {
              const targetId = link.href.substring(1);
              const isActive = activeSection === targetId;
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavLinkClick(e, link.href)}
                    className={`relative py-2 text-sm font-medium transition-colors ${
                      isActive 
                        ? 'text-brand-cyan' 
                        : 'text-gray-600 dark:text-gray-300 hover:text-brand-purple dark:hover:text-brand-purple'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-cyan rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="h-6 w-px bg-gray-200 dark:bg-gray-800" />

          {/* Social Icons & Mode Toggle */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/Shriyam2k3" 
              target="_blank" 
              rel="noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-brand-purple dark:hover:text-brand-cyan transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={18} />
            </a>
            <a 
              href="https://linkedin.com/in/shriyam-rastogi-250857280" 
              target="_blank" 
              rel="noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-brand-purple dark:hover:text-brand-cyan transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={18} />
            </a>
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-850 hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors shadow-sm"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Toggle & Theme Switcher */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-gray-100 dark:bg-gray-900 border border-gray-250 dark:border-gray-800 text-gray-700 dark:text-gray-300 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl bg-gray-100 dark:bg-gray-900 border border-gray-250 dark:border-gray-800 text-gray-700 dark:text-gray-300 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-b border-light-border dark:border-dark-border bg-white dark:bg-dark-bg/95 backdrop-blur-lg"
          >
            <ul className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => {
                const targetId = link.href.substring(1);
                const isActive = activeSection === targetId;
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavLinkClick(e, link.href)}
                      className={`block py-2 text-base font-semibold rounded-lg transition-colors ${
                        isActive 
                          ? 'text-brand-cyan font-bold bg-gray-100/50 dark:bg-gray-900/50 px-3' 
                          : 'text-gray-600 dark:text-gray-300 hover:text-brand-purple dark:hover:text-brand-purple'
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
              <div className="h-px bg-gray-100 dark:bg-gray-800 my-2" />
              <div className="flex gap-4 px-3 py-2">
                <a 
                  href="https://github.com/Shriyam2k3" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-brand-cyan transition-colors"
                  aria-label="GitHub"
                >
                  <FiGithub size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/shriyam-rastogi-250857280" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-brand-cyan transition-colors"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={20} />
                </a>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
