'use client'

import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'

const data = [
  { name: 'Non-STEM mismatch', value: 90 },
  { name: 'STEM match', value: 10 },
]

const COLORS = ['#EF4444', '#3B82F6'] // red + blue

export default function Visualization() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mt-16">
      <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">
        Career Alignment in Malaysia
      </h2>
      <div className="h-72">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={5}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-4 text-center text-gray-600">
        90% of non-STEM graduates in Malaysia don’t continue working in their studied area
      </p>
    </div>
  )
}
