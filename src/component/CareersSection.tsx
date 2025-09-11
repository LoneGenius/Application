'use client';

import { motion } from 'framer-motion';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LineChart,
  Line,
} from 'recharts';

export default function CareersSection() {
  const salaryData = [
    { career: 'Software Engineer', salary: 6500 },
    { career: 'Data Scientist', salary: 7200 },
    { career: 'Teacher', salary: 3200 },
    { career: 'Marketing Specialist', salary: 4000 },
  ];

  const demandData = [
    { year: 2020, STEM: 50, NonSTEM: 30 },
    { year: 2022, STEM: 65, NonSTEM: 35 },
    { year: 2024, STEM: 80, NonSTEM: 40 },
  ];

  return (
    <section id="careers" className="scroll-mt-24">
      <div className="max-w-7xl mx-auto py-16 px-6 bg-gradient-to-b from-indigo-50 to-purple-50 rounded-xl">
        {/* Fun Fact Banner */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12 px-6 rounded-2xl shadow-lg mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-extrabold mb-4"
          >
            💡 Did you know? STEM jobs pay up to 80% more than some Non-STEM jobs in Malaysia!
          </motion.h2>
          <p className="text-lg opacity-90">
            Career choices can drastically impact salary and growth opportunities 🚀
          </p>
        </section>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {/* Salary Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-tr from-indigo-100 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-indigo-700 mb-4">Average Monthly Salary (MYR)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salaryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
                <XAxis dataKey="career" tick={{ fill: '#111827', fontSize: 13, fontWeight: 600 }} />
                <YAxis tick={{ fill: '#111827', fontSize: 13, fontWeight: 600 }} />
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
                <Bar dataKey="salary" fill="url(#colorSalary)" radius={[8, 8, 0, 0]} />
                <defs>
                  <linearGradient id="colorSalary" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366F1" stopOpacity={0.9} />
                    <stop offset="95%" stopColor="#9333EA" stopOpacity={0.7} />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Job Demand Growth */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-tr from-purple-100 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-indigo-700 mb-4">Job Demand Growth</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={demandData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
                <XAxis dataKey="year" tick={{ fill: '#111827', fontSize: 13, fontWeight: 600 }} />
                <YAxis tick={{ fill: '#111827', fontSize: 13, fontWeight: 600 }} />
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
                <Line type="monotone" dataKey="STEM" stroke="#4F46E5" strokeWidth={3} dot={{ r: 5 }} />
                <Line type="monotone" dataKey="NonSTEM" stroke="#F59E0B" strokeWidth={3} dot={{ r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Career Highlight Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Software Engineer', fact: 'High demand globally with strong remote opportunities.' },
            { title: 'Data Scientist', fact: 'One of the fastest-growing STEM careers with big data boom.' },
            { title: 'Teacher', fact: 'Essential for society, though often undervalued in pay.' },
            { title: 'Marketing Specialist', fact: 'Blends creativity with business strategy for modern markets.' },
          ].map((career, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1 border border-indigo-100"
            >
              <h4 className="text-lg font-bold text-indigo-600 mb-2">{career.title}</h4>
              <p className="text-gray-700">{career.fact}</p>
            </motion.div>
          ))}
        </section>
      </div>
    </section>
  );
}
