import { checkEnvironment } from "../utils/checkEnv";

export const taskyFeatures = [
  {
    name: "Gamified Experience",
    description: "Earn points and badges as you complete tasks.",
    icon: "https://example.com/icons/gamified-experience.png",
  },
  {
    name: "Collaborate Easily",
    description: "Share tasks and collaborate with friends or colleagues.",
    icon: "https://example.com/icons/collaborate-easily.png",
  },
  {
    name: "Custom Themes",
    description: "Personalize your todo list with different themes.",
    icon: "https://example.com/icons/custom-themes.png",
  },
  {
    name: "Daily Challenges",
    description: "Stay motivated with daily and weekly challenges.",
    icon: "https://example.com/icons/daily-challenges.png",
  },
  {
    name: "Real-Time Sync",
    description: "Access your tasks anytime, anywhere with real-time sync.",
    icon: "https://example.com/icons/real-time-sync.png",
  },
];

export const API_ROUTE = checkEnvironment().concat("/api/todos");
