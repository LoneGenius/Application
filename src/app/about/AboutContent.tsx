'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutContent() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* Header */}
      <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 shadow-lg">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold"
          >
            About TechnologyKU
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-lg text-white/95 max-w-3xl mx-auto"
          >
            We’re a student-first initiative helping Malaysians explore careers, understand skills demand,
            and map practical pathways—through clean design, real data, and guided insights.
          </motion.p>
        </div>
      </section>

      {/* Mission & Why */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-indigo-100 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-indigo-700">Our Mission</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Empower students and graduates to make confident career choices by giving them accessible,
              visually clear insights about the labour market and the skills that matter.
            </p>
          </div>
          <div className="bg-white border border-indigo-100 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-indigo-700">Why We Built This</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Too many grads end up outside their fields without a map. TechnologyKU bridges that gap with
              dashboards, pathways, and AI-guided tips—so planning your next step feels simple, not scary.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-5xl mx-auto px-6 pb-6">
        <h3 className="text-xl font-semibold text-indigo-700 mb-4">Our Principles</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Inclusive by Design', text: 'Useful for both STEM and non-STEM backgrounds.' },
            { title: 'Data-Informed', text: 'We prefer charts over guesswork and buzzwords.' },
            { title: 'Actionable', text: 'Clear next steps, not overwhelming info dumps.' },
          ].map((v) => (
            <div key={v.title} className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6">
              <p className="font-semibold text-indigo-800">{v.title}</p>
              <p className="text-gray-700 mt-2">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl p-8 text-center shadow-md">
          <h4 className="text-2xl font-bold">Explore Our Dashboards</h4>
          <p className="mt-2 text-white/95">
            Compare salaries, skills, and pathways—then plan your next move with confidence.
          </p>
          <div className="mt-6">
            <Link
              href="/analytics"
              className="inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow hover:shadow-md hover:-translate-y-0.5 transition"
            >
              Go to Analytics
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
