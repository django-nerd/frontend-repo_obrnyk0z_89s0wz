import React from 'react';
import { motion } from 'framer-motion';

const LoveDeclaration = ({ onNext }) => {
  return (
    <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100">
      {/* Floating heart background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: [-10, 10, -10], opacity: [0.25, 0.5, 0.25] }}
            transition={{ duration: 7 + (i % 4), repeat: Infinity, delay: i * 0.25 }}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            <span className="text-rose-400/40" style={{ fontSize: `${Math.random() * 28 + 18}px` }}>💗</span>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-5xl font-extrabold text-rose-700"
        >
          I LOVE YOU SHRYEA
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-rose-600/90 text-lg"
        >
          with a sky full of hearts and a universe of reasons.
        </motion.p>

        <motion.button
          onClick={onNext}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="mt-10 inline-flex items-center justify-center rounded-full bg-rose-600 px-8 py-3 text-white shadow-lg shadow-rose-300/60 hover:bg-rose-700 focus:outline-none focus:ring-4 focus:ring-rose-300"
        >
          Click to continue
        </motion.button>
      </div>
    </section>
  );
};

export default LoveDeclaration;
