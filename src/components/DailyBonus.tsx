import { useState, useEffect } from 'react';
import { useDevStore } from '../store/devStore';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift } from 'lucide-react';

const DAILY_BONUS_AMOUNT = 10; // XP per skill
const STORAGE_KEY = 'lastDailyBonus';

export default function DailyBonus() {
  const [canClaim, setCanClaim] = useState(false);
  const [timeLeft, setTimeLeft] = useState('');
  const addSkillXP = useDevStore((state) => state.addSkillXP);

  useEffect(() => {
    checkBonusAvailability();
    const interval = setInterval(checkBonusAvailability, 1000);
    return () => clearInterval(interval);
  }, []);

  const checkBonusAvailability = () => {
    const lastClaim = localStorage.getItem(STORAGE_KEY);
    if (!lastClaim) {
      setCanClaim(true);
      setTimeLeft('');
      return;
    }

    const last = new Date(lastClaim).getTime();
    const now = Date.now();
    const diff = 24 * 60 * 60 * 1000 - (now - last); // 24 hours in ms

    if (diff <= 0) {
      setCanClaim(true);
      setTimeLeft('');
    } else {
      setCanClaim(false);
      const hours = Math.floor(diff / (60 * 60 * 1000));
      const minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
      const seconds = Math.floor((diff % (60 * 1000)) / 1000);
      setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
    }
  };

  const handleClaim = () => {
    if (!canClaim) return;

    // Add 10 XP to each skill
    const skills = useDevStore.getState().skills;
    skills.forEach(skill => {
      addSkillXP(skill.name, DAILY_BONUS_AMOUNT);
    });

    // Record claim time
    localStorage.setItem(STORAGE_KEY, new Date().toISOString());
    setCanClaim(false);
    checkBonusAvailability(); // update timer
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-4"
    >
      <button
        onClick={handleClaim}
        disabled={!canClaim}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
          canClaim
            ? 'bg-yellow-500 hover:bg-yellow-600 text-gray-900 cursor-pointer'
            : 'bg-gray-700 text-gray-400 cursor-not-allowed'
        }`}
      >
        <Gift className="w-5 h-5" />
        <span>Daily Bonus</span>
      </button>
      <AnimatePresence mode="wait">
        {!canClaim && timeLeft && (
          <motion.span
            key="timer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-sm text-gray-400"
          >
            Next in {timeLeft}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}