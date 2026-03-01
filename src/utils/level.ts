// XP needed for each level (for skills and global)
export const XP_PER_LEVEL = 100;

export function calculateLevel(totalXP: number): number {
  return Math.floor(totalXP / XP_PER_LEVEL) + 1;
}

export function getProgressPercentage(totalXP: number): number {
  const level = calculateLevel(totalXP);
  const xpForCurrentLevel = (level - 1) * XP_PER_LEVEL;
  const xpIntoLevel = totalXP - xpForCurrentLevel;
  return (xpIntoLevel / XP_PER_LEVEL) * 100;
}

// New: skill level (same formula, but we keep it separate for clarity)
export function calculateSkillLevel(skillXP: number): number {
  return Math.floor(skillXP / XP_PER_LEVEL) + 1;
}