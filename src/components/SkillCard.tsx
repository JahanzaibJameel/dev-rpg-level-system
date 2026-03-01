import { useDevStore } from '../store/devStore';
import { calculateSkillLevel, getProgressPercentage } from '../utils/level';
import type { Skill } from '../store/devStore';
import { motion } from 'framer-motion';

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  const addSkillXP = useDevStore((state) => state.addSkillXP);
  const skillLevel = calculateSkillLevel(skill.xp);
  const progress = getProgressPercentage(skill.xp); // same as before, works per skill

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all"
    >
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-semibold">{skill.name}</h3>
        <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
          Lvl {skillLevel}
        </span>
      </div>
      <p className="text-sm text-gray-400 mt-1">XP: {skill.xp}</p>
      <div className="mt-3 h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <button
        onClick={() => addSkillXP(skill.name, 10)}
        className="mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
      >
        +10 XP
      </button>
    </motion.div>
  );
}