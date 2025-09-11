'use client';

import { motion } from 'framer-motion';
import { Briefcase, ArrowRight, Star } from 'lucide-react';

export default function PathwaysSection() {
  const pathways = [
    {
      title: 'STEM → Tech Industry',
      color: 'from-indigo-500 to-purple-500',
      steps: ['Computer Science Degree', 'Software Engineer', 'Senior Developer', 'Tech Lead'],
    },
    {
      title: 'Non-STEM → Creative Industry',
      color: 'from-pink-500 to-yellow-500',
      steps: ['Arts Degree', 'Graphic Designer', 'UI/UX Specialist', 'Creative Director'],
    },
  ];

  const highlights = [
    { title: 'STEM to Non-STEM Pivot', text: 'STEM grads can explore teaching, policy, or business leadership roles.' },
    { title: 'Non-STEM to STEM Bridge', text: 'Short coding bootcamps or data analytics courses can open STEM careers.' },
    { title: 'Hybrid Pathways', text: 'Roles like Product Manager blend tech and business, open to both.' },
  ];

  return (
    <section id="pathways" className="scroll-mt-24">
      <div className="max-w-7xl mx-auto py-16 px-6 bg-gradient-to-b from-indigo-50 to-purple-50 rounded-xl">
        {/* Fun Banner */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12 px-6 rounded-2xl shadow-lg mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-extrabold mb-4"
          >
            🛤️ Career Pathways: Your Journey, Your Growth
          </motion.h2>
          <p className="text-lg opacity-90">
            Whether you’re from STEM or Non-STEM, there are many roads to success 🚀
          </p>
        </section>

        {/* Pathway Roadmaps */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {pathways.map((path, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <h2
                className={`text-2xl font-bold mb-6 bg-gradient-to-r ${path.color} bg-clip-text text-transparent`}
              >
                {path.title}
              </h2>
              <div className="flex flex-col space-y-4">
                {path.steps.map((step, j) => (
                  <motion.div
                    key={j}
                    className="flex items-center gap-3 bg-indigo-50 rounded-lg px-4 py-3 shadow-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: j * 0.2 }}
                  >
                    <Briefcase className="text-indigo-600 w-5 h-5" />
                    <span className="text-gray-800 font-medium">{step}</span>
                    {j !== path.steps.length - 1 && (
                      <ArrowRight className="text-gray-400 w-4 h-4 ml-auto" />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlights Section */}
        <section>
          <h3 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">
            🌟 Alternative Pathways & Insights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-indigo-50 p-6 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1 border border-indigo-100"
              >
                <Star className="w-6 h-6 text-indigo-500 mb-3" />
                <h4 className="text-lg font-bold text-indigo-600 mb-2">{item.title}</h4>
                <p className="text-gray-700">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
