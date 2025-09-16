'use client';

import { motion } from 'framer-motion';
import {
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip,
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  BarChart, Bar, AreaChart, Area
} from 'recharts';

export default function SkillsSection() {
  const skillsData = [
    { name: 'Python Programming', value: 35 },
    { name: 'Communication', value: 25 },
    { name: 'Critical Thinking', value: 20 },
    { name: 'Project Management', value: 20 },
  ];
  const COLORS = ['#4F46E5', '#9333EA', '#F59E0B', '#10B981'];

  const growthData = [
    { year: 2020, Digital: 40, Soft: 30 },
    { year: 2022, Digital: 55, Soft: 35 },
    { year: 2024, Digital: 75, Soft: 45 },
  ];

  // NEW: Bar chart — top skill categories
  const topCategories = [
    { cat: 'Data', score: 82 },
    { cat: 'Cloud', score: 68 },
    { cat: 'AI/ML', score: 74 },
    { cat: 'Security', score: 59 },
    { cat: 'PM', score: 63 },
  ];

  // NEW: Area chart — learning growth by quarter
  const learningGrowth = [
    { q: 'Q1', hours: 12 },
    { q: 'Q2', hours: 18 },
    { q: 'Q3', hours: 24 },
    { q: 'Q4', hours: 31 },
  ];

  const suggestions = [
    { skill: 'Data Literacy', tip: 'Understanding data boosts decision-making in any field.' },
    { skill: 'Public Speaking', tip: 'Lead teams and communicate impactfully.' },
    { skill: 'Problem Solving', tip: 'Creative solutions are valued across roles.' },
    { skill: 'Cloud Tools', tip: 'AWS/GCP skills help bridge into high-paying fields.' },
  ];

  return (
    <section id="skills" className="scroll-mt-24 mb-20">
      {/* Banner */}
      <div
        className="
          max-w-7xl mx-auto py-16 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white
          shadow-lg mb-12 text-center
        "
      >
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

      {/* ===== Charts row: Pie | Bar | Area ===== */}
      <div className="px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {/* Pie: Current In-Demand Skills */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl shadow-lg"
          >
            <h3 className="text-xl font-semibold text-indigo-700 mb-6 text-center">
              Current In-Demand Skills
            </h3>
            <div className="flex justify-center">
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie
                    data={skillsData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {skillsData.map((_, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
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
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Bar: Top Skill Categories */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
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
            transition={{ duration: 0.8, delay: 0.2 }}
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

        {/* Suggestions */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {suggestions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-indigo-50 p-6 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1 border border-indigo-100"
            >
              <h4 className="text-lg font-bold text-indigo-600 mb-2">{item.skill}</h4>
              <p className="text-gray-700">{item.tip}</p>
            </motion.div>
          ))}
        </section>
      </div>
    </section>
  );
}
