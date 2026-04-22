import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const IconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
};

const Footer = ({ profile }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full pt-10 pb-12 border-t border-gray-100 dark:border-white/5 mt-20">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl font-bold text-textMain tracking-tight"
          >
            {profile.name}
          </motion.h2>
          <p className="text-base text-textMuted font-medium transition-colors">
            © {currentYear} • All rights reserved.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex items-center gap-4">
            {profile.socials.map((social) => {
              const Icon = IconMap[social.icon] || FaEnvelope;
              return (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 rounded-xl text-textMuted hover:text-textMain transition-all"
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-textMuted font-bold">
            Built with React & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
