import React from 'react';
import { motion } from 'framer-motion';

const RomanticQuote = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-pink-50 via-rose-50 to-rose-100 px-6">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: [0.15, 0.35, 0.15] }}
            transition={{ duration: 6 + (i % 4), repeat: Infinity, delay: i * 0.4 }}
            className="absolute text-rose-400/40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 26 + 18}px`
            }}
          >
            ❣️
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-3xl text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-2xl sm:text-3xl font-semibold text-rose-700"
        >
          "In every heartbeat, I write your name; in every breath, I find my home. With you, ordinary moments bloom into forever."
        </motion.blockquote>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-rose-600"
        >
          — for Shreya, with endless love
        </motion.p>
      </div>
    </section>
  );
};

export default RomanticQuote;
