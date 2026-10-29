export type Project = {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  description: string;
  image: string; // Image field added
  stack: string[];
  live: string;
  github: string;
  accent: string;
  number: string;
  features: string[];
  challenges: string[];
  future: string[];
};

export const projects: Project[] = [
  {
    slug: "bazar-dor",
    name: "Bazar Dor",
    eyebrow: "Market intelligence · Web app",
    summary: "A market price discovery experience for everyday products, built to make price comparison easier.",
    description: "Bazar Dor is a responsive market information web app focused on helping people explore everyday product prices and compare market ranges. It includes category browsing, search and sorting, price summaries, and account-related UI.",
    image: "/bazar-dor.png", // Direct path in public folder
    stack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Better Auth", "API integration"],
    live: "https://bazar-dor-lemon.vercel.app",
    github: "https://github.com/mahim157/BazarDor",
    accent: "blue",
    number: "01",
    features: [
      "Browse everyday product categories",
      "Search and sort products",
      "Compare minimum, maximum and average prices",
      "Responsive layouts for mobile and desktop",
      "Authentication interface and profile features"
    ],
    challenges: [
      "Keeping product information easy to scan across screen sizes",
      "Handling asynchronous API data and loading or error states",
      "Connecting authentication flows with the user experience"
    ],
    future: [
      "Add historical price charts and saved items",
      "Improve validation and automated tests",
      "Expand verified market data sources and forecasting insights"
    ]
  },
  {
    slug: "fitlog",
    name: "Fitlog",
    eyebrow: "Fitness · Workout tracker",
    summary: "A lightweight workout planner that helps users organize training sessions and track their routines.",
    description: "Fitlog is a workout planning interface built with the Next.js App Router. It focuses on a clean training workflow, reusable UI components, and browser-based persistence so users can manage a routine without creating an account.",
    image: "/images/fitlog.png", // Inside public/images folder
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Context API", "LocalStorage", "Lucide"],
    live: "https://fitlog-workout-tracker-pied.vercel.app",
    github: "https://github.com/mahim157/Fitlog",
    accent: "green",
    number: "02",
    features: [
      "Plan and organize workout sessions",
      "Set a five-lift cap for a workout",
      "Persist routine data in the browser",
      "Toast feedback for user actions",
      "Responsive, focused workout UI"
    ],
    challenges: [
      "Managing shared state across interactive components",
      "Keeping browser storage in sync with UI state",
      "Designing a useful workflow without a backend"
    ],
    future: [
      "Add progress history and personal records",
      "Support export and import of routines",
      "Add accessible keyboard flows and more tests"
    ]
  },
  {
    slug: "dev-stack-builder",
    name: "Dev Stack Builder",
    eyebrow: "Developer tools · Interactive app",
    summary: "An interactive tool concept for assembling and exploring a practical development stack.",
    description: "Dev Stack Builder presents a simple way to explore a web development stack and make technology choices. The project emphasizes clear information hierarchy, component-driven UI, and a smooth interactive experience.",
    image: "/dev-stack.png", // Direct path in public folder
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    live: "https://dev-stack-builder-app-eight.vercel.app",
    github: "https://github.com/mahim157/dev-stack-builder",
    accent: "purple",
    number: "03",
    features: [
      "Explore development stack options",
      "Organize technologies into a readable view",
      "Simple, responsive interface",
      "Reusable UI patterns"
    ],
    challenges: [
      "Presenting multiple technology choices without visual clutter",
      "Structuring reusable components for future additions",
      "Maintaining a consistent experience across devices"
    ],
    future: [
      "Add stack presets for common project types",
      "Enable shareable stack configurations",
      "Include compatibility notes and documentation links"
    ]
  }
];