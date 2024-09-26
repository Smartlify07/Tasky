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

export const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    description:
      "Taskbud has completely transformed the way I manage my tasks. The playful interface and real-time collaboration make it not just a tool, but a joy to use every day.",
    img: "/assets/images/testimonials/user-1.png",
  },
  {
    id: 2,
    name: "Michael Thompson",
    description:
      "I've tried many task management apps, but none come close to the experience Taskbud provides. The mix of fun elements with powerful features keeps me motivated and on track.",
    img: "/assets/images/testimonials/E-commerce-1.svg",
  },
  {
    id: 3,
    name: "Sophia Williams",
    description:
      "Taskbud is more than just a productivity app; it's like having a buddy who keeps you on your toes and makes task management fun! I can't imagine going back to anything else.",
    img: "/assets/images/testimonials/E-commerce-2.svg",
  },
  {
    id: 4,
    name: "David Brown",
    description:
      "Using Taskbud feels like a game, but one where I actually win at getting things done. It's intuitive, engaging, and has improved my productivity in ways I never expected.",
    img: "/assets/images/testimonials/E-commerce.svg",
  },
  {
    id: 5,
    name: "Emma Davis",
    description:
      "Taskbud's collaborative features are amazing! It's so easy to coordinate with my team, and the fun design makes it an enjoyable experience for everyone.",
    img: "/assets/images/testimonials/Guacamole-1.svg",
  },
  {
    id: 6,
    name: "Jenna miller",
    description:
      "What I love about Taskbud is how it turns task management into something exciting. The creative design and interactive features make staying organized a breeze.",
    img: "/assets/images/testimonials/Guacamole.svg",
  },
];

export const steps = [
  {
    id: "step1",
    title: "Sign Up",
    description:
      "Create an account and start your journey to fun productivity.",
  },
  {
    id: "step2",
    title: "Add Tasks",
    description: "Organize your tasks with ease.",
  },
  {
    id: "step3",
    title: "Collaborate",
    description: "Invite friends or colleagues to collaborate on tasks.",
  },
  {
    id: "step4",
    title: "Stay Motivated",
    description: "Complete challenges, earn rewards, and track your progress.",
  },
];

export const API_ROUTE = checkEnvironment().concat("/api/todos");
