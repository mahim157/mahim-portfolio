import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { ink: "#080b12", panel: "#101521", accent: "#77a7ff" }, boxShadow: { glow: "0 0 70px rgba(91, 141, 239, .16)" } } },
  plugins: []
};
export default config;
