import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiAward, FiGithub, FiZap } from 'react-icons/fi';

const counterStats = [
  {
    icon: <FiCode size={28} className="text-brand-cyan" />,
    target: 150,
    suffix: '+',
    title: 'LeetCode Solved',
    subtitle: 'Practicing DSA consistently'
  },
  {
    icon: <FiZap size={28} className="text-brand-purple" />,
    target: 20,
    suffix: '+',
    title: 'Repositories',
    subtitle: 'Active open source & projects'
  },
  {
    icon: <FiGithub size={28} className="text-brand-pink" />,
    target: 10,
    suffix: '+',
    title: 'Projects Completed',
    subtitle: 'From tools to SaaS apps'
  },
  {
    icon: <FiAward size={28} className="text-yellow-500" />,
    target: 5,
    suffix: '+',
    title: 'Certifications',
    subtitle: 'MERN & Cloud credentials'
  }
];

function CountUp({ target, duration = 1.5 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target, 10);
    if (start === end) return;

    // Total duration of count-up in ms
    const totalDuration = duration * 1000;
    // Calculate progress step
    const incrementTime = Math.max(Math.floor(totalDuration / end), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalDuration / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count}</span>;
}

export default function Achievements() {
  const [startCounting, setStartCounting] = useState(false);

  return (
    <section className="py-16 bg-gray-50 dark:bg-dark-bg/60 border-y border-light-border dark:border-dark-border transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          onViewportEnter={() => setStartCounting(true)}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {counterStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-6 bg-white dark:bg-dark-card/35 rounded-3xl border border-gray-200 dark:border-white/5 shadow-sm hover:shadow-md glassmorphism transition-all duration-300"
            >
              {/* Circular Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-gray-150/40 dark:bg-gray-800/40 flex items-center justify-center mb-4 text-gray-700 dark:text-gray-200 shadow-inner">
                {stat.icon}
              </div>

              {/* Animated Counter */}
              <h3 className="text-3xl md:text-4xl font-extrabold font-display bg-gradient-to-r from-gray-900 via-gray-750 to-gray-600 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
                {startCounting ? (
                  <CountUp target={stat.target} />
                ) : (
                  '0'
                )}
                <span className="text-brand-cyan">{stat.suffix}</span>
              </h3>

              {/* Titles */}
              <p className="font-semibold text-sm mt-2 text-gray-800 dark:text-gray-200">
                {stat.title}
              </p>
              <p className="text-xs text-gray-400 mt-1 dark:text-gray-500">
                {stat.subtitle}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
