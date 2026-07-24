import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SiLeetcode } from 'react-icons/si';
import { FiAward, FiCheckCircle, FiActivity, FiTrendingUp } from 'react-icons/fi';

const USERNAME = 'Shriyam2k3';

const defaultStats = {
  totalSolved: 154,
  totalQuestions: 3200,
  easySolved: 69,
  totalEasy: 830,
  mediumSolved: 67,
  totalMedium: 1650,
  hardSolved: 18,
  totalHard: 720,
  acceptanceRate: 58.5,
  ranking: 1085744,
  contributionPoints: 650,
  reputation: 12
};


export default function LeetCodeStats() {
  const [stats, setStats] = useState(defaultStats);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchLeetCodeData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://leetcode-stats-api.herokuapp.com/${USERNAME}`);
        if (!res.ok) throw new Error('Failed to fetch LeetCode data');
        const data = await res.json();
        if (data.status === 'success') {
          setStats(data);
        } else {
          throw new Error('Data status not success');
        }
      } catch (err) {
        console.warn('LeetCode API failed. Using premium backup stats.', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchLeetCodeData();
  }, []);

  const easyPercent = (stats.easySolved / stats.totalEasy) * 100;
  const mediumPercent = (stats.mediumSolved / stats.totalMedium) * 100;
  const hardPercent = (stats.hardSolved / stats.totalHard) * 100;
  
  // Solved ratio
  const solvedPercent = (stats.totalSolved / stats.totalQuestions) * 100;

  return (
    <div className="p-6 rounded-3xl bg-gray-50/50 dark:bg-dark-card/30 border border-gray-200 dark:border-white/5 glassmorphism shadow-md flex flex-col justify-between h-full">
      <div>
        {/* LeetCode Title */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 dark:bg-orange-500/5 border border-orange-500/20 flex items-center justify-center text-orange-500">
              <SiLeetcode size={20} />
            </div>
            <div>
              <h3 className="text-base font-bold font-display text-gray-900 dark:text-white">
                LeetCode Dashboard
              </h3>
              <a 
                href={`https://leetcode.com/u/${USERNAME}/`}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] font-bold text-orange-500 hover:underline"
              >
                u/{USERNAME}
              </a>
            </div>
          </div>

          <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-gray-150/60 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
            Rank: #{stats.ranking.toLocaleString()}
          </span>
        </div>

        {/* Solver Wheel Progress */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center mb-8">
          {/* Circular solve count */}
          <div className="sm:col-span-5 flex flex-col items-center justify-center relative">
            <svg className="w-32 h-32 transform -rotate-90">
              <circle
                cx="64"
                cy="64"
                r="50"
                stroke="currentColor"
                strokeWidth="8"
                className="text-gray-200 dark:text-gray-800"
                fill="transparent"
              />
              <motion.circle
                cx="64"
                cy="64"
                r="50"
                stroke="url(#leetcodeGradient)"
                strokeWidth="8"
                strokeDasharray={2 * Math.PI * 50}
                initial={{ strokeDashoffset: 2 * Math.PI * 50 }}
                animate={{ strokeDashoffset: 2 * Math.PI * 50 * (1 - solvedPercent / 100) }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                fill="transparent"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="leetcodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#ef4444" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute flex flex-col items-center justify-center">
              <span className="text-2xl font-bold font-display tracking-tight text-gray-900 dark:text-white">
                {stats.totalSolved}
              </span>
              <span className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase">
                Solved
              </span>
            </div>
          </div>

          {/* Difficulty breakdown */}
          <div className="sm:col-span-7 space-y-4">
            {/* Easy */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-emerald-500">Easy</span>
                <span className="text-gray-500 dark:text-gray-400">
                  {stats.easySolved}/<span className="text-gray-400">{stats.totalEasy}</span>
                </span>
              </div>
              <div className="w-full h-2 bg-gray-150 dark:bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-emerald-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${easyPercent}%` }}
                  transition={{ duration: 1, delay: 0.1 }}
                />
              </div>
            </div>

            {/* Medium */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-amber-500">Medium</span>
                <span className="text-gray-500 dark:text-gray-400">
                  {stats.mediumSolved}/<span className="text-gray-400">{stats.totalMedium}</span>
                </span>
              </div>
              <div className="w-full h-2 bg-gray-150 dark:bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-amber-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${mediumPercent}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </div>
            </div>

            {/* Hard */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-rose-500">Hard</span>
                <span className="text-gray-500 dark:text-gray-400">
                  {stats.hardSolved}/<span className="text-gray-400">{stats.totalHard}</span>
                </span>
              </div>
              <div className="w-full h-2 bg-gray-150 dark:bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-rose-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${hardPercent}%` }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Additional Stats Row */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-3.5 rounded-2xl bg-white dark:bg-dark-card/50 border border-gray-200 dark:border-white/5 flex items-center gap-3">
            <FiCheckCircle className="text-emerald-500 flex-shrink-0" size={18} />
            <div>
              <p className="text-[10px] text-gray-400 font-semibold uppercase">Acceptance</p>
              <h4 className="text-sm font-bold text-gray-800 dark:text-gray-200">{stats.acceptanceRate}%</h4>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white dark:bg-dark-card/50 border border-gray-200 dark:border-white/5 flex items-center gap-3">
            <FiTrendingUp className="text-brand-purple flex-shrink-0" size={18} />
            <div>
              <p className="text-[10px] text-gray-400 font-semibold uppercase">Contest Rating</p>
              <h4 className="text-sm font-bold text-gray-800 dark:text-gray-200">1,721 (Top 12.3%)</h4>
            </div>
          </div>
        </div>

        {/* Badges and Achievements placeholders */}
        <div className="mt-6 border-t border-gray-150 dark:border-gray-800/60 pt-6">
          <div className="flex items-center gap-2 mb-3">
            <FiAward className="text-yellow-500" />
            <h4 className="text-sm font-bold font-display text-gray-800 dark:text-gray-200">
              Badges
            </h4>
          </div>
          <div className="flex gap-2">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 dark:bg-amber-500/5 border border-amber-500/20 text-xs font-semibold text-amber-600 dark:text-amber-500">
              <span className="w-2 h-2 rounded-full bg-amber-500 inline-block animate-pulse" />
              50 Days Badge 2026
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-500/10 dark:bg-purple-500/5 border border-purple-500/20 text-xs font-semibold text-purple-600 dark:text-purple-500">
              <span className="w-2 h-2 rounded-full bg-purple-500 inline-block" />
              LeetCode Knight
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
