# Dev RPG Level System

Turn your developer skill tracking into a game! Gain XP by working on skills, level up, and unlock achievements.

## Features

- 🎮 **RPG‑style leveling** – Each skill contributes to your total XP, increasing your level dynamically.
- 📊 **Skill cards** – Add XP to individual skills with a click; each card shows its own progress bar.
- 🏆 **Achievements** – Unlock them as you hit milestones:
  - Reach Level 3
  - 500 Total XP
  - Have 3 skills with at least 100 XP each
- 📈 **Analytics dashboard** – Bar chart visualizing XP per skill, plus total XP and current level.
- ✨ **Modern 2026 UI** – Glassmorphism cards, smooth hover effects, fully responsive, with Framer Motion fade‑in animations.
- ⚡ **Built with Vite** – Fast development and hot module replacement.

## Tech Stack

- **React 18** + **TypeScript** – Component‑based UI with type safety.
- **Vite** – Next‑generation frontend tooling.
- **Tailwind CSS** – Utility‑first styling for rapid UI development.
- **Zustand** – Lightweight state management for XP and skills.
- **Framer Motion** – Smooth animations.
- **Recharts** – Composable charting library.
- **Lucide React** – Beautiful icons for achievements.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/JahanzaibJameel/dev-rpg-level-system.git
   cd dev-rpg-level-system
   Install dependencies:
   ```

bash
npm install
Start the development server:

bash
npm run dev
Open http://localhost:5173 to view it in the browser.

Project Structure
text
src/
├── components/ # Reusable UI components
│ ├── SkillCard.tsx
│ ├── AchievementCard.tsx
│ └── AnalyticsSection.tsx
├── store/ # Zustand store
│ └── devStore.ts
├── utils/ # Helper functions
│ └── level.ts
├── App.tsx # Main application
├── main.tsx # Entry point
└── index.css # Tailwind imports
Git Commit History
The project was built following a structured blueprint. The commit history reflects each step:

initial: Vite + React + TypeScript + Tailwind setup

feat: XP system with dynamic level calculation

feat: skill system with individual XP tracking

feat: achievement unlock system

feat: analytics dashboard with charts

style: modern 2026 UI polish and animations

Usage
Click +10 XP on any skill card to increase that skill’s XP. Total XP and level update automatically.

Watch achievements unlock as you progress.

The analytics chart updates in real time.

Deployment
You can easily deploy this app to Vercel, Netlify, or any static hosting service:

bash
npm run build
Then deploy the dist folder.

Built With
Vite

React

TypeScript

Tailwind CSS

Zustand

Framer Motion

Recharts

Lucide Icons

License
This project is open source and available under the MIT License.
