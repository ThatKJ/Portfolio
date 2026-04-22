import React from 'react';
import { motion } from 'framer-motion';

const FloatingCard = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      whileHover={{ y: -10, scale: 1.02 }}
      className={`relative group ${className}`}
    >
      {/* Outer blurred aesthetic glow layer (Dark Mode only) */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-purple-600 rounded-2xl blur opacity-0 dark:opacity-20 dark:group-hover:opacity-40 transition duration-500"></div>

      {/* Inner precise card */}
      <div className="relative bg-card p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-white/5 backdrop-blur-sm shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-300/50 dark:shadow-none dark:hover:shadow-none h-full flex flex-col transition-all duration-300 transform-gpu" style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}>
        {children}
      </div>
    </motion.div>
  );
};

export default FloatingCard;
