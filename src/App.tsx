import { useDevStore } from './store/devStore';
import { calculateLevel, getProgressPercentage } from './utils/level';

function App() {
  const totalXP = useDevStore((state) => state.totalXP);
  const level = calculateLevel(totalXP);
  const progress = getProgressPercentage(totalXP);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Dev RPG Level System</h1>
        <div className="mt-4 flex items-center gap-4">
          <span className="text-2xl font-semibold">Level {level}</span>
          <div className="flex-1 h-4 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-sm text-gray-300">{totalXP} XP</span>
        </div>
      </header>
    </div>
  );
}

export default App;