'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect } from 'react';

export default function HomePage() {
  // Load Google Font
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* ===== Full-bleed Hero (purple) ===== */}
      <section
        className="
          w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
          bg-gradient-to-r from-purple-700 to-indigo-700 text-white
          py-24 text-center shadow-2xl
        "
      >
        {/* ✅ Chat Button (Floating Action Button with Smooth Hover and Subtle Animation) */}
        <div className="fixed bottom-8 right-8">
          <Link
            href="/chat"
            className="bg-indigo-600 text-white px-6 py-4 rounded-full font-semibold shadow-lg flex items-center justify-center gap-3 
              transition-all duration-200 ease-in-out transform hover:bg-indigo-700 hover:scale-105 hover:shadow-xl"
          >
            {/* Chat Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h8M8 14h4m4-8h.01M21 12c0 3.866-3.134 7-7 7h-7c-3.866 0-7-3.134-7-7s3.134-7 7-7h7c3.866 0 7 3.134 7 7z"
              />
            </svg>
            <span className="text-lg">Chat with AI</span>
          </Link>
        </div>

        <div className="mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-6xl font-extrabold leading-snug bg-gradient-to-r from-yellow-300 via-pink-400 to-red-500 bg-clip-text text-transparent"
          >
            TechnologyKu
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-8 text-xl max-w-3xl mx-auto text-gray-200"
          >
            Welcome to TechnologyKu career recommendation system. <br />
            Let’s uncover the real differences between STEM and Non-STEM careers 🚀
          </motion.p>
        </div>
      </section>

      {/* ===== About Us (purple shade, under hero) ===== */}
      <section className="max-w-7xl mx-auto px-6 mt-16">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-10 shadow-lg text-center flex items-center justify-between">
          <div className="w-full sm:w-1/2 pr-6">
            <h2 className="text-4xl font-extrabold mb-4">About Us</h2>
            <p className="text-lg text-white/95 leading-relaxed">
              TechnologyKU is a student-first initiative built to help Malaysians explore careers,
              understand skill demand, and map practical pathways into the workforce. We blend clean design,
              real-world data, and approachable guidance—so you can make informed choices with confidence.
            </p>
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow hover:shadow-md hover:-translate-y-0.5 transition"
              >
                About Us
              </Link>
            </div>
          </div>

          <div className="w-full sm:w-1/2 pl-6 flex justify-center">
            {/* Illustration for About Us */}
            <div style={{ paddingBottom: '56.25%' }} className="w-full h-0 relative">
              <img
                src="/image/about-us2.jpeg"  // Path to your illustration
                alt="About Us"
                className="absolute inset-0 w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Career Guidance (about AI-Ku + analysis) ===== */}
      <section className="max-w-7xl mx-auto px-6 mt-10">
        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-10 shadow-md text-center flex items-center justify-between">
          <div className="w-full sm:w-1/2 pr-6">
            <h2 className="text-3xl font-bold text-indigo-700">Career Guidance</h2>
            <p className="mt-3 text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Meet <span className="font-semibold text-indigo-800">AI-Ku</span>—your friendly assistant
              for exploring careers, estimating demand, and understanding salary and skills trends.
              Dive into our dashboards to compare STEM vs Non-STEM pathways, discover in-demand skills,
              and see recommended routes tailored to you.
            </p>
            <div className="mt-6">
              <Link
                href="/analytics"
                className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-indigo-700 hover:shadow-md hover:-translate-y-0.5 transition"
              >
                Analytics
              </Link>
            </div>
          </div>

          <div className="w-full sm:w-1/2 pl-6 flex justify-center">
            {/* Illustration for Career Guidance */}
            <div style={{ paddingBottom: '56.25%' }} className="w-full h-0 relative">
              <img
                src="/image/career-guidance3.jpg"  // Path to your illustration
                alt="Career Guidance"
                className="absolute inset-0 w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}