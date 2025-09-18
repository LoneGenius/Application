'use client';

import { motion } from 'framer-motion';

export default function PathwaysBanner() {
  return (
    <section id="pathways" className="scroll-mt-24">
      {/* ===== Full-bleed purple banner ===== */}
      <div
        className="
          max-w-7xl mx-auto py-16 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white
          py-12 px-6 shadow-lg mb-12 text-center
        "
      >
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-extrabold mb-4"
        >
          🛤️ Pathway Recommendation with AI-Ku
        </motion.h2>

        <p className="text-lg opacity-90 mb-8">
          Whether you’re from STEM or Non-STEM, there are many roads to success 🚀
        </p>

        {/* Dummy button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-300 text-indigo-900 font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-2xl transition"
        >
          Try AI-Ku Pathway
        </motion.button>
      </div>
    </section>
  );
}
