'use client';

import { motion } from 'framer-motion';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts';
import { Rocket, Star, Users } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

// Use RELATIVE imports (no alias) to avoid module-not-found issues
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

  // Demo data for top dashboard cards
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
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white py-24 text-center rounded-b-3xl shadow-2xl mb-16">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl font-extrabold leading-snug bg-gradient-to-r from-yellow-300 via-pink-400 to-red-500 bg-clip-text text-transparent"
        >
          Discover Your Future Career <br /> With TechnologyKU
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

        {/* Buttons that SCROLL to sections on this page */}
        <div className="mt-12 flex justify-center gap-8 flex-wrap">
          <Link
            href="/#careers"
            className="bg-yellow-300 text-indigo-800 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition"
          >
            Explore Careers
          </Link>
          <Link
            href="/#skills"
            className="border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition"
          >
            View Skills
          </Link>
          <Link
            href="/#pathways"
            className="bg-pink-200 text-indigo-900 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition"
          >
            Career Pathways
          </Link>
        </div>
      </section>

      {/* Feature cards */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {[
          {
            icon: Rocket,
            title: 'Your Path Forward',
            desc: 'Clear, inclusive career roadmaps designed for every background.',
          },
          {
            icon: Star,
            title: 'Skill Building',
            desc: 'Master the skills employers value most with guided learning.',
          },
          {
            icon: Users,
            title: 'Support & Guidance',
            desc: 'Get personalized advice and mentorship along your journey.',
          },
        ].map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            <Icon className="text-indigo-600 mb-6" size={42} />
            <h2 className="text-2xl font-bold text-indigo-700">{title}</h2>
            <p className="mt-3 text-gray-700 text-lg">{desc}</p>
          </motion.div>
        ))}
      </section> <br /> 

      {/* Overview dashboard cards */}
      <section className="bg-white shadow-lg rounded-xl p-12 mb-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">🎓 Graduates Pathways Overview</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Salary Comparison */}
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

          {/* Employment Alignment */}
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
                  {employmentData.map((_, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </section>

      {/* ===== Sections on the SAME page ===== */}
      <CareersSection  />  <br />
      <SkillsSection />  <br />
      <PathwaysSection />

    </div>
  );
}
