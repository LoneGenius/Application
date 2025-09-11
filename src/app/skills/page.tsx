'use client'

import { motion } from 'framer-motion'
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
} from 'recharts'

export default function SkillsPage() {
  // Dummy data
  const skillsData = [
    { name: 'Python Programming', value: 35 },
    { name: 'Communication', value: 25 },
    { name: 'Critical Thinking', value: 20 },
    { name: 'Project Management', value: 20 },
  ]
  const COLORS = ['#4F46E5', '#9333EA', '#F59E0B', '#10B981']

  const growthData = [
    { year: 2020, Digital: 40, Soft: 30 },
    { year: 2022, Digital: 55, Soft: 35 },
    { year: 2024, Digital: 75, Soft: 45 },
  ]

  const suggestions = [
    {
      skill: 'Data Literacy',
      tip: 'Understanding data is no longer just for scientists — it boosts decision-making in any field.',
    },
    {
      skill: 'Public Speaking',
      tip: 'Strong communication can help non-STEM grads compete with technical roles by leading teams.',
    },
    {
      skill: 'Problem Solving',
      tip: 'Employers love people who solve problems creatively, across STEM and non-STEM alike.',
    },
    {
      skill: 'Cloud Tools',
      tip: 'Learning platforms like AWS or Google Cloud is a great way to bridge into high-paying fields.',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto py-16 px-6 bg-gradient-to-b from-purple-50 to-indigo-50 rounded-xl">
      {/* Fun Fact Banner */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-12 px-6 rounded-2xl shadow-lg mb-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-extrabold mb-4"
        >
          💡 Did you know? Building cross-field skills can reduce the STEM vs Non-STEM wage gap by 30%!
        </motion.h2>
        <p className="text-lg opacity-90">
          Skills are the real equalizer 🚀 Let’s explore which ones matter most.
        </p>
      </section>

      {/* Skills Distribution Pie */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white p-6 rounded-2xl shadow-lg mb-16"
      >
        <h3 className="text-xl font-semibold text-indigo-700 mb-6 text-center">
          Current In-Demand Skills
        </h3>
        <div className="flex justify-center">
          <ResponsiveContainer width="80%" height={300}>
            <PieChart>
              <Pie
                data={skillsData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {skillsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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

      {/* Growth Trends */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-white p-6 rounded-2xl shadow-lg mb-16"
      >
        <h3 className="text-xl font-semibold text-indigo-700 mb-6 text-center">
          Growth of Skill Demand (2020–2024)
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={growthData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
            <XAxis
              dataKey="year"
              tick={{ fill: '#111827', fontSize: 13, fontWeight: 600 }}
            />
            <YAxis
              tick={{ fill: '#111827', fontSize: 13, fontWeight: 600 }}
            />
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
            <Line
              type="monotone"
              dataKey="Digital"
              stroke="#4F46E5"
              strokeWidth={3}
              dot={{ r: 5 }}
            />
            <Line
              type="monotone"
              dataKey="Soft"
              stroke="#F59E0B"
              strokeWidth={3}
              dot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Suggested Skills Cards */}
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
  )
}
