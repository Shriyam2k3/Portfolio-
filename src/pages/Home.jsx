import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Achievements from '../components/Achievements';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import GitHubStats from '../components/GitHubStats';
import LeetCodeStats from '../components/LeetCodeStats';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="bg-light-bg dark:bg-dark-bg min-h-screen text-gray-800 dark:text-gray-100 transition-colors">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* About Me Section */}
      <About />

      {/* Achievements Banner */}
      <Achievements />
      
      {/* Skills Section */}
      <Skills />
      
      {/* Projects Section */}
      <Projects />
      
      {/* GitHub & LeetCode Stats Combined Section */}
      <section 
        id="stats" 
        className="py-24 bg-gray-50 dark:bg-dark-bg/40 border-y border-light-border dark:border-dark-border text-gray-800 dark:text-gray-100 transition-colors"
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold font-display"
            >
              Coding <span className="text-brand-cyan">Profiles</span>
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-1 bg-brand-cyan mx-auto mt-3 rounded-full"
            />
          </div>

          {/* Grid Layout for Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <GitHubStats />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <LeetCodeStats />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <Education />
      
      {/* Contact Section */}
      <Contact />
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
}
