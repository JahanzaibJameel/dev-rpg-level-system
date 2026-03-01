import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Skill } from '../store/devStore';

interface AnalyticsSectionProps {
  skills: Skill[];
  totalXP: number;
  level: number;
}

export default function AnalyticsSection({ skills, totalXP, level }: AnalyticsSectionProps) {
  const data = skills.map(s => ({ name: s.name, xp: s.xp }));

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
      <h3 className="text-xl font-semibold mb-4">Analytics</h3>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{ backgroundColor: '#1f2937', border: 'none' }}
              labelStyle={{ color: '#f3f4f6' }}
            />
            <Bar dataKey="xp" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 flex justify-between text-sm text-gray-300">
        <span>Total XP: {totalXP}</span>
        <span>Level: {level}</span>
      </div>
    </div>
  );
}