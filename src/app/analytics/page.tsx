'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AnalysisPage() {
  return (
    <div className="bg-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* HERO — tighter on mobile, roomier on desktop; remove awkward gap with -mb-4 */}
      <section
        className="
          w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
          bg-gradient-to-r from-purple-700 to-indigo-700 text-white
          py-14 md:py-20 text-center shadow-2xl -mb-4
        "
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              text-4xl md:text-6xl font-extrabold leading-tight
              bg-gradient-to-r from-yellow-300 via-pink-400 to-red-500 bg-clip-text text-transparent
            "
          >
            Analytics
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.12, duration: 0.6 }}
            className="mt-4 md:mt-6 text-white/90 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto"
          >
            Explore our live dashboards and insights.
          </motion.p>
        </div>
      </section>

      {/* TITLE BAND + REPORT */}
      <section id="report" className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="max-w-7xl mx-auto px-6 pt-6 md:pt-8 pb-12">
          {/* Purple band aligned to content width */}
          <div className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-5 md:p-6 text-center shadow-lg mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">
              TechnologyKu Dashboard 
            </h2>
          </div>

          {/* Responsive viewport-height embed */}
          <div
            className="
              w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] relative w-full rounded-xl shadow-lg border border-indigo-100 overflow-hidden
              bg-white
            "
            style={{
              height: 'min(85vh, 1200px)',
            }}
          >
            <iframe
              title="TechnologyKU Analytics"
              src="https://app.powerbi.com/view?r=eyJrIjoiMzQ1MTkwMWYtZWM5NS00ODIyLWE4NjItNWNiODQ5NmJhZmY1IiwidCI6IjdmMDQ4ZmMxLTJlYTMtNDhlNC1hYzkyLTkxZDFlYjA5ODA3YyIsImMiOjEwfQ%3D%3D"
              className="absolute inset-0 w-full h-full"
              frameBorder={0}
              allowFullScreen
            />
          </div>

          {/* tiny help text */}
          <p className="mt-4 text-xs text-gray-500 text-center">
            If you see “This content isn’t available,” ensure the report is “Published to web” and the URL starts with
            <code className="ml-1">https://app.powerbi.com/view?r=</code>.
          </p>
        </div>
      </section>
    </div>
  );
}
