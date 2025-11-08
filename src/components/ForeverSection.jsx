import React from 'react';
import { motion } from 'framer-motion';

const Line = ({ children, delay = 0 }) => (
  <motion.p
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="text-xl sm:text-2xl text-rose-700"
  >
    {children}
  </motion.p>
);

const ForeverSection = ({ onNext }) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-rose-100 via-rose-50 to-pink-100 px-6">
      <div className="text-center max-w-2xl">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold text-rose-700"
        >
          I LOVE YOU SHREYA
        </motion.h3>

        <div className="mt-6 space-y-3">
          <Line delay={0.1}>⬇️</Line>
          <Line delay={0.2}>I love you shreya forever</Line>
          <Line delay={0.3}>You are my heart ❤️</Line>
          <Line delay={0.4}>You are my everything</Line>
        </div>

        <motion.button
          onClick={onNext}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="mt-10 inline-flex items-center justify-center rounded-full bg-rose-600 px-8 py-3 text-white shadow-lg shadow-rose-300/60 hover:bg-rose-700 focus:outline-none focus:ring-4 focus:ring-rose-300"
        >
          Read a romantic quote ❣️
        </motion.button>
      </div>
    </section>
  );
};

export default ForeverSection;
