import React from 'react';
import { motion } from 'framer-motion';

const WelcomeHero = ({ onNext }) => {
  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-100 via-pink-100 to-rose-200">
      {/* Soft bokeh hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: [0.2, 0.5, 0.2], y: [0, -20, 0] }}
            transition={{ duration: 6 + (i % 5), repeat: Infinity, delay: i * 0.3 }}
            className="absolute text-rose-300/40"
            style={{
              fontSize: `${Math.random() * 40 + 20}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(1px)'
            }}
          >
            ♥
          </motion.span>
        ))}
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-rose-600 drop-shadow"
        >
          Welcome, My Love
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-4 text-rose-700/80 text-lg sm:text-xl max-w-xl mx-auto"
        >
          A little corner of the web made just for you — wrapped in warmth, romance, and a thousand tiny heartbeats.
        </motion.p>

        <motion.button
          onClick={onNext}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="mt-10 inline-flex items-center justify-center rounded-full bg-rose-600 px-8 py-3 text-white shadow-lg shadow-rose-300/60 hover:bg-rose-700 focus:outline-none focus:ring-4 focus:ring-rose-300"
        >
          Click here
        </motion.button>
      </div>
    </div>
  );
};

export default WelcomeHero;
