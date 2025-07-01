import type { Config } from "tailwindcss";
import baseConfig from "../../packages/config-tailwind";

export default {
  // We need to append the current file to the purge content array. 
  content: [...baseConfig.content, "./src/**/*.{ts,tsx}"],
  presets: [baseConfig],
} satisfies Config;
