import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiLayers, FiDatabase, FiGlobe } from 'react-icons/fi';
import { 
  SiCplusplus, SiJavascript, SiPython, SiReact, 
  SiExpress, SiMongodb, SiTailwindcss, SiBootstrap, SiGit, 
  SiGithub, SiJsonwebtokens 
} from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';


const skillCategories = [
  {
    id: 'all',
    name: 'All Skills'
  },
  {
    id: 'languages',
    name: 'Languages',
    skills: [
      { name: 'C++', level: 90, icon: <SiCplusplus className="text-blue-500" /> },
      { name: 'JavaScript', level: 85, icon: <SiJavascript className="text-yellow-400" /> },
      { name: 'Python', level: 75, icon: <SiPython className="text-yellow-500" /> },
      { name: 'SQL', level: 80, icon: <FiDatabase className="text-cyan-600" /> },
    ]
  },
  {
    id: 'backend',
    name: 'Backend & Databases',
    skills: [
      { name: 'Node.js', level: 85, icon: <FaNodeJs className="text-green-500" /> },
      { name: 'Express.js', level: 80, icon: <SiExpress className="text-gray-400 dark:text-white" /> },
      { name: 'MongoDB', level: 80, icon: <SiMongodb className="text-emerald-500" /> },
      { name: 'REST APIs', level: 90, icon: <FiGlobe className="text-blue-400" /> },
      { name: 'JWT Auth', level: 85, icon: <SiJsonwebtokens className="text-pink-500" /> },
      { name: 'MVC Architecture', level: 80, icon: <FiLayers className="text-brand-purple" /> },
    ]
  },
  {
    id: 'frontend',
    name: 'Frontend & Tools',
    skills: [
      { name: 'React.js', level: 85, icon: <SiReact className="text-cyan-400" /> },
      { name: 'Tailwind CSS', level: 90, icon: <SiTailwindcss className="text-teal-400" /> },
      { name: 'Bootstrap', level: 75, icon: <SiBootstrap className="text-indigo-500" /> },
      { name: 'Git', level: 85, icon: <SiGit className="text-orange-500" /> },
      { name: 'GitHub', level: 90, icon: <SiGithub className="text-gray-700 dark:text-gray-300" /> },
    ]
  }
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  // Helper to flat array of all skills
  const getAllSkills = () => {
    return skillCategories
      .filter(cat => cat.id !== 'all')
      .reduce((acc, cat) => [...acc, ...cat.skills], []);
  };

  const getFilteredSkills = () => {
    if (activeTab === 'all') {
      return getAllSkills();
    }
    const cat = skillCategories.find(c => c.id === activeTab);
    return cat ? cat.skills : [];
  };

  const currentSkills = getFilteredSkills();

  return (
    <section 
      id="skills" 
      className="py-24 bg-gray-50 dark:bg-dark-bg/40 text-gray-800 dark:text-gray-100 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold font-display"
          >
            My <span className="text-brand-purple">Skills</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-brand-purple mx-auto mt-3 rounded-full"
          />
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2 text-sm font-semibold rounded-full border transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md ${
                activeTab === cat.id
                  ? 'bg-brand-purple text-white border-brand-purple'
                  : 'bg-white/80 dark:bg-dark-card/50 border-gray-200 dark:border-white/5 hover:border-brand-purple/40 dark:hover:border-brand-purple/40 text-gray-600 dark:text-gray-400 hover:text-brand-purple'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {currentSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-3xl bg-white dark:bg-dark-card/30 border border-gray-200 dark:border-white/5 shadow-sm hover:shadow-md hover:border-brand-purple/20 dark:hover:border-brand-cyan/20 transition-all duration-300 glassmorphism flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    {/* Icon Container */}
                    <div className="p-3 text-2xl rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-inner group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-base text-gray-900 dark:text-white leading-tight">
                        {skill.name}
                      </h4>
                    </div>
                  </div>

                  {/* Level percentage bar */}
                  <div className="w-full h-1.5 bg-gray-150 dark:bg-gray-800 rounded-full overflow-hidden mb-2 relative">
                    <motion.div
                      className="h-full bg-gradient-to-r from-brand-purple to-brand-cyan"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    />
                  </div>
                </div>

                <div className="flex justify-end text-xs font-mono text-gray-400 dark:text-gray-500 font-medium">
                  <span>Level: {skill.level}%</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
