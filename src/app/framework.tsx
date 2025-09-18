'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function FrameworkPage() {
  return (
    <div className="min-h-screen bg-white px-6 py-12">
      {/* Methodology Header Section */}
      <section className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold leading-tight bg-gradient-to-r from-yellow-300 via-pink-400 to-red-500 bg-clip-text text-transparent"
        >
          Methodology
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-lg text-gray-600 max-w-4xl mx-auto"
        >
          Our approach is based on AI/ML models and practical frameworks to predict employment risks and recommend career pathways. Below, we explain our methodology in detail.
        </motion.p>
      </section>

      {/* Machine Learning Section */}
      <section className="text-center mb-12">
        <h2 className="text-3xl font-bold text-indigo-700">Machine Learning (Python)</h2>
        <Image
          src="/framework/ml_framework.jpg"  // Replace with the actual path to your image
          alt="Machine Learning Framework"
          width={800}
          height={400}
          className="rounded-xl mt-4"
        />
      </section>

      {/* Artificial Intelligence Section */}
      <section className="text-center mb-12">
        <h2 className="text-3xl font-bold text-indigo-700">Artificial Intelligence (Chatbot)</h2>
        <Image
          src="/framework/chatbot_framework.jpg"  // Replace with the actual path to your image
          alt="Artificial Intelligence Framework"
          width={800}
          height={400}
          className="rounded-xl mt-4"
        />
      </section>
    </div>
  );
}
