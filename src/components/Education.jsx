import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiAward, FiCalendar, FiMapPin } from 'react-icons/fi';

const timelineData = [
  {
    type: 'education',
    title: 'Bachelor of Technology (CSE)',
    subtitle: 'University Institute of Technology, RGPV',
    date: '2022 - 2026',
    location: 'Bhopal, India',
    details: 'Focusing on Data Structures, Algorithms, DBMS, Operating Systems, and Object-Oriented Programming. Maintaining academic excellence.',
    icon: <FiBookOpen />
  },
  {
    type: 'certification',
    title: 'Full Stack MERN Developer Certification',
    subtitle: 'Udemy / Coursera Credentials',
    date: '2024',
    location: 'Online',
    details: 'Comprehensive training on React.js, Node.js, Express.js, MongoDB, RESTful APIs, JWT authentication, and deployment structures.',
    icon: <FiAward />
  },
  {
    type: 'education',
    title: 'Senior Secondary School (Class XII)',
    subtitle: 'Central Board of Secondary Education',
    date: '2021 - 2022',
    location: 'Madhya Pradesh, India',
    details: 'Completed major courses in Physics, Chemistry, and Mathematics with a strong analytical foundation.',
    icon: <FiBookOpen />
  },
  {
    type: 'certification',
    title: 'AI Fundamentals & API Integration Specialist',
    subtitle: 'DeepLearning.AI / Cognitive Class',
    date: '2025',
    location: 'Online',
    details: 'Focus on Prompt Engineering, LLM integrations via REST APIs, vector databases, and constructing smart AI assistants.',
    icon: <FiAward />
  }
];

export default function Education() {
  return (
    <section 
      id="education" 
      className="py-24 bg-gray-50 dark:bg-dark-bg/40 text-gray-800 dark:text-gray-100 transition-colors"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold font-display"
          >
            Education & <span className="text-brand-purple">Timeline</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-brand-purple mx-auto mt-3 rounded-full"
          />
        </div>

        {/* Timeline body */}
        <div className="relative border-l border-gray-200 dark:border-gray-800 ml-4 md:ml-32 space-y-12 py-4">
          {timelineData.map((item, index) => (
            <div key={index} className="relative">
              {/* Timeline dot/icon */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
                className={`absolute -left-[29px] top-1 w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md z-10 ${
                  item.type === 'education' 
                    ? 'bg-gradient-to-tr from-brand-purple to-purple-600 shadow-brand-purple/20' 
                    : 'bg-gradient-to-tr from-brand-cyan to-blue-500 shadow-brand-cyan/20'
                }`}
              >
                <div className="text-xl">
                  {item.icon}
                </div>
              </motion.div>

              {/* Date Box (Desktop absolute layout, mobile inline) */}
              <div className="hidden md:block absolute -left-36 top-4 w-28 text-right pr-6">
                <span className="text-xs font-bold font-mono text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                  {item.date}
                </span>
              </div>

              {/* Timeline Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="ml-12 p-6 rounded-3xl bg-white dark:bg-dark-card/30 border border-gray-200 dark:border-white/5 shadow-sm hover:shadow-md transition-all duration-300 glassmorphism relative"
              >
                {/* Arrow pointer decoration */}
                <div className="absolute top-5 -left-2 w-4 h-4 bg-white dark:bg-dark-card/30 border-l border-b border-gray-200 dark:border-white/5 rotate-45 hidden md:block" />

                {/* Card Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold font-display text-gray-900 dark:text-white leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm font-semibold text-brand-purple dark:text-brand-cyan mt-1">
                      {item.subtitle}
                    </p>
                  </div>
                  
                  {/* Date badge on mobile */}
                  <div className="md:hidden inline-flex items-center gap-1.5 text-xs font-mono font-bold text-gray-400 uppercase">
                    <FiCalendar size={13} /> {item.date}
                  </div>
                </div>

                {/* Location info */}
                <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 mb-4">
                  <FiMapPin size={13} /> {item.location}
                </div>

                {/* Details paragraph */}
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.details}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
