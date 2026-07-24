import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiAward, FiBookOpen } from 'react-icons/fi';
import profileImg from '../assets/profile.jpg';


export default function About() {
  const infoCards = [
    {
      icon: <FiCode className="text-brand-cyan" size={24} />,
      title: 'Full Stack Dev',
      desc: 'Building responsive MERN applications with clean architecture.'
    },
    {
      icon: <FiCpu className="text-brand-purple" size={24} />,
      title: 'AI Enthusiast',
      desc: 'Integrating AI models & APIs (like Groq) into web environments.'
    },
    {
      icon: <FiBookOpen className="text-brand-pink" size={24} />,
      title: 'Continuous Learner',
      desc: 'Passionate about C++, algorithms, data structures, and system design.'
    }
  ];

  return (
    <section 
      id="about" 
      className="py-24 bg-white dark:bg-dark-bg text-gray-800 dark:text-gray-100 transition-colors"
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
            About <span className="text-brand-cyan">Me</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-brand-cyan mx-auto mt-3 rounded-full"
          />
        </div>

        {/* Section Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Premium Glass Graphic Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-purple to-brand-cyan rounded-3xl blur-[20px] opacity-20 dark:opacity-30" />
            <div className="relative p-8 rounded-3xl bg-gray-50/50 dark:bg-dark-card/50 border border-gray-200 dark:border-white/5 glassmorphism shadow-xl text-center">
              
              {/* Profile Image with Glowing Border */}
              <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-tr from-brand-purple via-brand-pink to-brand-cyan p-1 shadow-md mb-6 relative overflow-hidden group">
                <div className="w-full h-full rounded-full bg-white dark:bg-dark-bg flex items-center justify-center relative overflow-hidden">
                  <img 
                    src={profileImg} 
                    alt="Shriyam Rastogi" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                {/* Spinning border outline */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/20 animate-[spin_20s_linear_infinite] pointer-events-none" />
              </div>

              <h3 className="text-xl font-bold font-display tracking-wide mb-1">Shriyam Rastogi</h3>
              <p className="text-sm text-brand-purple dark:text-brand-cyan font-semibold mb-4">MERN Developer | AI Enthusiast</p>
              
              <div className="h-px bg-gray-200 dark:bg-gray-800 my-4" />
              
              {/* Dev metadata info list */}
              <div className="text-left space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Based in:</span>
                  <span className="font-medium text-gray-700 dark:text-gray-200">Madhya Pradesh, India</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Education:</span>
                  <span className="font-medium text-gray-700 dark:text-gray-200">B.Tech (CSE Student)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Open to:</span>
                  <span className="font-medium text-brand-cyan">Remote / On-site Roles</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative Biography */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold font-display mb-4 text-gray-900 dark:text-white">
              Designing the Future with MERN & Artificial Intelligence
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-base">
              I am a driven Software Engineer focused on crafting high-performing web applications. With expertise in building scalable APIs and rich user interfaces, I aim to merge full stack development with artificial intelligence.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-base">
              Currently, my work revolves around engineering responsive user interfaces with **React** and creating microservice backend endpoints with **Node.js/Express**. I like solving complex coding problems and actively practice Data Structures and Algorithms on LeetCode to polish my logic-building skills.
            </p>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {infoCards.map((card, i) => (
                <div 
                  key={i} 
                  className="p-5 rounded-2xl bg-gray-50/70 dark:bg-dark-card/30 border border-gray-200/60 dark:border-white/5 shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">{card.icon}</div>
                  <h4 className="font-display font-bold text-sm tracking-wide mb-1 text-gray-950 dark:text-gray-150">{card.title}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
