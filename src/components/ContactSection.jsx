import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactSection = ({ contactAPIKey }) => {
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => setStatus(''), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus('submitting');
    
    try {
      const response = await fetch(contactAPIKey, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="max-w-2xl mx-auto w-full">
      <div className="flex items-center gap-4 mb-10 justify-center">
        <div className="h-px w-16 bg-gradient-to-l from-gray-200 dark:from-white/10 to-transparent"></div>
        <h2 className="text-3xl font-bold text-textMain text-center transition-colors">Get in Touch</h2>
        <div className="h-px w-16 bg-gradient-to-r from-gray-200 dark:from-white/10 to-transparent"></div>
      </div>
      
      <div className="bg-card p-8 rounded-3xl border border-gray-100 dark:border-white/5 shadow-xl shadow-gray-200/50 dark:shadow-none relative overflow-hidden transition-all duration-300">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-purple-500"></div>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label htmlFor="name" className="block text-base font-bold text-textMain mb-2 transition-colors">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required
              className="w-full bg-background border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-textMain focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-base font-bold text-textMain mb-2 transition-colors">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required
              className="w-full bg-background border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-textMain focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-base font-bold text-textMain mb-2 transition-colors">Message</label>
            <textarea 
              id="message" 
              name="message" 
              required
              rows={4}
              className="w-full bg-background border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-textMain text-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300 resize-none"
              placeholder="How can I help you?"
            ></textarea>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={status === 'submitting'}
            className="mt-2 w-full py-4 bg-accent hover:bg-accent/90 text-white rounded-xl font-bold text-lg shadow-lg shadow-accent/25 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </motion.button>
          
          {status === 'error' && (
            <p className="text-red-500 text-sm text-center mt-2">Oops! There was a problem sending your message.</p>
          )}
        </form>
      </div>

      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', bounce: 0.4, duration: 0.6 }}
            className="fixed bottom-6 md:bottom-10 right-6 md:right-10 bg-card border border-green-500/30 text-green-500 px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 z-50 backdrop-blur-md"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="font-medium text-sm md:text-base text-textMain">Message sent successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContactSection;
