'use client';

import { motion } from 'framer-motion';
import {
  ResponsiveContainer,
  BarChart, Bar,
  XAxis, YAxis, Tooltip, CartesianGrid,
  AreaChart, Area,
} from 'recharts';

export default function SkillsSection() {
  const topCategories = [
    { cat: 'Data',      score: 82 },
    { cat: 'Cloud',     score: 68 },
    { cat: 'AI/ML',     score: 74 },
    { cat: 'Security',  score: 59 },
    { cat: 'PM',        score: 63 },
  ];

  const learningGrowth = [
    { q: 'Q1', hours: 12 },
    { q: 'Q2', hours: 18 },
    { q: 'Q3', hours: 24 },
    { q: 'Q4', hours: 31 },
  ];

  return (
    <section id="skills" className="scroll-mt-24 mb-20">
      {/* Wrap header + charts in the SAME container so widths match */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Banner (now same width as charts below) */}
        <div className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-lg mb-12 text-center py-16 px-6">
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-extrabold mb-4"
          >
            💡 Unemployment Risk Prediction for 6 Years
          </motion.h2>
          <p className="text-lg opacity-90">
            Skills are the real equalizer 🚀 Let’s explore which ones matter most.
          </p>
        </div>

        {/* Charts row: Bar | Area (2 columns on large screens) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Bar: Top Skill Categories */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl shadow-lg"
          >
            <h3 className="text-xl font-semibold text-indigo-700 mb-6 text-center">
              Top Skill Categories
            </h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={topCategories}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="cat" tick={{ fill: '#111827', fontSize: 12, fontWeight: 600 }} />
                <YAxis tick={{ fill: '#111827', fontSize: 12, fontWeight: 600 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    color: '#111827',
                    fontSize: '14px',
                  }}
                  labelStyle={{ color: '#111827', fontWeight: 600 }}
                />
                <Bar dataKey="score" fill="#4F46E5" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Area: Learning Growth */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl shadow-lg"
          >
            <h3 className="text-xl font-semibold text-indigo-700 mb-6 text-center">
              Learning Growth (Hours per Quarter)
            </h3>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={learningGrowth}>
                <defs>
                  <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#9333EA" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#9333EA" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="q" tick={{ fill: '#111827', fontSize: 12, fontWeight: 600 }} />
                <YAxis tick={{ fill: '#111827', fontSize: 12, fontWeight: 600 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    color: '#111827',
                    fontSize: '14px',
                  }}
                  labelStyle={{ color: '#111827', fontWeight: 600 }}
                />
                <Area type="monotone" dataKey="hours" stroke="#9333EA" fill="url(#colorGrowth)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Single interpretation card (brief explanation) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white p-6 rounded-2xl shadow border border-indigo-100 max-w-6xl mx-auto text-center"
        >
          <h4 className="text-lg font-bold text-indigo-600 mb-2">Insights</h4>
          <p className="text-gray-700 leading-relaxed">
            Data, AI/ML and Cloud rank among the strongest categories, indicating where upskilling can
            most reduce unemployment risk. Consistent learning momentum across quarters suggests that
            sustained practice (not one-off sprints) drives the biggest gains.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
