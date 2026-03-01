import { useDevStore, Skill } from '../store/devStore';
import { getProgressPercentage } from '../utils/level';

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  const addSkillXP = useDevStore((state) => state.addSkillXP);

  // Progress bar for skill (each skill also has its own level, but we just show XP progress relative to 100 XP per level)
  const progress = getProgressPercentage(skill.xp); // reusing same logic for simplicity

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:scale-105 transition-transform duration-200">
      <h3 className="text-xl font-semibold">{skill.name}</h3>
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
    </div>
  );
}