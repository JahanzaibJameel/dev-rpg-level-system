// XP needed for each level: quadratic progression (e.g., level 1 = 100 XP, level 2 = 300 XP, etc.)
export const XP_PER_LEVEL = 100;

export function calculateLevel(totalXP: number): number {
  // level = floor( (sqrt(1 + 8 * totalXP / XP_PER_LEVEL) - 1) / 2 ) + 1? Simpler: level = floor(totalXP / XP_PER_LEVEL) + 1
  // But for a smoother progression, we'll use a simple linear: level 1 at 0-99, level 2 at 100-199, etc.
  return Math.floor(totalXP / XP_PER_LEVEL) + 1;
}

export function getProgressPercentage(totalXP: number): number {
  const level = calculateLevel(totalXP);
  const xpForCurrentLevel = (level - 1) * XP_PER_LEVEL;
  const xpIntoLevel = totalXP - xpForCurrentLevel;
  return (xpIntoLevel / XP_PER_LEVEL) * 100;
}