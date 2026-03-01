import { motion } from 'framer-motion';
import { Lock, CheckCircle } from 'lucide-react'; // We'll need to install lucide-react or use simple emoji

interface AchievementCardProps {
  title: string;
  unlocked: boolean;
}

export default function AchievementCard({ title, unlocked }: AchievementCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`bg-white/5 backdrop-blur-xl border rounded-2xl p-6 flex items-center justify-between ${
        unlocked ? 'border-green-500' : 'border-white/10'
      }`}
    >
      <span className="text-lg font-medium">{title}</span>
      {unlocked ? (
        <CheckCircle className="w-6 h-6 text-green-500" />
      ) : (
        <Lock className="w-6 h-6 text-gray-500" />
      )}
    </motion.div>
  );
}