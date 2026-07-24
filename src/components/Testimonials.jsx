import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const reviews = [
  {
    name: 'Sarah Connor',
    role: 'Senior Project Lead, SkyNet Tech',
    comment: 'Shriyam delivered a highly responsive MERN platform ahead of schedule. His integration of artificial intelligence APIs for review tracking was flawless, and the clean design wowed our entire board.',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  },
  {
    name: 'David Miller',
    role: 'Co-Founder, WanderStay Inc.',
    comment: 'Exceptional communication and engineering skills. Shriyam helped us clean up our database endpoints, restructure JWT session layers, and optimize our React states. Highly recommended!',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  },
  {
    name: 'Aisha Rahman',
    role: 'Open Source Coordinator',
    comment: 'Working with Shriyam was a great experience. His contributions to our React components were incredibly clean, self-documented, and performant. His logic-building capability is outstanding.',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150'
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [index]);

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  };

  return (
    <section className="py-24 bg-gray-50 dark:bg-dark-bg/40 text-gray-800 dark:text-gray-100 transition-colors">
      <div className="max-w-4xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-display"
          >
            Client <span className="text-brand-cyan">Testimonials</span>
          </motion.h2>
          <div className="h-1 bg-brand-cyan w-16 mx-auto mt-3 rounded-full" />
        </div>

        {/* Carousel Container */}
        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="w-full p-8 md:p-12 rounded-3xl bg-white dark:bg-dark-card/30 border border-gray-200 dark:border-white/5 shadow-md glassmorphism text-center relative"
            >
              <FaQuoteLeft className="text-brand-cyan/20 absolute top-8 left-8 text-5xl pointer-events-none" />
              
              <p className="text-base md:text-lg italic text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto relative z-10">
                "{reviews[index].comment}"
              </p>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4 text-yellow-500">
                {[...Array(reviews[index].stars)].map((_, i) => (
                  <FaStar key={i} size={15} />
                ))}
              </div>

              {/* Client Info */}
              <div className="flex flex-col items-center">
                <img
                  src={reviews[index].avatar}
                  alt={reviews[index].name}
                  className="w-14 h-14 rounded-full border-2 border-brand-purple mb-3 object-cover shadow-sm"
                />
                <h4 className="font-display font-bold text-sm tracking-wide text-gray-900 dark:text-white">
                  {reviews[index].name}
                </h4>
                <p className="text-xs text-gray-400 mt-0.5">
                  {reviews[index].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 p-2.5 rounded-full border border-gray-200 dark:border-white/5 bg-white dark:bg-dark-card shadow-md text-gray-650 dark:text-gray-300 hover:text-brand-purple hover:scale-105 transition-all cursor-pointer"
            aria-label="Previous Review"
          >
            <FiChevronLeft size={20} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 p-2.5 rounded-full border border-gray-200 dark:border-white/5 bg-white dark:bg-dark-card shadow-md text-gray-650 dark:text-gray-300 hover:text-brand-purple hover:scale-105 transition-all cursor-pointer"
            aria-label="Next Review"
          >
            <FiChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
