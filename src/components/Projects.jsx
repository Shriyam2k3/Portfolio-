import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiSearch, FiCode, FiFolder } from 'react-icons/fi';

const projectsData = [
  {
    id: 1,
    title: 'AI Code Review Assistant',
    description: 'An intelligent coding assistant that conducts static code reviews. Utilizes the Groq API to analyze code structure, detect performance bottlenecks, and recommend optimal refactoring strategies. Includes PDF export reports and security audits.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Groq API', 'JWT', 'PDFKit'],
    category: 'AI / MERN',
    github: 'https://github.com/Shriyam2k3/ai-code-reviewer', // Fallback links
    live: 'https://ai-code-reviewer.vercel.app',
    glowColor: 'from-brand-cyan to-blue-500'
  },
  {
    id: 2,
    title: 'Wanderlust',
    description: 'A premium full-stack travel booking & listing marketplace. Features secure JWT authentication, multi-criteria listing searches, database image uploads via Cloudinary, listing reviews/ratings, and interactive Mapbox widgets.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Bootstrap', 'Cloudinary', 'Mapbox'],
    category: 'MERN Stack',
    github: 'https://github.com/Shriyam2k3/wanderlust',
    live: 'https://wanderlust-travels.vercel.app',
    glowColor: 'from-brand-purple to-brand-pink'
  },
  {
    id: 3,
    title: 'AI PDF Summarizer',
    description: 'A micro-SaaS application that parses academic and corporate PDF documents, builds semantic chunks, and generates structured summarizations, key takeaways, and flashcards using LLM integrations.',
    tech: ['React.js', 'FastAPI', 'Python', 'Tailwind CSS', 'OpenAI API', 'LangChain'],
    category: 'AI / Python',
    github: 'https://github.com/Shriyam2k3/ai-pdf-summarizer',
    live: 'https://ai-pdf-summarizer.vercel.app',
    glowColor: 'from-yellow-400 to-orange-500'
  },
  {
    id: 4,
    title: 'Realtime Code Editor',
    description: 'A collaborative real-time coding workspace supporting syntax highlighting for multiple languages, multi-user cursors, terminal compiling, and active audio rooms via WebRTC integrations.',
    tech: ['React.js', 'Socket.io', 'Node.js', 'Tailwind CSS', 'Monaco Editor', 'WebRTC'],
    category: 'Web App',
    github: 'https://github.com/Shriyam2k3/realtime-editor',
    live: 'https://realtime-editor.vercel.app',
    glowColor: 'from-emerald-400 to-teal-600'
  }
];

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'MERN Stack', 'AI / MERN', 'Web App'];

  const filteredProjects = projectsData.filter((project) => {
    // Category Filter
    const matchesCategory = 
      activeFilter === 'All' || 
      project.category.toLowerCase().includes(activeFilter.toLowerCase()) ||
      (activeFilter === 'MERN Stack' && project.category.includes('MERN'));
    
    // Search Query Filter
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section 
      id="projects" 
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
            My <span className="text-brand-cyan">Projects</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-brand-cyan mx-auto mt-3 rounded-full"
          />
        </div>

        {/* Filter and Search Bar Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-2xl border transition-all cursor-pointer shadow-sm ${
                  activeFilter === cat
                    ? 'bg-brand-cyan border-brand-cyan text-white shadow-brand-cyan/15'
                    : 'bg-gray-50/50 dark:bg-dark-card/50 border-gray-200 dark:border-white/5 text-gray-650 dark:text-gray-400 hover:border-brand-cyan/40 dark:hover:border-brand-cyan/40 hover:text-brand-cyan'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative max-w-sm w-full">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search by project name or tech stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 text-sm bg-gray-50/80 dark:bg-dark-card/50 border border-gray-200 dark:border-white/5 rounded-2xl focus:outline-none focus:border-brand-cyan/60 focus:ring-1 focus:ring-brand-cyan/20 transition-all dark:text-white"
            />
          </div>
        </div>

        {/* Projects Cards Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative flex flex-col justify-between p-7 rounded-3xl bg-gray-50/50 dark:bg-dark-card/30 border border-gray-200 dark:border-white/5 shadow-md hover:shadow-lg transition-all duration-300 glassmorphism overflow-hidden"
              >
                {/* Diagonal Color Glow on Hover */}
                <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-br ${project.glowColor} rounded-full blur-[40px] opacity-10 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`} />

                <div>
                  {/* Category & Folder Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] font-extrabold tracking-wider text-brand-purple dark:text-brand-cyan uppercase px-2.5 py-1 rounded-md bg-gray-150/50 dark:bg-gray-800/40 border border-gray-200/50 dark:border-white/5">
                      {project.category}
                    </span>
                    <FiFolder size={20} className="text-gray-400" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-display tracking-tight text-gray-900 dark:text-white mb-3 group-hover:text-brand-cyan transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {project.tech.map((t, idx) => (
                      <span 
                        key={idx}
                        className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800/70 text-gray-650 dark:text-gray-300 border border-gray-200/20 dark:border-gray-700/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-150 dark:border-gray-800/60 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-brand-purple dark:hover:text-brand-cyan transition-colors"
                  >
                    <FiGithub size={16} /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-brand-purple dark:hover:text-brand-cyan transition-colors"
                  >
                    <FiExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Empty Search Fallback */}
          {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-1 md:col-span-2 text-center py-12 text-gray-400"
            >
              <FiCode className="mx-auto mb-4 text-brand-purple" size={40} />
              <p className="text-base font-semibold">No projects match your search query.</p>
              <p className="text-sm text-gray-500 mt-1">Try searching for simple tags like "MERN", "AI", or "FastAPI".</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
