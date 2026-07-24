import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHome, FiAlertCircle } from 'react-icons/fi';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-dark-bg text-white relative overflow-hidden px-6">
      
      {/* Background Glow */}
      <div className="absolute w-[450px] h-[450px] rounded-full bg-brand-purple/10 blur-[130px] animate-pulse-glow" />
      <div className="absolute w-[350px] h-[350px] rounded-full bg-brand-cyan/10 blur-[130px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      {/* Cybernetic Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:24px_24px] z-0" />

      {/* Matrix Scan line */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <div className="w-full h-0.5 bg-brand-cyan/30 animate-scan shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
      </div>

      <div className="relative z-20 text-center max-w-md w-full flex flex-col items-center">
        {/* Animated 404 Number */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative mb-6"
        >
          <h1 className="text-8xl md:text-9xl font-black font-display tracking-widest bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-pink bg-clip-text text-transparent">
            404
          </h1>
          {/* Glitch overlay */}
          <div className="absolute inset-0 text-8xl md:text-9xl font-black font-display tracking-widest text-brand-purple opacity-30 select-none blur-[1px] translate-x-0.5 translate-y-0.5 pointer-events-none animate-pulse">
            404
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl font-bold font-display text-white mb-4"
        >
          SYSTEM ERROR: ROUTE_NOT_FOUND
        </motion.h2>

        {/* Message */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 0.6 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-sm text-gray-400 mb-8 leading-relaxed"
        >
          The page modules you requested do not exist or have been decompiled. Check your path parameters or return to the main dashboard.
        </motion.p>

        {/* Back Home Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brand-purple to-brand-cyan hover:opacity-90 text-white font-semibold rounded-2xl shadow-lg hover:shadow-brand-purple/20 transition-all hover:-translate-y-0.5"
          >
            <FiHome /> Return Dashboard
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
