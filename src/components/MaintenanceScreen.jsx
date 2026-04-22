import React from 'react';
import { motion } from 'framer-motion';
import { FaCog } from 'react-icons/fa';

const MaintenanceScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/40 backdrop-blur-xl overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000 pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center p-10 max-w-lg bg-card/60 border border-gray-200/30 dark:border-white/5 rounded-3xl shadow-2xl backdrop-blur-2xl mx-4"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="mb-8 p-4 bg-gray-100/50 dark:bg-white/5 rounded-full border border-gray-200 dark:border-white/10 shadow-inner"
        >
          <FaCog className="w-12 h-12 text-accent" />
        </motion.div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-textMain mb-4 tracking-tight">
          Taking a Quick Break - <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">Back Soon</span>
        </h1>
        
        <p className="text-textMuted text-lg mb-8 leading-relaxed">
          I'm currently upgrading this digital space to bring you a better experience.
        </p>

        <motion.div 
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="inline-flex items-center px-6 py-3 rounded-full bg-accent/10 text-accent border border-accent/20 font-medium text-sm tracking-wide"
        >
          <span className="w-2 h-2 rounded-full bg-accent mr-3 animate-pulse"></span>
          SYSTEM OFFLINE
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MaintenanceScreen;
