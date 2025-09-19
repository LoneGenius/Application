// src/app/framework/page.tsx

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function FrameworkPage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* Header */}
      <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 shadow-lg mb-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl font-extrabold leading-snug bg-gradient-to-r from-yellow-300 via-pink-400 to-red-500 bg-clip-text text-transparent"
          >
            Methodology
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-lg text-white/95 max-w-3xl mx-auto"
          >
            Our approach is based on AI/ML models and practical frameworks to predict employment risks and recommend career pathways. Below, shows our methodology in details.
          </motion.p>
        </div>
      </section> 

      {/* Machine Learning Section */}
      <section className="text-center mb-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Purple band aligned to content width */}
          <div className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-5 md:p-6 text-center shadow-lg mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">
              Machine Learning (Python)
            </h2>
          </div>
          <Image
            src="/framework/ml_framework.jpg"  // Replace with the actual path to your image
            alt="Machine Learning Framework"
            width={800}
            height={400}
            className="rounded-xl mx-auto mt-4" // Centering the image
          />
        </div>
      </section>

      {/* Artificial Intelligence Section */}
      <section className="text-center mb-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Purple band aligned to content width */}
          <div className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-5 md:p-6 text-center shadow-lg mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">
              Artificial Intelligence (Chatbot)
            </h2>
          </div>
          <Image
            src="/framework/chatbot_framework.jpg"  // Replace with the actual path to your image
            alt="Artificial Intelligence Framework"
            width={800}
            height={400}
            className="rounded-xl mx-auto mt-4" // Centering the image
          />
        </div>
      </section>
    </div>
  );
}
