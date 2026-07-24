import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing modules...');

  useEffect(() => {
    // Progress counter simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Speed up near the end or increment dynamically
        const increment = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + increment, 100);
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress < 30) {
      setStatusText('Connecting to GitHub API...');
    } else if (progress < 60) {
      setStatusText('Fetching LeetCode status...');
    } else if (progress < 90) {
      setStatusText('Rendering developer dashboard...');
    } else {
      setStatusText('Welcome to Shriyam\'s Portfolio!');
    }

    if (progress === 100) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 600); // Small delay to let user see "Welcome"
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark-bg text-white">
      {/* Glow Effect in the center */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-brand-purple/10 blur-[120px] animate-pulse-glow" />

      <div className="relative z-10 flex flex-col items-center max-w-xs w-full px-4">
        {/* Code Logo Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [0.9, 1.1, 1], opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="mb-8 flex items-center justify-center w-20 h-20 rounded-2xl border border-brand-cyan/20 bg-dark-card/50 glassmorphism shadow-lg glow-cyan"
        >
          <span className="text-3xl font-bold font-display bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-pink bg-clip-text text-transparent">
            &lt;/&gt;
          </span>
        </motion.div>

        {/* Name Header */}
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold font-display tracking-wider mb-2 text-center"
        >
          SHRIYAM RASTOGI
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 0.6 }}
          transition={{ delay: 0.3 }}
          className="text-xs tracking-widest text-gray-400 mb-6 text-center"
        >
          PORTFOLIO EXP_2026
        </motion.p>

        {/* Progress Bar Container */}
        <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden mb-4 relative">
          <motion.div
            className="h-full bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-pink"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeInOut" }}
          />
        </div>

        {/* Counter & Status */}
        <div className="flex justify-between w-full text-xs font-mono text-gray-400">
          <span className="animate-pulse">{statusText}</span>
          <span className="text-brand-cyan font-bold">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
