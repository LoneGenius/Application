'use client';

import { motion } from 'framer-motion';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts';
import Link from 'next/link';
import { useEffect } from 'react';

// keep your current relative paths
import CareersSection from '../component/CareersSection';
import SkillsSection from '../component/SkillsSection';
import PathwaysSection from '../component/PathwaysSection';

export default function HomePage() {
  // Load Google Font
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  // Demo data for overview cards
  const salaryData = [
    { field: 'STEM', avgSalary: 5500 },
    { field: 'Non-STEM', avgSalary: 3200 },
  ];
  const employmentData = [
    { name: 'In-Field', value: 35 },
    { name: 'Out-of-Field', value: 65 },
  ];
  const COLORS = ['#4F46E5', '#9333EA'];

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
            65% of Non-STEM Graduates in Malaysia work outside their field. <br />
            Let’s uncover the real differences between STEM and Non-STEM careers 🚀
          </motion.p>
        </div>
      </section>

      {/* ===== About Us (purple shade, under hero) ===== */}
      <section className="max-w-7xl mx-auto px-6 mt-16">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-10 shadow-lg">
          <h2 className="text-4xl font-extrabold mb-4">About Us</h2>
          <p className="text-lg text-white/95 max-w-3xl">
            TechnologyKU is a student-first initiative built to help Malaysians explore careers, understand
            skill demand, and map practical pathways into the workforce. We blend clean design, real-world
            data and approachable guidance—so you can make informed choices with confidence.
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
      </section>

      {/* ===== Career Guidance (about AI-Ku + analysis) ===== */}
      <section className="max-w-7xl mx-auto px-6 mt-10">
        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-10 shadow-md">
          <h2 className="text-3xl font-bold text-indigo-700">Career Guidance</h2>
          <p className="mt-3 text-gray-700 max-w-3xl">
            Meet <span className="font-semibold text-indigo-800">AI-Ku</span>—your friendly assistant for exploring careers,
            estimating demand, and understanding salary and skills trends. Dive into our dashboards to compare
            STEM vs Non-STEM pathways, discover in-demand skills, and see recommended routes tailored to you.
          </p>
          <div className="mt-6">
            <Link
              href="/analysis"
              className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-indigo-700 hover:shadow-md hover:-translate-y-0.5 transition"
            >
              Analytics
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Optional: Overview teaser (keep or remove as you like) ===== */}
      <section
        className="
          w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
          bg-white rounded-none py-12 my-20
        "
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="
          max-w-7xl mx-auto py-16 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white
          shadow-lg mb-12 text-center text-4xl font-bold text-center text-indigo-700 mb-12">
            Malaysia Labour Force Overview
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Salary Comparison */}
            <motion.div whileHover={{ scale: 1.02 }} className="bg-indigo-50 rounded-xl p-6 shadow-md hover:shadow-2xl transition">
              <h3 className="text-2xl font-bold text-indigo-700 mb-4">Average Monthly Salary (MYR)</h3>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={salaryData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="field" stroke="#4B5563" />
                  <YAxis stroke="#4B5563" />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #ddd' }}
                    itemStyle={{ color: '#1E293B', fontWeight: 500 }}
                    labelStyle={{ color: '#4F46E5', fontWeight: 'bold' }}
                  />
                  <Bar dataKey="avgSalary" fill="#4F46E5" radius={[12, 12, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Employment Alignment */}
            <motion.div whileHover={{ scale: 1.02 }} className="bg-purple-50 rounded-xl p-6 shadow-md hover:shadow-2xl transition">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Field Alignment of Graduates</h3>
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie
                    data={employmentData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {employmentData.map((_, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== Your existing sections (one-page scroll targets) ===== */}
      <CareersSection />
      <SkillsSection />
      <PathwaysSection />
    </div>
  );
}
