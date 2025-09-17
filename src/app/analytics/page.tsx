'use client';

import { motion } from 'framer-motion';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line
} from 'recharts';

// Adjust these paths if your components are under /components instead of /component
import CareersSection from '../../component/CareersSection';
import SkillsSection from '../../component/SkillsSection';
import PathwaysSection from '../../component/PathwaysSection';

const growthData = [
  { year: 2020, Digital: 40, Soft: 30 },
  { year: 2022, Digital: 55, Soft: 35 },
  { year: 2024, Digital: 75, Soft: 45 },
];

export default function AnalysisPage() {
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
    <div className="min-h-screen bg-white">
      {/* Page header (full-bleed) */}
      <section
        className="
          w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
          bg-gradient-to-r from-purple-700 to-indigo-700 text-white
          py-20 text-center shadow-2xl
        "
      >
        <h1 className="text-6xl font-extrabold leading-snug bg-gradient-to-r from-yellow-300 via-pink-400 to-red-500 bg-clip-text text-transparent">
          Analytics
        </h1>
        <p className="mt-3 text-white/80">
          Explore all dashboards: overview, careers, skills, and pathways.
        </p>
      </section>

      {/* Overview row with three charts (container width) */}
      <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Purple header that matches the charts' width */}
          <div className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-8 text-center shadow-lg mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">
              Malaysia Labour Force Overview
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Bar */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-indigo-50 rounded-xl p-6 shadow-md hover:shadow-2xl transition"
            >
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

            {/* Pie */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-purple-50 rounded-xl p-6 shadow-md hover:shadow-2xl transition"
            >
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
                    {employmentData.map((_, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Line */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition"
            >
              <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Growth of Skill Demand</h3>
              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={growthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
                  <XAxis dataKey="year" tick={{ fill: '#111827', fontSize: 12, fontWeight: 600 }} />
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
                  <Line type="monotone" dataKey="Digital" stroke="#4F46E5" strokeWidth={3} dot={{ r: 5 }} />
                  <Line type="monotone" dataKey="Soft" stroke="#F59E0B" strokeWidth={3} dot={{ r: 5 }} />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Single interpretation card (brief explanation) */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white p-6 rounded-2xl shadow border border-indigo-100 max-w-6xl mx-auto text-center mb-20" // ⬅️ added mb-20
      >
        <h4 className="text-lg font-bold text-indigo-600 mb-2">Insights</h4>
        <p className="text-gray-700 leading-relaxed">
          Data, AI/ML and Cloud rank among the strongest categories, indicating where upskilling can
          most reduce unemployment risk. Consistent learning momentum across quarters suggests that
          sustained practice (not one-off sprints) drives the biggest gains.
        </p>
      </motion.div>


      {/* Full sections */}
      <CareersSection />
      <SkillsSection />
      <PathwaysSection />
    </div>
  );
}
