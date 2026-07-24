import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi';

const blogPosts = [
  {
    title: 'Optimizing MERN Applications for Large Scale Datasets',
    desc: 'Deep-dive into indexing MongoDB collections, caching slow API queries with Redis, and managing memory usage in Express middleware controllers.',
    date: 'July 15, 2026',
    readTime: '6 min read',
    category: 'Backend',
    glowColor: 'from-brand-purple to-purple-600'
  },
  {
    title: 'Harnessing Groq API for Real-Time Artificial Intelligence Agents',
    desc: 'How to build lightning-fast web automation tools using Groq’s LLaMA-based API end points, streaming server responses, and handling rate limits.',
    date: 'June 28, 2026',
    readTime: '5 min read',
    category: 'AI Integration',
    glowColor: 'from-brand-cyan to-blue-500'
  },
  {
    title: 'Writing Performant JavaScript: Avoid Common Execution Traps',
    desc: 'An analysis of garbage collection issues, closures memory leaks, and leveraging asynchronous workers to manage heavy computing tasks.',
    date: 'May 14, 2026',
    readTime: '4 min read',
    category: 'JavaScript',
    glowColor: 'from-brand-pink to-rose-500'
  }
];

export default function Blog() {
  return (
    <section 
      id="blog" 
      className="py-24 bg-white dark:bg-dark-bg text-gray-800 dark:text-gray-100 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-display"
          >
            Latest <span className="text-brand-purple">Articles</span>
          </motion.h2>
          <div className="h-1 bg-brand-purple w-16 mx-auto mt-3 rounded-full" />
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group relative flex flex-col justify-between p-6 rounded-3xl bg-gray-50/50 dark:bg-dark-card/30 border border-gray-200 dark:border-white/5 shadow-sm hover:shadow-md transition-all duration-300 glassmorphism overflow-hidden"
            >
              {/* Glow accent */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${post.glowColor} rounded-full blur-[30px] opacity-10 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`} />

              <div>
                {/* Meta details */}
                <div className="flex items-center gap-3 text-xs font-semibold text-gray-400 dark:text-gray-500 mb-4">
                  <span className="text-brand-cyan uppercase tracking-wider">{post.category}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><FiCalendar /> {post.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold font-display tracking-tight text-gray-900 dark:text-white mb-3 group-hover:text-brand-purple dark:group-hover:text-brand-cyan transition-colors">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-650 dark:text-gray-400 leading-relaxed mb-6 line-clamp-3">
                  {post.desc}
                </p>
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-150 dark:border-gray-800/60 text-xs font-semibold text-gray-400 mt-auto">
                <span className="flex items-center gap-1"><FiClock /> {post.readTime}</span>
                <span className="flex items-center gap-1 text-brand-purple dark:text-brand-cyan group-hover:translate-x-1.5 transition-transform duration-300">
                  Read Article <FiArrowRight />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
