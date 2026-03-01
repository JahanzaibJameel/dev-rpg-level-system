import { create } from 'zustand';

export interface Skill {
  name: string;
  xp: number;
}

interface DevState {
  totalXP: number;
  skills: Skill[];
  addSkillXP: (name: string, amount: number) => void;
}

export const useDevStore = create<DevState>((set) => ({
  totalXP: 0,
  skills: [
    { name: 'React', xp: 0 },
    { name: 'TypeScript', xp: 0 },
    { name: 'CSS', xp: 0 },
    { name: 'Algorithms', xp: 0 },
    { name: 'System Design', xp: 0 },
  ],
  addSkillXP: (name, amount) =>
    set((state) => {
      const updatedSkills = state.skills.map((skill) =>
        skill.name === name ? { ...skill, xp: skill.xp + amount } : skill
      );
      const totalXP = updatedSkills.reduce((sum, s) => sum + s.xp, 0);
      return { skills: updatedSkills, totalXP };
    }),
}));