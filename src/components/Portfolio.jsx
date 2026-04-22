import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa';
import FloatingCard from './FloatingCard';
import ThemeToggle from './ThemeToggle';
import ContactSection from './ContactSection';
import Footer from './Footer';
import portfolioData from '../portfolio-data.json';

const IconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
};

// Reusable animated section component
const ScrollRevealSection = ({ children, direction = "left", className = "" }) => {
  return (
    <motion.section
      initial={{
        opacity: 0,
        x: direction === "left" ? -40 : direction === "right" ? 40 : 0,
        y: direction === "up" ? 40 : 0,
        scale: 0.95
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1
      }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{
        duration: 1,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={`mb-24 ${className}`}
    >
      {children}
    </motion.section>
  );
};

const Portfolio = ({ isDark, toggleTheme }) => {
  const { profile, skills, projects, contactAPIKey } = portfolioData;
  const { scrollY } = useScroll();

  // Parallax effects
  const y1 = useTransform(scrollY, [0, 1000], [0, -150]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -250]);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden transition-colors duration-300 subpixel-antialiased">
      {/* Premium Parallax Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-[-20rem] left-[-20rem] w-[40rem] h-[40rem] bg-accent/10 rounded-full mix-blend-screen filter blur-[120px] opacity-50"
        ></motion.div>
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-[-10rem] right-[-10rem] w-[30rem] h-[30rem] bg-purple-600/10 rounded-full mix-blend-screen filter blur-[100px] opacity-40 dark:opacity-40 opacity-10"
        ></motion.div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-12 md:pt-32">

        {/* Header / Theme Toggle */}
        <div className="absolute top-6 right-6 md:top-10 md:right-10">
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
        </div>

        {/* Profile Section */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center md:text-left flex flex-col md:flex-row items-center md:items-start gap-12 mt-10 md:mt-0"
        >
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full bg-gray-200/50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs font-medium tracking-widest text-textMuted uppercase mb-6"
            >
              Portfolio
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-bold text-textMain mb-8 tracking-tight leading-tight transition-colors">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">
                {profile.name}
              </span>
            </h1>
            <p className="text-2xl text-textMuted mb-10 max-w-3xl leading-relaxed font-medium">
              {profile.bio}
            </p>

            <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
              {profile.socials.map((social, index) => {
                const Icon = IconMap[social.icon] || FaEnvelope;
                return (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 rounded-full text-textMuted hover:text-textMain transition-colors"
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              })}

              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-2.5 bg-accent hover:bg-accent/90 text-white rounded-full font-bold shadow-lg shadow-accent/25 transition-all flex items-center gap-2 border border-white/10"
              >
                Hire Me <FaEnvelope size={18} />
              </motion.a>
            </div>
          </div>
        </motion.header>

        {/* Skills Section (Odd: slide right to center) */}
        <ScrollRevealSection direction="right">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-textMain transition-colors">Technical Arsenal</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gray-200 dark:from-white/10 to-transparent"></div>
          </div>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -2 }}
                className="px-6 py-3 bg-card border border-gray-100 dark:border-white/5 rounded-xl text-textMain text-base font-bold shadow-sm hover:border-accent/30 hover:bg-cardHover transition-all"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </ScrollRevealSection>

        {/* Projects Section (Even: slide left to center) */}
        <ScrollRevealSection direction="left">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-textMain transition-colors">Featured Projects</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gray-200 dark:from-white/10 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <FloatingCard key={project.title} delay={index * 0.1}>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                    <FaExternalLinkAlt size={20} />
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 hover:bg-accent/20 text-accent rounded-lg text-sm font-medium transition-colors"
                  >
                    View Project <FaExternalLinkAlt size={12} />
                  </a>
                </div>

                <h3 className="text-2xl font-bold text-textMain mb-4 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-textMuted text-lg mb-8 flex-1 leading-relaxed font-medium">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map(tech => (
                    <span key={tech} className="text-xs font-medium text-textMuted bg-gray-100 dark:bg-white/5 px-2 py-1 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </FloatingCard>
            ))}
          </div>
        </ScrollRevealSection>

        {/* Contact Section (Odd: slide right to center) */}
        <ScrollRevealSection direction="right" className="mb-0">
          <div id="contact">
            <ContactSection contactAPIKey={contactAPIKey} />
          </div>
        </ScrollRevealSection>

        <ScrollRevealSection direction="up" className="mb-0">
          <Footer profile={profile} />
        </ScrollRevealSection>

      </div>
    </div>
  );
};

export default Portfolio;
