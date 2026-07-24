import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring configurations for smooth trailing cursor effect
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const cursorDotX = useMotionValue(-100);
  const cursorDotY = useMotionValue(-100);
  const cursorDotXSpring = useSpring(cursorDotX, { damping: 20, stiffness: 350, mass: 0.2 });
  const cursorDotYSpring = useSpring(cursorDotY, { damping: 20, stiffness: 350, mass: 0.2 });

  useEffect(() => {
    // Check if the device supports touch (coarse pointer) and disable custom cursor
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    setIsVisible(true);

    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      cursorDotX.set(e.clientX - 4);
      cursorDotY.set(e.clientY - 4);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY, cursorDotX, cursorDotY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Cursor Glow ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-brand-cyan/40 pointer-events-none z-50 mix-blend-difference hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
      {/* Dynamic Cursor Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-brand-purple rounded-full pointer-events-none z-50 hidden md:block"
        style={{
          x: cursorDotXSpring,
          y: cursorDotYSpring,
        }}
      />
    </>
  );
}

