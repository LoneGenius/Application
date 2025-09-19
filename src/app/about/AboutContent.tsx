'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

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
            className="text-6xl font-extrabold leading-snug bg-gradient-to-r from-yellow-300 via-pink-400 to-red-500 bg-clip-text text-transparent"
          >
            About TechnologyKu
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

      {/* Team Section */}
      <section className="max-w-5xl mx-auto px-6 pt-12 pb-8">
        <h2 className="text-5xl font-bold text-center text-indigo-700 mb-8">Meet Our Team</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[{
            name: 'Aqilah',
            role: 'Data Scientist',
            img: '/team/aqilah.jpg',
            linkedin: 'https://www.linkedin.com/in/aqilahmaisarah/',
          },
          {
            name: 'Najwa',
            role: 'Software Engineer',
            img: '/team/najwa.jpg',
            linkedin: 'https://www.linkedin.com/in/nurul-najwa-302519267/',
          },
          {
            name: 'Damia',
            role: 'ML Engineer',
            img: '/team/damia.jpg',
            linkedin: 'https://www.linkedin.com/in/almira-damia/',
          },
          {
            name: 'Danish',
            role: 'AI Engineer',
            img: '/team/danish.jpg',
            linkedin: 'https://www.linkedin.com/in/muhammad-danish-aiman-hariss-2475132b8/',
          }
          ].map((member) => (
            <div
              key={member.name}
              className="bg-white border border-indigo-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition text-center"
            >
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow mb-4">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>

              <h3 className="text-lg font-semibold text-indigo-700">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.role}</p>

              {/* badges */}
              <div className="mt-3 flex items-center justify-center gap-2 flex-wrap">
                <span className="text-xs bg-indigo-50 text-indigo-700 border border-indigo-100 px-2.5 py-1 rounded-full">
                  UMPSA
                </span>
                <span className="text-xs bg-amber-50 text-amber-700 border border-amber-100 px-2.5 py-1 rounded-full">
                  Final-year student
                </span>
              </div>

              {/* LinkedIn button */}
              <div className="mt-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium bg-white text-indigo-700 border border-indigo-200 rounded-full px-3.5 py-2 hover:bg-indigo-50 transition"
                >
                  <span className="inline-block w-4 h-4 rounded-[3px] bg-[#0A66C2] text-white leading-4 text-[10px] font-bold flex items-center justify-center">
                    in
                  </span>
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* slim divider */}
      <div className="max-w-5xl mx-auto px-6">
        <hr className="border-t border-indigo-100 my-6" />
      </div>

      {/* Mission & Why */}
      <section className="max-w-4xl mx-auto px-6 pt-2 pb-14">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-indigo-700">Mission</h2>
          <p className="mt-4 text-gray-700 leading-relaxed text-lg text-justify">
            Our mission is to create equal opportunities and ensure a decent standard of living for all Malaysians, focusing on STEM categories. Guided by the Thirteenth Malaysia Plan (RMK-13), we are committed to bridging skills gaps through inclusive education, fair employment, and digital empowerment. This mission supports SDG 8: Decent Work and Economic Growth and SDG 10: Reduced Inequalities, ensuring that every graduate can thrive in a sustainable and dignified future — even in today’s fast-paced digitalisation era.
          </p>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-indigo-700">Why We Built This</h2>
          <p className="mt-4 text-gray-700 leading-relaxed text-lg text-justify">
            STEM grads race ahead while many non-STEM grads are stuck in mismatched jobs. That gap holds back fair growth for everyone. Our dashboard and chatbot turn the odds around—with clear insights, career paths, and smart guidance to help grads move forward with confidence.
          </p>
        </div>
      </section>

      {/* Objectives (renamed + centered + larger like Mission) */}
      <section className="max-w-5xl mx-auto px-6 pb-14 text-center">
        <h2 className="text-3xl font-bold text-indigo-700 mb-8">Objectives</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[{ title: 'To analyse', text: 'employment rates differences between STEM and non-STEM fields.' },
          { title: 'To predict', text: 'which STEM categories for graduates are at risk of unemployment using machine leaning models.' },
          { title: 'To design', text: 'a dashboard and an AI-driven recommendation engine that demonstrates how AI/ML can recommend pathways for graduates.' },
          ].map((v) => (
            <div
              key={v.title}
              className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 text-left"
            >
              <p className="font-semibold text-indigo-800">{v.title}</p>
              <p className="text-gray-700 mt-2">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Methodology */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl p-8 text-center flex items-center justify-between">
          <div className="w-full sm:w-1/2 pr-6">
            <h4 className="text-2xl font-bold mb-4">Methodology</h4>
            <p className="mt-2 text-white/95">
              Learn about the frameworks we use for predicting unemployment risk and recommending career pathways.
            </p>
            <div className="mt-6">
              <Link
                href="/framework"  // Link to the Methodology page
                className="inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow hover:shadow-md hover:-translate-y-0.5 transition"
              >
                Go to Methodology
              </Link>
            </div>
          </div>

          <div className="w-full sm:w-1/2 pl-6 flex justify-center">
            {/* Illustration for Methodology */}
            <div style={{ paddingBottom: '56.25%' }} className="w-full h-0 relative">
              <img
                src="/image/method.jpeg"  // Path to your illustration
                alt="Methodology"
                className="absolute inset-0 w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl p-8 text-center flex items-center justify-between">
          <div className="w-full sm:w-1/2 pr-6">
            <h4 className="text-2xl font-bold mb-4">Explore Our Dashboards</h4>
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

          <div className="w-full sm:w-1/2 pl-6 flex justify-center">
            {/* Illustration for CTA */}
            <div style={{ paddingBottom: '56.25%' }} className="w-full h-0 relative">
              <img
                src="/image/dashboard.jpeg"  // Path to your illustration
                alt="Dashboards"
                className="absolute inset-0 w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
